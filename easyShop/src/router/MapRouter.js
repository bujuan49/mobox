import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
const MapRouter=({routes=[]})=>{
    return <Switch>
       {
           routes.map(Item=>
                Item.path?(<Route 
                key={Item.path} 
                path={Item.path} 
                render={props=>(
                    <Item.component {...props} routes={Item.children}>
                        {Item.children?<MapRouter routes={Item.children}/>:null}
                    </Item.component>
            )}/>):(<Redirect {...Item} key={Item.from}></Redirect>)
           )
       }
    </Switch>
}
export default MapRouter