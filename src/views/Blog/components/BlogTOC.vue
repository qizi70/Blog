<template>
	<div class="blog-toc-container">
		<h2>目录</h2>
		<RightList :list="tocWithSelect" @select="handleSelect"/>
	</div>
</template>

<script>
	import RightList from './RightList.vue'
	import { debounce } from '@/common/util'
	export default{
		components:{RightList},
		props: {
			toc: Array
		},
		data(){
			return {
				activeAnchor: ''
			}
		},
		mounted() {
			this.setSelectDebounce = debounce(this.setSelect, 50)
			this.$bus.$on('mainScroll', this.setSelectDebounce)
		},
		destroyed() {
			this.$bus.$off('mainScroll', this.setSelectDebounce)
		},
		methods: {
			handleSelect(item){
				location.hash = item.anchor;
			},
			// 设置 activeAnchor 为正确的值
			setSelect(scrollDom){
				if(!scrollDom){
					return;
				}
				this.activeAnchor = '';
				const range = 100;
				for (let dom of this.doms) {
					// 看看当前 dom 元素是否应该选中
					if(!dom){
						continue;
					}
					const top = dom.getBoundingClientRect().top;
					if(top >= 0 && top <= range){
						this.activeAnchor = dom.id;
						return;
					}else if(top > range){
						return;
					}else{
						this.activeAnchor = dom.id;
					}
				}
			}
		},
		computed: {
			// 根据 toc 属性以及 activeAnchor 得到带有 isSelect 属性的数组
			tocWithSelect(){
				const getToc = (toc = []) => {
					return toc.map(it => ({
						...it,
						isSelect: it.anchor === this.activeAnchor,
						children: getToc(it.children)
					}))
				}
				return getToc(this.toc)
				
				// return function getToc(toc = []){
				// 	return toc.map(item => ({
				// 		...item,
				// 		isSelect: item.anchor === this.activeAnchor,
				// 		children: getToc(toc.children)
				// 	}))
				// }
				
			},
			// 根据 toc 得到他们对应的元素数组
			doms(){
				const doms = [];
				
				const addToDoms = (toc) => {
					for(let t of toc) {
						const domId = document.getElementById(t.anchor)
						doms.push(domId)
						if(t.children && t.children.length){
							addToDoms(t.children)
						}
					}
				}
				addToDoms(this.toc)
				return doms
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.blog-toc-container {
		h2 {
			font-weight: bold;
			letter-spacing: 2px;
			font-size: 1em;
			margin: 0;
		}
	}
</style>
