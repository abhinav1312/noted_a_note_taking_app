import { useState } from "react"
import AsideContext from "./asideContext"

const AsideState = (props) => {

    const [asideWidthFull, setAsideWidthFull] = useState(false)

    return(
        <AsideContext.Provider value = {{asideWidthFull, setAsideWidthFull}}>
            {props.children}
        </AsideContext.Provider>
    )
}

export default AsideState