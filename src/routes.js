import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AppStore from './AppStore/AppStore.js'
import Home from './Components/Home.js'

const routes_with_components = [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

export default (
    <Switch>
     {routes_with_components.map((route, i) => (
         <Route key={i} exact={route.exact} path={route.path} render={(props) => {
            return <route.component data={AppStore.data} {...props}/>
         }}/>
        )
     )}
    </Switch>
)
