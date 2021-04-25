// const listener = {}

// // 事件总线
// export default {
// 	// 监听事件
// 	$on(eventName, handler){
// 		(listener[eventName] || listener[name] = new Set()).add(handler)
// 	},
// 	// 取消监听事件
// 	$off(eventName, handler){
// 		listener[eventName] && listener[eventName].delete(handler)
// 	},
// 	$emit(eventName, ...args){
// 		if(!listener[eventName]){
// 			return;
// 		}
// 		for (let handler of listener[eventName]) {
// 			handler(...args)
// 		}
// 	}
// }


import Vue from 'vue'
const app = new Vue({})

/*
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 *
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
Vue.prototype.$bus = app;

export default app
