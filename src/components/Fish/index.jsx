import { useState } from "react"
import './style.css'
import arrowConfig from './changeDirection.js'

export default function ({classesCSS, id}) {
    const coordConteiner = () => document.querySelector('.Background').getBoundingClientRect()

    const [swim, setSwim] = useState("swimLeft")
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const fish =  <img id={id} src="./fish.gif" alt="fish" style={{left: `${x}px`, top: `${y}px`}} className={swim} /> 
    arrowConfig(`${id}`, {setSwim, setX, setY, x:x, y: y, coordConteiner: coordConteiner, classesCSS: classesCSS})
    return (
        <div className="Fish">
            {fish}
        </div>
    )
}