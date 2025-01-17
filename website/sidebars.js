// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	docsSidebar: [
		'intro',
		'series-types',
		'price-scale',
		'time-scale',
		'time-zones',
		{
			Migrations: [
				{
					type: 'autogenerated',
					dirName: 'migrations',
				},
			],
		},
	],
	apiSidebar: [{
		type: 'autogenerated',
		dirName: 'api',
	}],
};

module.exports = sidebars;
