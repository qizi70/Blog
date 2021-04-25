<template>
	<div>
		
		<h1>Empty组件</h1>
		
		<div class="Empty-test">
			<Empty />
		</div>
		
	</div>
</template>

<script>
	import Empty from './'
	export default{
		components: {Empty}
	}
</script>

<style scoped="scoped">
	.Empty-test{
		width: 500px;
		height: 400px;
		margin: 0 auto;
		border: 2px solid;
		position: relative;
	}
</style>
