export const Layout = () => import('@/layouts/index.vue');

export const menuRouterData = [
    {
        path: '/svg',
        name: '/svg',
        redirect: '/svg',
        component: Layout,
        meta: { title: 'SVG' },
        icon: true,
        children: [
            {
                path: 'index',
                name: '/svg/index',
                meta: { title: 'svg' },
                component: () => import('@/pages/svg/index.vue'),
            }
        ]
    },
    {
        path: '/canvas',
        name: '/canvas',
        redirect: '/canvas',
        component: Layout,
        meta: { title: 'canvas' },
        icon: true,
        children: [
            {
                path: 'index',
                name: '/canvas/index',
                meta: { title: 'canvas' },
                component: () => import('@/pages/canvas/index.vue'),
            }
        ]
    },
    {
        path: '/webgl',
        name: '/webgl',
        redirect: '/webgl/2d',
        component: Layout,
        meta: { title: 'WebGL' },
        icon: true,
        children: [
            {
                path: '2d',
                name: '/webgl/2d',
                meta: { title: 'WebGL 2D' },
                component: () => import('@/pages/webgl/2d.vue'),
            },
            {
                path: '3d',
                name: '/webgl/3d',
                meta: { title: 'WebGL 3D' },
                component: () => import('@/pages/webgl/3d.vue'),
            }
        ]
    },
]

export const routerData = [
    {
        path: '/',
        name: '/home',
        redirect: '/home',
        component: Layout,
        meta: { title: '首页' },
        children: [
            {
                path: 'home',
                name: '/home',
                meta: { title: 'home' },
                component: () => import('@/pages/index.vue'),
            }
        ]
    },
    ...menuRouterData,
]
