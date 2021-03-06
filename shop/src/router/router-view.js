import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'


function RouterView({routes}){
    // Route Redirect
    let RouteArr = routes.filter(item => !item.redirect);
    let redirectArr = routes.filter(item => item.redirect);
    return <Switch>
            {RouteArr.map(item => <Route key={item.path} path={item.path} render={(props) => {return <item.component routes={item.children} {...props}></item.component>}}/>)} 
            {redirectArr.map(item => <Redirect from={item.path} to={item.redirect} key={item.path}></Redirect>)}
            {/* <Redirect from="/" to="/citys"></Redirect> */}
        </Switch>
}

export default RouterView