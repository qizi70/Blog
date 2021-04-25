// vue-cli 的配置文件

const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "http://test.my-site.com"
			},
		}
	},
	chainWebpack: config => {
		config.resolve.alias.set('@', resolve('src'))
	},
	configureWebpack: {
		...require('./webpack.config.js'),
		resolve: {
			extensions: ['js', 'vue'],
			alias: {
				'@': resolve('src')
			}
		}
	},
}




