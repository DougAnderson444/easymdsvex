// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: { default: true },
		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === 'development' ? '' : '/easymdsvex'
		},

		package: {
			// files: (file) => file.startsWth('demo'),
			exports: (file) => file === 'index.js'
		},

		vite: {
			resolve: {
				alias: {
					'@douganderson444/easymdsvex': path.resolve('src/lib')
				}
			},
			build: {
				rollupOptions: {
					plugins: [],
					output: {
						minifyInternalExports: false,
						compact: false,
						sourcemap: true
					}
				},
				minify: false,
				sourcemap: true,
				optimization: {
					minimize: false
				}
			},
			optimization: {
				minimize: false
			},
			worker: {
				format:'es' //  default is 'iife' // https://vitejs.dev/config/#worker-format
			}
		}
	}
};

export default config;
