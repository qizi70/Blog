<template>
	<div class="test-container">
		<SiteAside />
	</div>
</template>

<script>
	import SiteAside from './';
	import '@/assets/style/global.less';
	export default {
		components: {SiteAside}
	}
</script>

<style scoped="scoped" lang="less">
	.test-container{
		width: 250px;
		height: 700px;
		border: 2px solid;
		margin: 0 auto;
	}
</style>
