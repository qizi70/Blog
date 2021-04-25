<template>
  <Layout>
    中间主区域
    <template v-slot:header>页头</template>
		<!-- <template v-slot:footer>页尾</template> -->
		<!-- <template v-slot:footer>页尾</template> -->
		<!-- <template #footer="{todo}">
			<button @click="handleClick(todo)">点击</button>
		</template> -->
		<template #footer>
			页尾
		</template>
  </Layout>
</template>

<script>
import Layout from "./Layout";
export default {
  components: {
    Layout,
  },
	methods: {
		handleClick(todo){
			console.log("todo: ",todo);
		}
	}
};
</script>

<style></style>
