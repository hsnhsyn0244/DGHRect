import './App.css'
import Container from './Container'
import Product from './Product'

function App() {

  return (
  <div>
   <Container>
    <Product key={0} productName="Telefon" price={20500}/>
    <Product key={1} productName="Bilgisayar" price={25500}/>
   </Container>
  </div>
  )
}

export default App
