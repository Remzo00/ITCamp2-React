import React from 'react'

const Card = ({title, description, image}) => {
    return(
       <div>
        <img src={image} alt={title} />
        <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
       </div>
    )
}

export default Card