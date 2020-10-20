import React from "react"
import trollFace from "../images/trollface.png"

function Header(){
    return(
            <header>
                <img src={trollFace} alt="problem?"></img>
                <p>Meme Generator</p>
            </header>
    )
}
export default Header