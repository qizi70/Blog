<template>
	<div v-loading="loading" class="home-container" ref="container" @wheel="handleWheel">
		<!-- <h1>首页</h1> -->
		<ul class="carousel-container" :style="{marginTop}" @transitionend="handleTransitionEnd" ref="carouselUl">
			<li v-for="item in data" :key="item.id">
				<CarouselItem :carousel="item"/>
			</li>
		</ul>
		<div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
			<Icon type="iconshangjiantou" />
		</div>
		<div v-show="index < data.length - 1" class="icon icon-down" @click="switchTo(index + 1)">
			<Icon type="iconarrow-down" />
		</div>
		<ul class="indicator">
			<li 
				:class="{active: i === index}"
				v-for="(item, i) in data" 
				:key="item.id" 
				@click="switchTo(i)"
			></li>
		</ul>
	</div>
</template>

<script>
	import CarouselItem from './CarouselItem.vue'
	import Icon from '@/components/Icon'
	import { mapState } from 'vuex'
	export default {
		components: {
			CarouselItem,
			Icon,
		},
		data() {
			return {
				index: 0, // 当前显示的是第几章轮播图
				containerHeight: 0, // 整个容器的高度
				switching: false, // 是否正在翻页中
			}
		},
		computed:{
			...mapState('banner', ['loading', 'data']),
			marginTop(){
				return -this.index * this.containerHeight + 'px';
			}
		},
		methods:{
			// 切换轮播图
			switchTo(i){
				this.index = i;
			},
			// 鼠标滚轮事件
			handleWheel(e){
				if(this.switching){
					return;
				}
				
				if(e.deltaY > 10 && this.index < this.data.length - 1){
					this.switching = true;
					this.index++;
				}else if(e.deltaY < -10 && this.index > 0){
					this.switching = true;
					this.index--;
				}
			},
			// 过度动画结束
			handleTransitionEnd(e){
				if(e.target === this.$refs.carouselUl){
					this.switching = false;
				}
			},
			handleResize(){
				this.containerHeight = this.$refs.container.clientHeight;
			}
		},
		created() {
			this.$store.dispatch('banner/fetchBanner')
		},
		async mounted() {
			this.containerHeight = this.$refs.container.clientHeight;
			window.addEventListener('resize', this.handleResize)
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '~@/assets/style/mixin.less';
	@import '~@/assets/style/var.less';
	.home-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		// background-color: #000;
		
		ul {
			margin: 0;
			padding: 0;

			li {
				list-style: none;
			}
		}
		
		.carousel-container{
			width: 100%;
			height: 100%;
			transition: 0.6s;
			li{
				width: 100%;
				height: 100%;
			}
		}
		
		.icon {
			.self-center();
			font-size: 30px;
			cursor: pointer;
			// color: @gray;
			color: lightpink;
			transform: translateX(-50%);

			&.icon-up{
				top: 25px;
				animation: jump-up 3.5s infinite;
			}
			&.icon-down{
				top: auto;
				bottom: 25px;
				animation: jump-down 3.5s infinite;
			}
			
			@jump: 10px;
			@keyframes jump-up{
				0%{
					transform: translate(-50%, @jump);
				}
				20%{
					transform: translate(-50%, @jump);
				}
				50%{
					transform: translate(-50%, -@jump);
				}
				100%{
					transform: translate(-50%, @jump);
				}
			}
			
			@keyframes jump-down{
				0%{
					transform: translate(-50%, -@jump);
				}
				20%{
					transform: translate(-50%, -@jump);
				}
				50%{
					transform: translate(-50%, @jump);
				}
				100%{
					transform: translate(-50%, -@jump);
				}
			}
			
		}
		
		.indicator{
			.self-center();
			transform: translateY(-50%);
			left: auto;
			right: 25px;
			
			li{
				cursor: pointer;
				width: 7px;
				height: 7px;
				background-color: @words;
				border-radius: 50%;
				border: 1px solid #fff;
				box-sizing: border-box;
				margin: 5px 0;
				// transition: 0.5s;
				
				&.active{
					background-color: lightgreen;
				}
			}
		}
	}

	
</style>
