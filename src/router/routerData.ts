export const Layout = () => import('@/layouts/index.vue');
// export const Layout = () => import('./test.vue');

export const menuRouterData = [
    {
        path: '/svg',
        name: 'svg',
        redirect: '/svg/index',
        component: Layout,
        meta: { title: '心跳状态查询' },
        icon: true,
        children: [
            {
                path: 'index',
                name: 'Svg',
                meta: { title: '心跳状态查询' },
                component: () => import('@/pages/svg/index.vue'),
            }
        ]
    },
    {
        path: '/canvas',
        name: 'canvas',
        redirect: '/canvas',
        component: Layout,
        meta: { title: '耗时埋点查询' },
        icon: true,
        children: [
            {
                path: 'index',
                name: 'Canvas',
                meta: { title: '耗时埋点查询' },
                component: () => import('@/pages/canvas/index.vue'),
            }
        ]
    },
    
]

export const routerData = [
    {
        path: '/',
        name: 'Root',
        // redirect: '/functionQuery/U_Cmap/timeStatic',
        component: Layout,
        meta: { title: '首页' }
    },
    ...menuRouterData,
]
