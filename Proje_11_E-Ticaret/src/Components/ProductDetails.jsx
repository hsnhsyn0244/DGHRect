import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../Redux/Slices/productSlice'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { addToBasket, calculateBasket } from '../Redux/Slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)


    const { category, description, image, price, title } = selectedProduct;
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const dispatch = useDispatch();


    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket());
    }



    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    return (
        <div style={{ marginTop: "30px", justifyContent: "space-around", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={{ marginRight: "45px" }}>
                <img src={image} width={400} height={550} />
            </div>
            <div>
                <h1>Ürün Bilgileri</h1>
                <hr />
                <h2>{title}</h2>
                <h3>Kategori: {category}</h3>
                <p>{description}</p>
                <h2 style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>{price} ₺</h2>
                <hr />
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <AiFillMinusCircle onClick={decrement} style={{ marginRight: "20px" }} fontSize={50} /><p style={{ fontSize: "50px", marginRight: "20px" }}>{count}</p> <AiFillPlusCircle onClick={increment} fontSize={50} />
                    </div>
                    <span style={{ fontSize: "50px" }}>
                        Tutar : {(price * count).toFixed(2)}
                    </span>

                </div>
                <div>
                    <button
                        onClick={addBasket}
                        style={{
                            marginTop: "25px",
                            border: "none",
                            padding: "20px",
                            backgroundColor: "orangered",
                            color: "white",
                            width: "20%",
                            borderRadius: "10px"
                        }}>Sepete Ekle </button>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails