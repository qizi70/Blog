<template>
	<div class="menu-container">
			<!-- :href="item.link" -->
		<router-link
			:exact="item.exact"
			:to="{name: item.name}"
			v-for="item in items" 
			:key="item.link"
		>
			<div class="icon">
				<Icon :type="item.icon" /> 
			</div>
			<span>{{item.title}}</span>
		</router-link>
	</div>
</template>

<script>
	import Icon from '@/components/Icon'
	export default {
		components: {
			Icon
		},
		data(){
			return {
				items: [
					{
						name: 'Home',
						title: '首页',
						icon: 'iconzhuye1',
						exact: true
					},
					{
						name: 'Blog',
						title: '文章',
						icon: 'iconwodewenzhang',
						exact: false // 是否需要精确匹配
					},
					// {
					// 	name: 'About',
					// 	title: '关于我',
					// 	icon: 'iconweibiaoti-',
					// 	exact: true
					// },
					{
						name: 'Project',
						title: '项目&效果',
						icon: 'iconxiangmucaidan',
						exact: true
					},
					{
						name: 'Message',
						title: '留言板',
						icon: 'iconliuyan',
						exact: true
					}
				]
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/var.less';
	@import '~@/assets/style/global.less';

	.menu-container {
		// color: @gray;
		color: #32e9ae;
		margin: 24px 0;

		a {
			display: flex;
			padding: 0 50px;
			align-items: center;
			height: 45px;
			.icon{
				width: 24px;
			}
			&:hover{
				color: #fff;
			}
			&.router-link-active{
				// background-color: #2d2d2d;
				background-color: #c52020;
				// background-color: lightsalmon;
			}
		}
		
	}
</style>
