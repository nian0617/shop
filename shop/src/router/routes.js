import React from "react"

import Loadable from "react-loadable";

function Loading(){
    return <div>loading...</div>
}

const Login = Loadable({
    loader:()=>import("@/views/login"),
    loading:Loading,
})

const Registry = Loadable({
    loader:()=>import("@/views/registry"),
    loading:Loading,
})

const Citys = Loadable({
    loader:()=>import("@/views/citys"),
    loading:Loading,
})

const Detail = Loadable({
    loader:()=>import("@/views/detail"),
    loading:Loading,
})

const My = Loadable({
    loader:()=>import("@/views/my"),
    loading:Loading,
})

const Order = Loadable({
    loader:()=>import("@/views/order"),
    loading:Loading,
})

const Shops = Loadable({
    loader:()=>import("@/views/shops"),
    loading:Loading,
})



const routes=[
    {
        path:"/login",
        component:Login
    },
    {
        path:"/registry",
        component:Registry
    },
    {
        path:"/citys",
        component:Citys
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/my",
        component:My
    },
    {
        path:"/order",
        component:Order
    },
    {
        path:"/shops",
        component:Shops
    },
    {
        path:'/',
        redirect:'/citys'
    }
]

export default routes
