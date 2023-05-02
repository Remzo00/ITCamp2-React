import React from 'react'
import './button.css'

const Button = ({text, backgroudColor, color}) => { 
    return(
       <button style={{backgroundColor: backgroudColor, color: color}}>{text}</button>
    )
}

export default Button