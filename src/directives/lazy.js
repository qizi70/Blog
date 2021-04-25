import eventBus from '@/eventBus.js'
import { debounce } from '@/common/util'
import defaultGif from '@/assets/default.gif'
// 图片懒加载

let imgs = []

function setImg(img){
	img.dom.src = defaultGif; // 先暂时使用默认图片
	// 处理图片
	// console.log('已处理', img.src);
	const clientHeight = document.documentElement.clientHeight;
	const rect = img.dom.getBoundingClientRect();
	let height = rect.height || 150;
	if(rect.top >= -height && rect.top < clientHeight){
		// 在视口范围内
		const tempImg = new Image()
		tempImg.onload = function (){
			// 当真实图片加载完成之后，再将已经下载好的图片放到真实 img 元素上(会在缓存中读取)
			img.dom.src = tempImg.src;
		}
		tempImg.src = img.src;
		imgs.splice(imgs.indexOf(img), 1)
	}
}

// 调用该函数，可以设置那些合适的图片
function setImages(){
	for (let img of imgs) {
		setImg(img)
	}
}

const debounceSetImage = debounce(setImages, 50)

eventBus.$on('mainScroll', function (){
	debounceSetImage()
})
	
export default { 
	inserted(el, bindings){
		const img = {
			dom: el,
			src: bindings.value
		}
		imgs.push(img)
		setImg(img);
	},
	unbind(el){
		imgs = imgs.filter(img => img.dom !== el)
	}
}