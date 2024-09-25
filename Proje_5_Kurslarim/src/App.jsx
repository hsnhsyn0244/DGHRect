
import './App.css'
import Header from './Components/Header'
import { enstruments } from './Components/Data'
import Enstruman from './Components/enstruman';
import './Css/Course.css'
function App() {

  return (

    <div>
      <Header />
      <div className='course-main'>
        {
          enstruments?.map((enstruman) => (
            <Enstruman key={enstruman.id} enstruman={enstruman} />
          ))
        }
      </div>
    </div>
  )
}

export default App
