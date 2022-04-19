/**
 * @type {import("drygen").UserConfig}
 */
module.exports = {
	rules: [
		{
			name: "pug/components",
			dependencies: [
				"src/site/includes/components/*.pug",
				"!src/site/includes/components/.components.pug",
			],
			outputs: [
				{
					path: "src/site/includes/components/.components.pug",
					template: "src/site/includes/components/.import.pug.ejs",
				},
			],
		},
		{
			name: "ts/components",
			dependencies: ["src/scripts/components/*.ts", "!src/scripts/components/index.ts"],
			outputs: [
				{
					path: "src/scripts/components/index.ts",
					template: "src/scripts/components/.import.ts.ejs",
				},
			],
		},
		{
			name: "ts/stores",
			dependencies: ["src/scripts/stores/*.ts", "!src/scripts/stores/index.ts"],
			outputs: [
				{
					path: "src/scripts/stores/index.ts",
					template: "src/scripts/stores/.import.ts.ejs",
				},
			],
		},
	],
};
