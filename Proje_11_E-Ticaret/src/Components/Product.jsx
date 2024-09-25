import React, { useState } from 'react'
import '../Css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { id, rating, category, description, image, price, title } = product;
    const navigae = useNavigate();


    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='card' key={id}>
            <img className='image' src={image}></img>
            <div>
                <h3 className='title' style={{ textAlign: "center" }}>{title}</h3>
                <p className='description'>{description}</p>
                <h4 >{price} ₺</h4>
            </div>
            <hr />
            <div className='flex-row' style={{}}>
                {
                    isHovered ? <button onClick={() => navigae("/product-details/" + id)} className='product-button'>Ürüne Git</button> : ""
                }
            </div>

        </div>
    )
}

export default Product