import type { Component } from './types'; // eslint-disable-line

import * as rollup from 'rollup/dist/es/rollup.browser.js';

import type { Warning } from 'svelte/types/compiler/interfaces';
import { compile } from 'svelte/compiler';
import * as mdsvex from 'https://cdn.jsdelivr.net/npm/mdsvex/dist/browser-es.js';
// import('https://cdn.jsdelivr.net/npm/mdsvex/dist/browser-es.js'); // works

self.addEventListener('message', async (event: MessageEvent): Promise<void> => {
	console.log('Mess rx in worker');

	self.postMessage('Me too');
});
