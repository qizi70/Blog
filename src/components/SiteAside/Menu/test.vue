<template>
	<div>
		
		<h1>Menu组件</h1>
		
		<div class="Menu-test">
			<Menu />
		</div>
		
	</div>
</template>

<script>
	import Menu from './'
	export default{
		components: {Menu},
	}
</script>

<style scoped="scoped">
	.Menu-test{
		width: 400px;
		height: 600px;
		border: 2px solid #f40;
		background-color: #000000;
		margin: 0 auto;
	}
</style>
