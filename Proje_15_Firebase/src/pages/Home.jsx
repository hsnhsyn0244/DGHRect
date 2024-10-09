import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

function Home() {

    const [user, setUser] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (_user) => {
            if (_user) {
                setUser(_user.email);
            }
        })
    }, [])
    return (
        <div>Merhaba {user}</div>
    )
}

export default Home