import './App.css'
import PageContainer from './Container/PageContainer';
import Header from './Components/Header';
import RouterConfig from './Config/RouterConfig';
import Loading from './Components/Loading';
import DrawerMui from './Components/DrawerMui';

function App() {

  return (
    <div id='root2'>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <DrawerMui />
      </PageContainer>
    </div>
  )
}

export default App
