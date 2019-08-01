import React from "react";
import { Redirect, Switch, Route } from "react-router-dom"
import Cookies from 'js-cookie'
function Router({ data = [] }) {
    let res = data.filter(it => !it.redirect)
    let num = data.filter(it => it.redirect).map((it, index) =>
        <Redirect key={index} from={it.path} to={it.redirect}></Redirect>
    )
    return (
        <Switch>
            {
                res.map((it, index) =>
                    <Route path={it.path} key={index} render={(props) => {
                        if (!Cookies.get('x-nideshop-token')) {
                            // return <Redirect to="/login"></Redirect >
                        }
                        return <it.Component {...props} route={it.child}></it.Component>
                    }} />
                ).concat(num)
            }

        </Switch>
    )
}
export default Router