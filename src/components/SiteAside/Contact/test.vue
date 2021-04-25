<template>
	<div>
		
		<h1>Contact组件</h1>
		
		<div class="Contact-test">
			<Contact 
				icon="icongithub"
				text="qizi"
			/>
			<Contact
				icon="iconemail"
				text="1175883207@qq.com"
			/>
			<Contact 
				icon="iconqq"
				text="1175883207"
				href="tencent://message/?Menu=yes&uin=1175883207&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
			/>
			<Contact
				:imgUrl="weChat"
				icon="iconweixin"
				text="weixin"
			/>
		</div>
		
	</div>
</template>

<script>
	import Contact from './'
	import weChat from '@/assets/wechatImg.jpg'
	export default{
		components: {Contact},
		data(){
			return {
				weChat: weChat
			}
		}
	}
</script>

<style scoped="scoped">
	.Contact-test{
		width: 400px;
		height: 400px;
		border: 2px solid red;
		background-color: #000000;
		margin: 0 auto;
		padding-top: 200px;
	}
</style>
