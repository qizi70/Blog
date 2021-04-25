<template>
	<img 
		class="avatar-container"
		:src="url" 
		:style="{width: size + 'px', height: size + 'px'}"
	/>
		<!-- :style="{width: width === 100 ? '300px' : '500px', height: height + 'px'}" -->
	
</template>

<script>
	export default {
		props: {
			url: {
				type: String, // url 必须是一个字符串
				// required: true,
				// default: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2853553659,1775735885&fm=26&gp=0.jpg'
			},
			size: {
				type: Number,
				default: 150
			}
		},
	}
</script>

<style scoped="scoped">
	.avatar-container{
		border-radius: 50%;
		object-fit: cover;
		display: block;
	}
</style>
