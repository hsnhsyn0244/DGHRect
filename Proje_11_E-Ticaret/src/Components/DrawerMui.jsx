import { Drawer } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { calculateBasket, setDrawer } from '../Redux/Slices/basketSlice'

function DrawerMui() {
    const { products, drawer, totalAmount } = useSelector((store) => store.basket)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateBasket());
    }, [])


       

    return (
 
        <Drawer open={drawer} onClose={() => dispatch(setDrawer())} anchor='right'>
            {
                products && products.map((product) => {
                    {

                    }
                    return (
                        <div key={product.id} className='flex-row' style={{}}>
                            <img style={{ width: "50px", marginRight: "7px", height: "50px" }} src={product.image} />
                            <p style={{ width: "300px", marginRight: "7px" }}> {product.title} ({product.count})</p>
                            <p style={{ fontWeight: "bold", width: "60px", marginRight: "12px" }}>{product.price}TL</p>
                            <button onClick={handleClearLocalStorage} style={{ cursor: "pointer", padding: "5px", borderRadius: "5px", backgroundColor: "rgb(178,76,76)", color: "white", width: "50px", border: "none" }}>Sil</button>
                        </div>
                    )
                })
            }
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>

                Toplam Tutar : <h2>{totalAmount.toFixed(2)} TL</h2>

            </div>
            <div style={{ margin: "10px", display: "flex", justifyContent: "center" }}>
                <button style={{
                    backgroundColor: "orangered",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px",
                    fontSize: "20px",
                    width: "95%"
                }} onClick={() => navigate("/basket-details")} >Sepet Detayına Git</button>
            </div>

        </Drawer>
    )
}

export default DrawerMui