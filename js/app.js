Vue.use(session)
var router=new VueRouter({
    linkActiveClass:"aa",
    routes:[
        {path:"/",component:index},
        {path:"/info",component:info,children:[
            {path:"",components:{
                left:left,
                right:right
            }}
        ]},
        {path:"/doc",component:doc,children:[
            {path:"",component:list},
            {path:"list/:id",component:con}
        ]},
        {path:"/login",component:login}
    ]
})
var vm=new Vue({
    el:"#root",
    router
})
