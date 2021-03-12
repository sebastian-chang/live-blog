import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'

import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser
  console.log('required user', user)
  if (user) {
    next()
  }
  else {
    next({ name: 'Welcome' })
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
