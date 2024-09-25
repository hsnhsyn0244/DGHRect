/* eslint-disable no-unused-vars */

import { useEffect } from 'react'
import './App.css'
import axios from 'axios'


const BASE_URL = "http://Localhost:3005"

function App() {


  //Kullanıcı bulma gösterme işlemi
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users")
    console.log(response.data);
  }
  //İd ile kullanıcı bulma gösterme işlemi
  const getUserById = async (userId) => {
    //const response = await axios.get(BASE_URL + "/users/" + userId)
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
  }

  // Kullanıcı ekleme işlemii  
  const createUsers = async (newUser) => {
    // post veri eklemek çin kullanılır.
    const respone = await axios.post(`${BASE_URL}/users/`, newUser)
    console.log("response : ", respone.data);
  }

  // Kullanıcı güncelleme işlemi

  const updateUser = async (userId, updateUser) => {
    // PUT VERİ GÜNCELLEMEDE KULLANILIR
    await axios.put(`${BASE_URL}/users/${userId}`, updateUser)


  }
  // Kullanıcı silme işlemi 
  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
  }

  useEffect(() => {

    //kullanıcıları gorme işlemi
    //getAllUsers();
    //getUserById(2);



    //KULLANICI EKLEME İŞLEMİ
    // const newUser = {
    //   "username": "Hasan",
    //   "pasword": "xx"
    // }
    // createUsers(newUser)



    // KULLANICI GÜNCELLEME İŞLEMİ
    // updateUser("3c66", { "username": "Hüseyin", "pasword": "123456" })


    //KULLANICI SİLME İŞLEMİ
    deleteUserById("adf8")

  }, [])

  return (
    <div>

    </div>
  )
}

export default App
