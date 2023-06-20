import Main from '@/pages/Main'
import TaskPageWithVuex from '@/pages/TaskPageWithVuex'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main 
    },
    {
        path: '/tasks',
        component: TaskPageWithVuex
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router