<template>
	<div class="blog-detail-container">
		<h1>{{blog.title}}</h1>
		<div class="aside">
			<span>日期：{{formatDate(blog.createDate)}}</span>
			<span>浏览：{{blog.scanNumber}}</span>
			<a href="#data-form-container">评论：{{blog.commentNumber}}</a>
			<router-link :to="{
				name: 'CategoryBlog',
				params: {
					categoryId: blog.category.id
				}
			}">{{blog.category.name}}</router-link>
		</div>
		<div v-html="blog.htmlContent" class="markdown-body">
		</div>
	</div>
</template>

<script>
	import { formatDate } from '@/common/util'
	import 'highlight.js/styles/github.css';
	import '@/assets/style/markdown.css';
	export default {
		props: {
			blog: {
				type: Object,
				required: true
			}
		},
		methods: {
			formatDate
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/var.less';
	.aside{
		font-size: 12px;
		color: @gray;
		span, a{
			margin-right: 15px;
		}
	}
	.markdown-body{
		margin: 2em 0;
	}
</style>
