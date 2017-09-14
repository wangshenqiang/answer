import Vue from 'vue';
import VueRouter from 'vue-router';
import q1 from  "../views/q1/index.vue";
import q2 from  "../views/q2/index.vue";
import home from  "../views/home/home.vue";
////把路由挂载到vue上
Vue.use(VueRouter);
let routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        name:"home",
        path:"/home",
        component:home
    },
    {
        name:"q1",
        path:"/q1",
        component:q1
    },
    {
        name:"q2",
        path:"/q2",
        component:q2
    }
];

let router=new VueRouter({
    routes
})
export default router