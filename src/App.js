import React,{useState} from 'react'
import Main from './components/Main'
import PageNavbar from './components/PageNavbar'



const App = () => {
  const [isLabOpen, setIsLabOpen] = useState(true);

  return (
    <>
    <PageNavbar  labFunc={setIsLabOpen} />
    <Main isLabOpen={isLabOpen} setIsLabOpen={setIsLabOpen} />
    </>
  )
}

export default App