import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import config from "./config";

export default defineConfig({
	base: config.pathPrefix,
	plugins: [visualizer()],
	logLevel: "warn",
	server: {
		host: "0.0.0.0",
		proxy: {
			"^/api": {
				target: "http://localhost:8888",
				changeOrigin: true,
				secure: false,
			},
		},
	},
	build: {
		rollupOptions: {
			input: "src/scripts/main.ts",
		},
		manifest: true,
	},
});
