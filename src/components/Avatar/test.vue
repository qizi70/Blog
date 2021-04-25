<template>
	<div id="app">
		<Avatar :url="url" :width="50" :height="50"/>
	</div>
</template>

<script>
	import Avatar from './'
	export default {
		components: {
			Avatar,
		},
		data(){
			return {
				url: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1926836966,2010107208&fm=26&gp=0.jpg',
			}
		}
	}
</script>

<style scoped="scoped">
	.iconfont{
		color: red;
	}
	
</style>
