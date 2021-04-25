<template>
	<div class="project-container" v-loading="loading" ref="projectContainer">
		
		<div
			v-for="item in data"
			:key="item.id"
			class="project-item"
		>
			<a 
				:href="item.url ? item.url : `javascript:alert('该项目暂时不能访问');`"
				:target="item.url ? '_blank' : '_self'"
			>
				<img v-lazy="item.thumb" alt="" class="thumb">
			</a>
			
			<div class="info">
				<h2>
					<a
						:href="item.url ? item.url : `javascript:alert('该项目暂时不能访问');`"
						:target="item.url ? '_blank' : '_self'"
					>
						{{item.name}}
					</a>
					<a 
						:href="item.github" 
						:target="item.github ? '_blank' : '_self'"
						class="github" 
					>github</a>
				</h2>
				<p 
					v-for="(it, i) in item.description"
					:key="i"
				>
					{{it}}
				</p>
			</div>

		</div>
		
	</div>
</template>

<script>
	import mainScroll from '@/mixins/mainScroll.js'
	import {mapState} from 'vuex'
	export default {
		mixins:[mainScroll("projectContainer")],
		computed:{
			...mapState('project', ['loading', 'data'])
		},
		created() {
			this.$store.dispatch('project/fetchProject')
		}
	}
</script>

<style lang="less" scoped>
@import "~@/assets/style/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>
