// src/router/router.js
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../view/Dashboard.vue'),
        children: [
            {name: 'home', path: '/', component: () => import('../view/Home.vue')},
            {name: 'products', path: '/products', component: () => import('../view/Products.vue')},
            {name: 'productById', path: '/product/:id', component: () => import('../view/Product.vue')},
            {name: 'login', path: '/login', component: () => import('../components/Login.vue')},
            {name: 'allUsers', path: '/users', component: () => import('../view/Users.vue')},
            {name: 'userById', path: '/user/:id', component: () => import('../view/User.vue')},
            {name: 'profile', path: '/profile', component: () => import('../view/Profile.vue')},
            {name: 'aboutMe', path: '/me', component: () => import('../components/Me.vue')},
        ]
    },
    {
        name: 'notFound',
        path: '/:pathMatch(.*)*',
        component: () => import('../view/NotFound.vue')
    },
    // {
    //     name: 'serverError',
    //     path: '/500',
    //     component: () => import('../view/ServerError.vue')
    // },
    // {
    //     name: 'shop',
    //     path: '/shop',
    //     component: () => import('../view/Shop.vue')
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
