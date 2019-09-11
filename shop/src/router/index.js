import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import RouterView from './router-view'

import routes from './routes'

function Router(){
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
}

export default Router