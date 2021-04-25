import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';
// 导出指令的配置对象

// 得到 el 中 loading 效果的 img 元素
function getLoadingImage(el){
	return el.querySelector('img[data-role=loading]')
}

function createLoadingImg(){
	const img = document.createElement('img');
	img.dataset.role = 'loading';
	img.src = loadingUrl;
	img.className = styles.loading;
	return img;
}

export default function(el, binding){
	// 根据 binding.value 的值，决定创建或删除 img 元素
	const curImg = getLoadingImage(el)
	if(binding.value){
		if(!curImg){
			const img = createLoadingImg()
			el.appendChild(img);
		}
	}else{
		curImg && curImg.remove();
	}
}

