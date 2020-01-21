import Vue from 'vue'
import Router from 'vue-router'
import Assignments from './views/Assignments.vue'
import UserDetails from './views/UserDetails.vue'
import PermanentAccount from './views/PermanentAccount.vue'
import AssignmentResult from './views/AssignmentResult.vue'
import Ec2publicinstance from './Assignments/Ec2publicinstance'
import Iam from './Assignments/Iam'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Assignments',
      component: Assignments
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
    },
    {
      path: '/Ec2publicinstance',
      name: 'Ec2publicinstance',
      component: Ec2publicinstance
    },
    {
      path: '/Iam',
      name: 'Iam',
      component: Iam
    }
  ]
})
