import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
import HelloWorld from './views/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    }

  ]
})
