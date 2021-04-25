<template>
  <div class="block">
    <p>the number is</p>
    <h1>{{ $store.state.count }}</h1>
    <p>
      <button @click="handleDecrease">减少</button>
      <button @click="asyncHandleIncrease">异步增加</button>
    </p>
  </div>
</template>

<script>
export default {
	mounted() {
		// console.log(this);
	},
  methods: {
		handleDecrease(){
			this.$store.commit('decrease')
		},
		asyncHandleIncrease(){
			this.$store.dispatch('asyncIncrease')
		}
  },
};
</script>
<style scoped="scoped">
	button{
		margin:0 10px;
	}
</style>