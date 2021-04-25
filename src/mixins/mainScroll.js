

export default function (refValue){
	return {
		mounted() {
			// 接收一个参数，设置滚动条的位置。
			this.$bus.$on('setMainScroll', this.handleSetMainScroll)
			// 监听滚动条事件
			this.$refs[refValue].addEventListener('scroll', this.handleMainScroll)
		},
		
		beforeDestroy() {
			// 组件销毁时，只抛出一个事件，不抛出 dom 元素，监听方就会认为 dom 元素被销毁，不在继续监听
			this.$bus.$emit('mainScroll')
			this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll)
			this.$bus.$off('setMainScroll', this.handleSetMainScroll)
		},
		
		methods: {
			handleSetMainScroll(scrollTop){
				this.$refs[refValue].scrollTop = scrollTop;
			},
			handleMainScroll(){
				this.$bus.$emit('mainScroll', this.$refs[refValue])
			},
		}
	}
}
