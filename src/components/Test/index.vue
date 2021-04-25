<template>
  <div class="container">
		<div class="a">
			<A />
		</div>
    <div class="b">
			<B />
		</div>
  </div>
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";

export default {
  components: {
    A,
    B,
  },
};
</script>

<style scoped="scoped">
	
	.container{
		display: flex;
		justify-content: center;
		margin-top: 50px;
	}
	
	div.a, div.b{
		text-align: center;
		width: 200px;
		height: 150px;
		border: 1px solid;
	}
	.a{
		margin-right: 20px;
	}
	
</style>