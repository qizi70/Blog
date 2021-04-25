//打包分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if(process.env.NODE_ENV === 'production'){
	module.exports = {
		plugins: [new BundleAnalyzerPlugin()],
		externals: { // 告诉 webpack，这些资源不需要打包，稍后可以从变量中获取
			vue: 'vue',
			vuex: 'vuex',
			'vue-router': 'VueRouter',
			axios: 'axios'
		}
	}
}else{
	module.exports = {
		
	}
}




