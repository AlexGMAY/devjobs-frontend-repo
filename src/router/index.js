import { createRouter, createWebHistory } from "vue-router";

import HomePageView from "@/views/HomePageView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue"
import JobView from "@/views/JobView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: 'Home',
            component: HomePageView,
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: JobsView,
        },
        {
            path: '/job/:id',
            name: 'Job',
            component: JobView,
        },
        {
            path: '/:catchAll(.*)',
            name: '404 Not Found',
            component: NotFoundView,
        },
    ],
})

export default router;