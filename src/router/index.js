import { createRouter, createWebHistory } from "vue-router";
import inicio from '../views/inicio.vue'
import proyectos from '../views/Poyectos.vue'
import redes from '../views/redes.vue'
import inite from '../views/inite.vue'
import streaming from '../views/streaming.vue'
import streaming2 from '../views/streaming2.vue'
import streaming3 from '../views/streaming3.vue'
const router = createRouter({
    history : createWebHistory(),
    routes:[
        {
            path:'/',
            component: inicio
        },
        {
            path:'/proyectos',
            component:proyectos
        },
        {
            path: '/redes',
            component: redes
        },
        {
            path: '/inite',
            component: inite
        },
        {
            path: '/streaming',
            component: streaming
        },
        {
            path: '/streaming2',
            component: streaming2
        },
        {
            path: '/streaming3',
            component: streaming3
        }
    ]
})

export default router