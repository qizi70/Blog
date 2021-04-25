<template>
	<div v-show="show" class="to-top-container" @click="handleClick">
		Top
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show: false
			}
		},
		mounted() {
			this.$bus.$on('mainScroll', this.handleScroll)
		},
		destroyed() {
			this.$bus.$off('mainScroll', this.handleScroll)
		},
		methods: {
			handleScroll(dom){
				if(!dom){
					this.show = false;
					return;
				}
				this.show = dom.scrollTop >= 500;
			},
			handleClick(){
				// 回到顶部
				this.$bus.$emit('setMainScroll', 0)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/var.less';
	.to-top-container{
		background-color: lightblue;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: fixed;
		z-index: 99;
		right: 70px;
		bottom: 50px;
		text-align: center;
		line-height: 50px;
		cursor: pointer;
		text-shadow: 1px 1px 1px #FF0000;
		box-shadow: 3px 2px 7px #008c8c;
	}
</style>
