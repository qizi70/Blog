<template>
	<ul class="right-list-container">
		<li v-for="(item, i) in list" :key="i">
			<span 
				@click="handleClick(item)" 
				:class="{active: item.isSelect}"
			>{{item.name}}</span>
			<span 
				@click="handleClick(item)" 
				v-if="item.aside" 
				class="aside" 
				:class="{active: item.isSelect}"
			>{{item.aside}}</span>
			<RightList :list="item.children" @select="handleClick"/>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'RightList',
		props: {
			// [ { name: 'xxx', isSelect: true, children: [{name: 'yyy', ...}] } ]
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			handleClick(item){
				if(!item.isSelect){
					this.$emit('select', item)
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/var.less';
	.right-list-container{
		width: 200px;
		list-style: none;
		padding: 0;
		.right-list-container{
			margin-left: 1.4em;
		}
		li{
			min-height: 40px;
			line-height: 40px;
			cursor: pointer;
			font-size: 14px;
			
			.aside{
				margin-left: 1em;
				font-size: 12px;
				color: @gray;
			}
			
			// span{
			// 	display: block;
			// }
			// span:hover{
			// 	background-color: #dcdfe2;
			// 	border-radius: 2px;
			// }
			.active{
				color: @warn;
				font-weight: bold;
			}
		}
	}
</style>
