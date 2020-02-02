import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register'

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        name: 'register',
        component: Register
    },
]

const router = new VueRouter({

    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router