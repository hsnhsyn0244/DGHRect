import { useState } from 'react'
import './App.css'
import MuiButton from './components/MuiButton'
import MuiTextField from './components/MuiTextField'
import MuiSelect from './components/MuiSelect'
import MuiCheckbox from './components/MuiCheckbox'
import MuiAutoCompleete from './components/MuiAutoCompleete'
import MuiBox from './components/MuiBox'
import MuiStack from './components/MuiStack'
import MuiGrid from './components/MuiGrid'
import MuiCard from './components/MuiCard'
import MuiAccordion from './components/MuiAccordion'
import MuiAppBar from './components/MuiAppBar'
import MuiImageList from './components/MuiImageList'
import MuiDrawer from './components/MuiDrawer'
import MuiBadge from './components/MuiBadge'
import MuiDialog from './components/MuiDialog'
import MuiSnackBar from './components/MuiSnackBar'
import MuiProgress from './components/MuiProgress'
import MuiSkeleton from './components/MuiSkeleton'
import MuiTable from './components/MuiTable'
import MuiTabs from './components/MuiTabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*<MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiCheckbox />
      <MuiAutoCompleete />
      <MuiBox />
      <MuiStack />
      <MuiGrid />
      <MuiCard />
      <MuiAccordion />
      <MuiAppBar />
      <MuiImageList />
      <MuiDrawer />
      <MuiBadge />
      <MuiDialog />
      <MuiSnackBar /> 
      <MuiProgress />
      <MuiSkeleton />
      <MuiTable /> */}
      <MuiTabs />
    </div>

  )
}

export default App
