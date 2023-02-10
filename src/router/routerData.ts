export const Layout = () => import('@/layouts/index.vue');

export const menuRouterData = [
    {
        path: '/gis',
        name: 'gis',
        component: Layout,
        meta: { title: 'GIS' },
        icon: true,
        children: [
            {
                path: 'index',
                name: 'gis',
                meta: { title: 'Gis' },
                component: () => import('@/pages/gis/index.vue'),
            },
        ]
    },
    {
        path: '/example',
        name: 'example',
        component: Layout,
        meta: { title: '案例' },
        icon: true,
        children: [
            {
                path: 'index',
                name: 'example',
                meta: { title: '案例' },
                component: () => import('@/pages/example/index.vue'),
            },
            {
                path: 'd3Base',
                meta: { title: '案例', hidden: true},
                component: () => import('@/pages/example/d3/d3Base.vue'),
            },
            {
                path: 'threeBase',
                meta: { title: '案例', hidden: true},
                component: () => import('@/pages/example/three/threeBase.vue'),
            },
        ]
    },
    {
        path: '/visual',
        name: 'visual',
        component: Layout,
        meta: { title: 'VISUAL' },
        icon: true,
        children: [
            {
                path: 'webgl',
                name: 'webgl',
                meta: { title: 'webgl' },
                component: () => import('@/pages/webgl/index.vue'),
            },
            {
                path: 'canvas',
                name: 'canvas',
                meta: { title: 'canvas' },
                component: () => import('@/pages/canvas/index.vue'),
            },
            {
                path: 'svg',
                name: 'svg',
                meta: { title: 'svg' },
                component: () => import('@/pages/svg/index.vue'),
            }
        ]
    },
    {
        path: '/visualLibs',
        name: 'visualLibs',
        component: Layout,
        meta: { title: '可视化工具' },
        icon: true,
        children: [
            {
                path: 'd3',
                name: 'd3',
                meta: { title: 'D3' },
                component: () => import('@/pages/d3js/index.vue'),
            },
            {
                path: 'three',
                name: 'three',
                meta: { title: 'Three.js' },
                component: () => import('@/pages/threejs/index.vue'),
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
