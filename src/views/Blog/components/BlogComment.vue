<template>
	<div class="blog-comment-container">
		<MessageArea 
			title="评论列表" 
			:subTitle="`(${data.total})`" 
			:list="data.rows"
			:isListLoading="isLoading"
			@submit="handleSubmit"
		/>
		<div v-if="isShow" class="loaded">暂时没有更多啦~~~</div>
	</div>
</template>

<script>
	import MessageArea from '@/components/MessageArea'
	import fetchData from '@/mixins/fetchData.js'
	import { getComments, postComment } from '@/api/blog'
	export default{
		mixins: [fetchData({total: 0, rows: []})],
		components: {MessageArea},
		data(){
			return {
				page: 1,
				limit: 10,
				isShow: false
			}
		},
		mounted() {
			this.$bus.$on('mainScroll', this.handleScroll)
		},
		destroyed() {
			this.$bus.$off('mainScroll', this.handleScroll)
		},
		computed:{
			hasMore(){
				return this.data.rows.length < this.data.total;
			}
		},
		methods: {
			async handleScroll(dom){
				if(this.isLoading || !dom){
					//目前正在加载更多
					return;
				}
				const range = 100;
				const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight); 
				if(dec <= range){
					this.fetchMore()
				}
			},
			async fetchData(){
				return await getComments(this.$route.params.id, this.page, this.limit)
			},
			// 加载下一页
			async fetchMore(){
				if(!this.hasMore){
					this.isShow = true;
					return;
				}
				
				this.isLoading = true;
				this.page++;
				const resp = await this.fetchData()
				this.data.total = resp.total;
				this.data.rows = this.data.rows.concat(resp.rows)
				this.isLoading = false;
			},
			async handleSubmit(formData, callback){
				const resp = await postComment({
					blogId: this.$route.params.id,
					...formData
				})
				this.data.rows.unshift(resp)
				this.data.total++;
				callback('评论成功')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.blog-comment-container{
		margin: 30px 0;
		
		.loaded{
			text-align: center;
			color: #999;
		}
	}
</style>
