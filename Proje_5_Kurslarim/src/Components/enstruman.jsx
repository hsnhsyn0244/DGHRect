/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react'

function Enstruman({ enstruman }) {
    const { id, title, price, description, image } = enstruman;
    return (
        <div className='enstruman'>
            <img src={image} width={250} height={200} />
            <h4>{title}</h4>
            <h3>{description}</h3>
            <h5>{price}</h5>
        </div>
    )
}

export default Enstruman