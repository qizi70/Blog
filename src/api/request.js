import axios from 'axios'
import { message } from '../common/util.js'

const ins = axios.create(); // 创建 axios 实例

ins.interceptors.response.use(resp => {
	if(resp.data.code !== 0){
		message(resp.data.msg, 'error', 1500)
		return null;
	}
	return resp.data.data;
})


export default ins;