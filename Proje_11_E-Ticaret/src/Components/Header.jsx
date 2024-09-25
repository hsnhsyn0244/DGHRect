import React, { useState } from 'react'
import '../Css/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../Redux/Slices/basketSlice';


function Header() {

    const [theme, setTheme] = useState(true);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.basket)

    const changeTheme = () => {

        const root = document.getElementById("root")
        setTheme(!theme)
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "white";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";

        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src='./src/Images/Logo2.jpeg' />
                <p className='logo-text'>Çelikhan Kitabevi</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' placeholder='Bir şeyler ara' type="text" />
                <div className='flex-row'>
                    {
                        theme ? <MdLightMode className='icon' onClick={changeTheme} /> : <IoMoon className='icon' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color='success' >
                        <FaBasketShopping className='icon' />
                    </Badge>
                </div>

            </div>
        </div >
    )
}

export default Header