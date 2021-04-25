import getComponentRootDom from './getComponentRootDom.js'
import Icon from '../components/Icon/index.vue'
import styles from './showMessage.module.less';


/**
 * 弹出一个提示信息框
 * @param {String} content    要提示的信息
 * @param {String} type				消息的类型 error info success warn
 * @param {Number} duration		多久消失  
 * @param {HtmlElement} container	容器，消息会显示到该容器的正中；如果不传，则会显示到页面的正中
 */
export function message(content, type = "info", duration = 2000, container){
	// const {
	// 	content = "",
	// 	type = "info",
	// 	duration = 2000,
	// 	container = null,
	// 	callback = null
	// } = options
	
	// 创建消息元素
	const div = document.createElement('div')
	const iconDom = getComponentRootDom(Icon, { type })

	div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
	// 设置样式
	div.className = `${styles.message} ${styles["message-" + type]}`

	// 将div加入到容器中
	if(!container){
		container = document.body
	}else{
		// 容器的 position 是否改动过
		if(getComputedStyle(container).position === 'static'){
			container.style.position = 'relative'
		}
	}
	container.appendChild(div)
	// 浏览器强行渲染
	div.clientHeight; // 导致 reflow
	
	// 回归正常位置
	div.style.opacity = 1;
	div.style.transform = `translate(-50%, -50%)`;
	
	setTimeout(() =>{
		div.style.opacity = 0;
		div.style.transform = `translate(-50%, -50%) translateY(-100px)`
		div.addEventListener('transitionend', function (){
			div.remove();
			// callback && callback(); // 如果有回调函数就运行
		}, {once: true})
	}, duration)
}

/**
 * 日期格式转化，传入时间戳 转换为  			2020-01-01 
 * 传入第二个参数为 true, 表示 加上分钟		2020-01-01  05:21:00
 */
export function formatDate(timestamp, showTime = false){
	const date = new Date(+timestamp);
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = (date.getDate()).toString().padStart(2, '0');
	let str =  `${date.getFullYear()}-${month}-${day}`
	if(showTime){
		const hour = date.getHours().toString().padStart(2, '0');
		const minute = date.getMinutes().toString().padStart(2, '0');
		const second = date.getSeconds().toString().padStart(2, '0');
		return str + ` ${hour}:${minute}:${second}`
	}
	return str;
}

/**
 * 函数防抖, 传入一个函数，返回一个防抖之后的函数
 */
export function debounce(fn, duration = 100){
	let timer = null;
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn(...args)
		}, duration)
	}
}

