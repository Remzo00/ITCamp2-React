import React from 'react'

const Card = ({title, description, image}) => {
    return(
       <div>
        <img src={image} />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
       </div>
    )
}

export default Card