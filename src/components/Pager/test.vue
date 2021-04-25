<template>
	<div id="app">
		<Pager :total="total" :current="current" @pageChange="current = $event"/>
	</div>
</template>

<script>
	import Pager from './'
	export default {
		components: {
			Pager
		},
		data(){
			return {
				current: 3,
				total: 302
			}
		}
	}
</script>

<style scoped="scoped">
	.iconfont{
		color: red;
	}
	
</style>
