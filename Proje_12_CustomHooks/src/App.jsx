import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle';


function App() {

  const { count, decrement, increment } = useCounter();
  const { open, change } = useToggle();
  return (
    <div>
      <div>
        Hook-1 COUNT
        <div>{count}</div>
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalat</button>
      </div>
      <br /><br /><br /><br />
      <div>
        Hooks-2 TOGGLE
        {open && <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: "red",
        }}>Kutu</div>}


        <button onClick={change}>{open ? "gizle" : "göster"}</button>
      </div>

    </div>
  )
}

export default App
