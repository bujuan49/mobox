import React from "react"

import Routerd from "./routerSettings"
import Rouin from "./rouerviews"
function Router() {
    return <>
        {
            < Rouin data={Routerd} />
        }
    </>
}
export default Router