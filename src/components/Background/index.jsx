import React from 'react'
import './style.css'

export default function ({src, type}) {
    if(!src) src = './bg2.gif'
    if(!type) type = 'gif'
    return (
        type == 'gif' || type == 'img' ? (<img src={src} className='Background'></img>) : (
            <video autoPlay={true} loop={true} className='Background'>
                <source src={src} type={type} />
            </video>
        )
    )
}