<template>
	<div>
		
		<h1>ImageLoader组件</h1>
		
		<div class="Image-loader-test">
			<ImageLoader 
				placeholder="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3461177213,1528805342&fm=26&gp=0.jpg"
				src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg"
				@load="handleLoaded"
				:duration="2000"
			/>
		</div>
		
	</div>
</template>

<script>
	import ImageLoader from './'
	export default{
		components: {ImageLoader},
		methods:{
			handleLoaded(){
				console.log('图片加载了');
			}
		}
	}
</script>

<style scoped="scoped">
	.Image-loader-test{
		width: 500px;
		height: 400px;
	}
</style>
