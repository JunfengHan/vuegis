import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; 
import { routerData } from './routerData';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routerData as unknown as RouteRecordRaw[],
})

export default router;