// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	typescript: {
		strict: true
	},
	app: {
		head: {
			title: 'MultiSigWallet',
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			// script: [
			// 	// <script src="https://myawesome-lib.js"></script>
			// 	{ src: 'scripts/main.js' }
			// ],
			link: [
				// <link rel="stylesheet" href="https://myawesome-lib.css">
				{ rel: 'stylesheet', href: 'assets/styles/main.css' }
			],
			// // please note that this is an area that is likely to change
			// style: [
			// 	// <style type="text/css">:root { color: red }</style>
			// 	{ children: ':root { color: red }', type: 'text/css' }
			// ],
			noscript: [
				// <noscript>JavaScript is required</noscript>
				{ children: 'JavaScript is required' }
			]
		}
	},
	modules: ['@pinia/nuxt'],
	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			'defineStore', // import { defineStore } from 'pinia'
			['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
		],
	},
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
	},
})
