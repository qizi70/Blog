import Vue from 'vue'
// 得到组件生成的根 DOM
export default function getComponentRootDom(comp, props){
	const vm = new Vue({
		render: h => h(comp, {props})
	})
	vm.$mount();
	return vm.$el
}