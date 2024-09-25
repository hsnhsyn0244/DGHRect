import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("Her zaman çalışır.");
  },)
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır");
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve FİRSTNAME değeri değiştiğinde çalışır");
  }, [firstName])
  useEffect(() => {
    console.log("ilk render edildiğinde ve LASTNAME değeri değiştiğinde çalışır");
  }, [lastName])

  return (
    <div>

    </div>
  )
}

export default App
