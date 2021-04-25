<template>
	<ul class="contact-container">
		<li>
			<a :href="href" target="_blank">
				<div class="icon">
					<Icon :type="icon" />
				</div>
				<span>{{text}}</span>
				<div class="pop" v-if="imgUrl">
					<img :src="imgUrl">
				</div>
			</a>
		</li>
	</ul>
</template>

<script>
	import Icon from '@/components/Icon'
	export default {
		components: {
			Icon
		},
		props:{
			imgUrl: {
				type: String,
			},
			text: {
				type: String,
			},
			icon: {
				type: String,
				required: true
			},
			href: {
				type: String,
				default: 'javascript:;'
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/var.less';
	@import '~@/assets/style/global.less';

	.contact-container {
		color: #fff;
		list-style: none;
		padding:0 20px;
		margin: 0;
		// color: @gray;
		color: #163e3e;
		li {
			height: 30px;
			line-height: 30px;
			margin: 14px 0;
			position: relative;
			&:hover{
				.pop{
					transform: scaleY(1);
				}
			}
			
			a {
				font-size: 14px;
				display: flex;
				align-items: center;
				cursor: pointer;
				&:hover{
					color: #fff;
				}
				
				.icon {
					font-size: 26px;
					width: 36px;
				}
			}
			
			.pop{
				position: absolute;
				left: 0;
				bottom: 35px;
				padding: 10px 15px;
				background-color: #fff;
				border-radius: 5px;
				transform: scaleY(0);
				transform-origin: center bottom; 
				transition: 0.3s;
				img{
					width: 150px;
					height: 150px;
				}
				&::after{
					content: '';
					position: absolute;
					left: 50%;
					transform: translateX(-50%) rotate(45deg);
					width: 8px;
					height: 8px;
					background-color: #fff;
					bottom: -4px;
				}
			}
			
		}
	}
</style>
