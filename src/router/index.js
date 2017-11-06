import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import List from '@/pages/list/List'
import viewList from '@/pages/viewList/Home'
import OnedayTour from '@/pages/onedayTour/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/viewList',
      name: 'viewList',
      component: viewList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path:'/onedayTour',
      name:"onedayTour",
      component:OnedayTour
    }
  ]
})

