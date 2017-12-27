import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'

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
		}
	],
	mode: 'history'
})
