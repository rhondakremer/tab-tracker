import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import Songs from '../components/Songs'
import CreateSong from '../components/CreateSong'
import ViewSong from '../components/ViewSong'

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
    {
        path: '/songs',
        name: 'songs',
        component: Songs
    },
    {
        path: '/songs/create',
        name: 'create',
        component: CreateSong
    },
    {
        path: '/songs/:songId',
        name: 'song',
        component: ViewSong
    }
]

const router = new VueRouter({

    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router