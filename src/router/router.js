// src/router/router.js
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../view/Dashboard.vue'),
        children: [
            {name: 'products', path: '/products', component: () => import('../view/Products.vue')},
            {name: 'product by id', path: '/product/:id', component: () => import('../view/Product.vue')},
            {name: 'login', path: '/login', component: () => import('../components/Login.vue')},
            {name: 'product by id', path: '/product/:id', component: () => import('../view/Product.vue')},
        ]
    },
    // { name: 'products' ,path: '/products', component: () => import('../view/Products.vue') },
    // { name: 'product by id' ,path: '/product/:id', component: () => import('../view/Product.vue') },
    {name: 'all user', path: '/users', component: () => import('../view/Users.vue')},
    {name: 'user by id', path: '/user/:id', component: () => import('../view/User.vue')},
    // { name: 'create user' ,path: '/user-create', component: () => import('../components/UserCreate.vue') },

    // { name: 'home' ,path: '/home', component: () => import('../view/Home.vue')},
    {name: 'profile', path: '/profile', component: () => import('../view/Profile.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
