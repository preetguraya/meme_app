import React from "react"
import Troll from "../images/troll.jpg"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={Troll} 
                alt="img"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}