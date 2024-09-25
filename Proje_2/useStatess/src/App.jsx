import './App.css'
import React, { useState } from 'react'

function App() {

  // const [firstName, setFirstName] = useState("Hasan")
  // const [name, setName] = useState(["Hasan","Osman","Mehmet","Yusuf"])
  // const [userInfo, setUserInfo] = useState({userName:"riwi", pasword:"12345"})
  // const [show, setShow] = useState(true)
  // const handleChange = () =>{
  // setFirstName("Mehmet")
  // }

  // useState = bir statenin değeri set metodu kullanalarak değiştirildiğinde component yeniden render edilir.

  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  }
  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  console.log("component render edildi");
  return (
    <div>
      {/* <div>{firstName}</div>
      <div><button onClick={()=> {setFirstName ("Mehmet")} }>İsim Değişitir</button></div> 
    {show ? <div>{userInfo.userName} {userInfo.pasword}</div> : <div>Bu bilgilerini gösterme</div> } */}
      <div>{count}</div>
      <div onClick={arttir}>Arttır</div>
      <div onClick={azalt}>Arttır</div>



    </div>
  )
}

export default App
