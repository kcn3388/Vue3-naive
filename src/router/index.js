import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const E404 = () => import('./../views/404.vue')
const E503 = () => import('./../views/503.vue')
const User = () => import('./../views/user.vue')
const Home = () => import('./../views/home.vue')
const Aplayer = () => import('./../views/aplayer.vue')

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/aplayer',
        name: 'aplayer',
        component: Aplayer
    },
    {
        path: '/404',
        name: '404',
        component: E404
    },
    {
        path: '/503',
        name: '503',
        component: E503
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});