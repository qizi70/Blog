<template>
	<div class="blog-list-container" v-loading="isLoading" ref="mainContainer">
		<ul>
			<li v-for="item in data.row" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<router-link :to="{name: 'BlogDetail', params: {
						id: item.id
					}}">
						<img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
					</router-link>
				</div>
				<div class="main">
					<router-link :to="{name: 'BlogDetail', params: {
						id: item.id
					}}">
						<h2>{{item.title}}</h2>
					</router-link>
					<div class="aside">
						<span>日期：{{formatDate(item.createDate)}}</span>
						<span>浏览：{{item.scanNumber}}</span>
						<span>评论: {{item.commentNumber}}</span>
						<router-link :to="{
							name: 'CategoryBlog',
							params: {
								categoryId: item.category.id
							}
						}">{{item.category.name}}</router-link>
					</div>
					<div class="desc">
						{{item.description}}
					</div>
				</div>
			</li>
		</ul>
		<!-- 分页放到这里 -->
		<Pager 
			v-if="data.total" 
			:current="routeInfo.page" 
			:total="data.total"
			:limit="routeInfo.limit" 
			:visibleNumber="10"
			@pageChange="handlePageChange"
		/>
	</div>
</template>

<script>
	import Pager from '@/components/Pager'
	import fetchData from '@/mixins/fetchData';
	import mainScroll from '@/mixins/mainScroll.js'
	import {
		formatDate
	} from '@/common/util'
	import {
		getBlogs
	} from '@/api/blog.js'
	export default {
		mixins: [fetchData({}), mainScroll('mainContainer')],
		components: {
			Pager
		},
		
		computed: {
			routeInfo(){
				const category = +this.$route.params.categoryId || -1;
				const page = +this.$route.query.page || 1;
				const limit = +this.$route.query.limit || 10;
				return {
					category,
					page,
					limit
				}
			}
		},
		
		methods: {
			formatDate,
			async fetchData() {
				return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.category);
			},
			handlePageChange(newPage){
				const query = {
					page: newPage,
					limit: this.routeInfo.limit
				}
				
				if(this.routeInfo.category === -1){
					this.$router.push({
						name: 'Blog',
						query
					})
				}else{
					this.$router.push({
						name: 'CategoryBlog',
						query,
						params: {
							categoryId: this.routeInfo.category
						}
					})
				}
			},
		},
		
		watch:{
			async $route(){
				this.isLoading = true;
				// 滚动条高度设置为0
				this.$refs.mainContainer.scrollTop = 0;
				this.data = await this.fetchData()
				this.isLoading = false;
			}
		}
	}
</script>

<style scoped lang="less">
	@import "~@/assets/style/var.less";
	.blog-list-container {
		line-height: 1.7;
		position: relative;
		padding: 20px;
		overflow-y: auto;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		// scroll-behavior: smooth;
		// &::-webkit-scrollbar {
		// 	display: none;
		// }
		
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
	}

	li {
		display: flex;
		padding: 15px 0;
		border-bottom: 1px solid @gray;

		.thumb {
			flex: 0 0 auto;
			margin-right: 15px;

			img {
				display: block;
				max-width: 200px;
				border-radius: 5px;
			}
		}

		.main {
			flex: 1 1 auto;

			h2 {
				margin: 0;
			}
		}

		.aside {
			font-size: 12px;
			color: @gray;

			span {
				margin-right: 15px;
			}
		}

		.desc {
			margin: 15px 0;
			font-size: 14px;
		}
	}
</style>
