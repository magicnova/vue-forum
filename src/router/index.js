import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/thread/:id',
			component: ThreadShow,
			name: 'ThreadShow',
			props: true
		}
	],
	mode: 'history'
})
