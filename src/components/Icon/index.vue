<template>
	<i class="iconfont iconfont-container" :class="fontClass"></i>
</template>

<script>
	const classMap = {
	  success: "iconGroup-",
	  error: "iconcuowu",
	  warn: "iconjinggao",
	  info: "iconxinxi",
	};
	export default{
		props: {
			type: {
				type: String,
				default: 'iconmorentu'
			},
		},
		computed: {
		  // 图标类样式
		  fontClass() {
				const val = classMap[this.type] ? classMap[this.type] : this.type;
				return val;
		  },
		},
	}
</script>

<style scoped="scoped">
	.iconfont-container{
		color: inherit;
		font-size: inherit;
	}
</style>
