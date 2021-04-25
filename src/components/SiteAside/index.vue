<template>
	<div class="site-aside-container">
		
		<div class="avatar">
			<Avatar :url="data.avatar"/>
		</div>
		
		<h1 class="title">{{data.siteTitle}}</h1>
		
		<div style="margin-bottom: 20px;">
			<Menu />
		</div>
		
		<Contact
			icon="icongithub"
			:text="data.githubName"
			:href="data.github"
		/>
		<Contact
			icon="iconemail"
			:text="data.mail"
			:href="`mailto:${data.mail}`"
		/>
		<Contact 
			icon="iconqq"
			:text="data.qq"
			:href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
		/>
		<Contact
			:imgUrl="data.weixinQrCode"
			icon="iconweixin"
			:text="data.weixin"
		/>
	
	</div>
</template>

<script>
	// import weChat from '@/assets/wechatImg.jpg'
	import Avatar from '@/components/Avatar'
	import Menu from './Menu'
	import Contact from './Contact'
	import { mapState } from 'vuex'
	export default{
		components: {
			Avatar,
			Menu,
			Contact
		},
		data(){
			return {
				// weChat: weChat
			}
		},
		computed: {
			...mapState('setting', ['data'])
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/var.less';
	.site-aside-container{
		width: 100%;
		height: 100%;
		background-color: lightcoral;
		padding: 20px 0;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: auto;
		&::-webkit-scrollbar {
			display: none;
		}
		.avatar{
			display: flex;
			justify-content: center;
		}
		.title{
			font-size: 16px;
			text-align: center;
			margin-top: 30px;
		}
	}
</style>
