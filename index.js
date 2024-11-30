import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',redirect: '/father/home'},
    {path: '/father', component: () => import("../views/FatherPage.vue"), children: [
        {path: 'home', meta:{ title: "首页" }, component: () => import('../views/Home.vue')},
        {path: 'course', meta:{ title: "首页" }, component: () => import('../views/Course.vue')},
        {path: 'class', meta:{ title: "首页" }, component: () => import('../views/Class.vue')},
        {path: 'homework', meta:{ title: "首页" }, component: () => import('../views/Homework.vue')},

        ]},
    {path: '/404', name: 'NotFound',meta:{ title: "404找不到页面" }, component: () => import('../views/404.vue')},
    {path: '/:pathMatch(.*)', redirect: '/404' },
  ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
