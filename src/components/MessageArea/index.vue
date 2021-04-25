<template>
	<div class="message-area-container">
		<DataForm v-on="$listeners"/>
		<h3>
			{{title}}
			<span>{{subTitle}}</span>
		</h3>
		<DataList :list="list"/>
		<div class="loading" v-loading="isListLoading"></div>
	</div>
</template>

<script>
	import DataList from './DataList.vue'
	import DataForm from './DataForm.vue'
	export default{
		components: {
			DataList,
			DataForm
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: [String, Number],
				default: ''
			},
			list: {
				type: Array,
				default: () => []
			},
			isListLoading: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped="scoped">
	.loading {
	  position: relative;
	  height: 100px;
	}
</style>
