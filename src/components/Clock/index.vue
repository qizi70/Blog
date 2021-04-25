<template>
	<div class="clock-container">
		<h1>当前时间：{{ current }}</h1>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				timer: null,
				current: this.getCurrent()
			}
		},
		methods: {
			getCurrent(){
				return new Date().toLocaleTimeString()
			}
		},
		created() {
			this.timer = setInterval(() => {
				this.current = this.getCurrent()
			}, 1000)
		},
		destroyed() {
			clearInterval(this.timer)
		}
	}
</script>

<style>
</style>
