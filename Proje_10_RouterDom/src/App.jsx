import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import About from './Pages/About'
import NoutFound from './Pages/NoutFound'
import Header from './Components/Header'
import EmployeeAbout from './Pages/EmployeeAbout'
import CompanyAbout from './Pages/CompanyAbout'
import ProductDetails from './Pages/ProductDetails'

function App() {

  return (
    <div >
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        {/*          "/product-details/+id" */}
        <Route path='/product-details/:id' element={<ProductDetails />} />

        <Route path='/about' element={<About />}>
          <Route path='employee' element={<EmployeeAbout />}></Route>
          <Route path='company' element={<CompanyAbout />}></Route>
        </Route>

        <Route path='*' element={<NoutFound />} />  {/* Eğer hiçbişey ile maplenmediyse Notfounda yonlendırıyor */}
      </Routes>
    </div >
  )
}

export default App
