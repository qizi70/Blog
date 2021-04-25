import request from './request.js'

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1){
	return await request.get('/api/blog', {
		params: {
			page,
			limit,
			categoryid
		}
	})
}

/**
 * 获取博客分类
 */
export const getBlogTypes = async () => await request.get('/api/blogtype');

/**
 * 获取单篇博客
 */
export const getBlog = async (id) => await request.get('/api/blog/' + id);


/**
 * 提交评论
 * 	commentInfo: {
			nickname: '昵称',
			content: '评论内容，纯文本',
			blogId: id, 评论博客的id
		}
*/
export const postComment = async (commentInfo) => await request.post('/api/comment', commentInfo)

export async function getComments(blogid, page = 1, limit = 10){
	return await request.get('/api/comment', {
		params: {
			page,
			limit,
			blogid
		}
	})
}
