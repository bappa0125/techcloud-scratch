import Vue from 'vue'
import Router from 'vue-router'
import TemporaryAccount from './views/TemporaryAccount.vue'
import UserDetails from './views/UserDetails.vue'
import PermanentAccount from './views/PermanentAccount.vue'
import AssignmentResult from './views/AssignmentResult.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TemporaryAccount',
      component: TemporaryAccount
    },
    
    {
      path: '/PermanentAccount',
      name: 'PermanentAccount',
      component: PermanentAccount
    },
    {
      path: '/AssignmentResult',
      name: 'AssignmentResult',
      component: AssignmentResult
    },
    
    {
      path: '/UserDetails',
      name: 'UserDetails',
      component: UserDetails
    }

  ]
})
