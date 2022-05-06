<script lang="ts">
	/*
        Main export to add a easymdsvex mdsvex component to a browser
    */
	import { onMount } from 'svelte';
	import type { Component, CacheSaver } from './types';
	import SvelteCompilerWorker from './repl/worker?worker'; // https://vitejs.dev/guide/features.html#import-with-query-suffixes
	import TestWorker from './testerWorker?worker';

	export let value: string | null = null;
	export let initialValue: string = `# Title\nGo ahead, *make* **a** _note_!`;
	export let cacheValue: CacheSaver = (key, value) => {}; // save to a local db, cookies, IDB if you like
	export let TIMEOUT_MS = 900;

	let markdowneditorelement: HTMLTextAreaElement;
	let timeoutID: NodeJS.Timeout | null;

	const DRAFT = '_DRAFT_';
	const COMPONENTS = '_COMPONENTS_';

	let compile: Function;
	let compiled: string;
	let worker: Worker;
	let app: any;
	let easymdsvex: EasyMDE | null;

	$: components = [
		{
			id: 0,
			name: 'App',
			type: 'svx',
			source: easymdsvex?.value() || value // value of the editor contents
		}
	];

	onMount(async () => {
		worker = new SvelteCompilerWorker();
		let testworker = new TestWorker();

		worker.addEventListener('message', (event) => {
			if (timeoutID) return; // ignore if there's another worker thread going, wait for that output
			// no timer left, so use this compiled output
			compiled = event.data.output;
			// warnings = event.data.warnings;
			// diagnostics = event.data.diagnostics;
			console.log('compiled');
		});

		const EasyMDEModule = await import('easymde');
		const EasyMDE = EasyMDEModule.default;

		easymdsvex = new EasyMDE({
			toolbar: [
				'bold',
				'italic',
				'link',
				'image',
				'|',
				'preview',
				'side-by-side',
				'fullscreen',
				'guide'
			],
			element: markdowneditorelement,
			status: [
				{
					className: 'bytes',
					defaultValue: function (el: HTMLElement) {
						// el.innerHTML = '0 of 566 bytes';
					},
					onUpdate: function (el: HTMLElement) {
						// el.innerHTML = ' Save?';
					}
				}
			],
			initialValue,
			// here we replace marked with our custom MDSVex render, so it'll compile our MDSVEX
			previewRender: (plainText, previewElement) => {
				value = easymdsvex?.value() || null; // update component variable

				if (!value) return 'Compile Error, must not be blank';

				// post data msg to compiler
				if (timeoutID) {
					clearTimeout(timeoutID); // cancel any exisitng waiting
				}
				timeoutID = setTimeout(async () => {
					timeoutID = null; // clear any existing timeout

					compiled = await compile(components);
					console.log('compiled', { compiled });
					render(previewElement);

					// also update store
					await cacheValue(COMPONENTS, JSON.stringify(components));
				}, TIMEOUT_MS);

				// until the render is complete, just keep the current HTML
				return previewElement.innerHTML;
			}
		});

		function render(previewElement: HTMLElement) {
			const blob = new Blob([compiled], { type: 'text/javascript' });
			const url = URL.createObjectURL(blob);

			// mount the compiled code as a svelte app into the previewElement
			import(/* @vite-ignore */ url).then(function ({ default: App }) {
				previewElement.innerHTML = '';
				app = new App({ target: previewElement });
			});
		}

		value = easymdsvex.value();

		easymdsvex.codemirror.on('change', function () {
			// save after a brief pause, for more keystrokes
			if (timeoutID) {
				clearTimeout(timeoutID); // cancel any exisitng waiting
			}
			timeoutID = setTimeout(async () => {
				timeoutID = null; // delete timeout when this fn is called
				value = easymdsvex.value(); // expose via export the value of the editor
				await cacheValue(DRAFT, value); // also update store, if one is set
			}, TIMEOUT_MS);
		});

		// compile MDSvex code in the browser
		// only init compile in the browser, not SSR server side
		compile = async function (_components: Component[]): Promise<string> {
			try {
				return new Promise((resolve, reject) => {
					console.log('compiling', { _components });
					// Listen for messages on port1
					const channel = new MessageChannel();
					channel.port1.onmessage = (e) => {
						channel.port1.close();
						resolve(e.data.output);
					};
					// Transfer port2 to the iframe
					worker.postMessage(_components, [channel.port2]);
				});
			} catch (error) {
				console.log(`rpc-run [fail] ${error}`);
				return `rpc-run [fail] ${error}`;
			}
		};
	});

	// $: if (compile && components) compile(components);
</script>

<h1>Simple MDSVex</h1>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css" />
</svelte:head>
<div class="codemirror-container">
	<textarea bind:this={markdowneditorelement} hidden={true} />
</div>

<style>
	.codemirror-container :global(.CodeMirror) {
		font-family: Arial, monospace;
	}
</style>
