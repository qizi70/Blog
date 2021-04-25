import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
// import Home from '../views/Home/index.vue'
// import About from '../views/About/index.vue'
// import Blog from '../views/Blog/index.vue'
// import BlogDetail from '../views/Blog/Detail.vue'
// import Message from '../views/Message/index.vue'
// import Project from '../views/Project/index.vue'

if(!window.VueRouter){ // 如果使用的 cdn 会自动注入插件
	Vue.use(VueRouter)
}


const routes = [{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: 'home' */'../views/Home/index.vue'),
		meta: {
			title: '首页_个人空间'
		}
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
		component: () => import(/* webpackChunkName: 'about' */'../views/About/index.vue'),
		meta: {
			title: '关于_个人空间'
		}
	},
	{
		path: '/article',
		name: 'Blog',
		component: () => import(/* webpackChunkName: 'blog' */'../views/Blog/index.vue'),
		meta: {
			title: '博客_个人空间'
		},
		children: [{
			path: 'cate/:categoryId',
			name: 'CategoryBlog',
			component: () => import(/* webpackChunkName: 'blog' */'../views/Blog/index.vue'),
			meta: {
				title: '文章列表_个人空间'
			}
		}],
	},
	{
		path: '/article/:id',
		name: 'BlogDetail',
		component: () => import(/* webpackChunkName: 'blogDetail' */'../views/Blog/Detail.vue'),
		meta: {
			title: '文章详情_个人空间'
		}
	},
	{
		path: '/message',
		name: 'Message',
		component: () => import(/* webpackChunkName: 'message' */'../views/Message/index.vue'),
		meta: {
			title: '留言板_个人空间'
		}
	},
	{
		path: '/project',
		name: 'Project',
		component: () => import(/* webpackChunkName: 'project' */'../views/Project/index.vue'),
		meta: {
			title: '我的项目_个人空间'
		}
	},
	{
		path: '*',
		name: 'NotFound',
		component: NotFound
	}

]


const router = new VueRouter({
	routes, // 路由匹配规则
	mode: 'history'
})

router.afterEach((to, from) => {
	if(to.meta.title){
		document.title = to.meta.title;
	}
})

export default router
