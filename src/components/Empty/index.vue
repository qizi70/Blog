<template>
	<div class="empty-container">
		
		<i v-if="text === '无数据'" class="iconfont iconempty"></i>
		<p>{{text}}</p>
		
	</div>
</template>

<script>
	export default{
		props:{
			text: {
				type: String,
				default: "无数据"
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/mixin.less';
	@import '~@/assets/style/var.less';
	.empty-container{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		text-align: center;
		color: @gray;
		
		// .self-center();
		
		i{
			font-size: 70px;
		}
	}
</style>
