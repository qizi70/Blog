import request from './request.js'

export async function getMessages(page = 1, limit = 10){
	return await request.get('/api/message', {
		params: {
			page,
			limit
		}
	})
}


export const postMessage = async (msgInfo) => await request.post('/api/message', msgInfo)



