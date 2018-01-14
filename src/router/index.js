import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'PageHome',
			component: PageHome
		},
		{
			path: '/thread/:id',
			component: PageThreadShow,
			name: 'PageThreadShow',
			props: true
		},
		{
			path: '*',
			name: 'NotFound',
			component: PageNotFound
		},
		{
			path:'/forum/:id',
			component:PageForum,
			name:'PageForum',
			props:true
		}
	],
	mode: 'history'
})
