import { Button, Input } from '@mui/material'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const provider = new GoogleAuthProvider();

function Auth() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user
            if (user) {
                toast.success("Kullanıcı başarıyla oluşturuldu")
                setEmail("")
                setPassword("")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                navigate("/")
                toast.success(" başarıyla giiş yapıldı")
            }

        } catch (error) {
            toast.error("Giriş yapılamadı" + error.message)
        }
    }
    const loginGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const token = credential.token
            const user = response.user
            if (user) {
                navigate("/")
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    return (
        <div className='form-main-div'>

            <div className='form-border-div'>
                <div className='form-text'>
                    <label className='form-label'>E mail</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' className='form-input' id='email' placeholder='Mail adresinizi giriniz' />
                </div>
                <div className='form-text'>
                    <label className='form-label'>Şifre</label>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} className='form-input' type='password' id='password' color="neut" placeholder='Şifrenizi giriniz' />

                </div>


                <div className='form-button' >
                    <Button onClick={loginGoogle} variant='contained' color='black' sx={{ marginRight: '15px' }}><FaGoogle style={{ marginRight: "10px" }} /> Google ie Giriş Yap </Button>
                    <Button onClick={login} variant='contained' color='black' sx={{ marginRight: '15px' }}>Giriş Yap </Button>
                    <Button onClick={register} variant='contained' color='black'>Kaydol </Button>
                </div>
            </div>
        </div>
    )
}

export default Auth