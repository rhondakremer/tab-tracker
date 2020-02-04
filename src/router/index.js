import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]

const router = new VueRouter({

    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router