/**
 * @file router.js
 * @author （shenyukang@126.com）
 * @deprecated '此处是vue的路由配置文件，所有页面的导航和展示必须通过此文件配置管理'
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/province',
            name: 'province',
            component: Home
        },
        {
            path: '/province/detailCity',
            name: 'detailCity',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: 'about' */ './views/About.vue')
        },
        {
            path: '/', redirect: '/province'
        }
    ]
});
