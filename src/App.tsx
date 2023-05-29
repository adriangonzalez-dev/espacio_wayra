import { useEffect, useState } from "react"
import { Banner, 
  Header, 
  Forms, 
  Notes, 
  About, 
  Footer, 
  Profesionals, 
  Contact, 
  Preloader, 
  Articles} from "./components"
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  const [visible, setVisible] = useState<boolean>(false)
  const [preloader, setPreloader] = useState<boolean>(true)
  const handleScroll = ():void => {
    setVisible(!visible)
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,

    })
    setTimeout(() => {
      setPreloader(false)
    },1000)
  }, [])

  if(preloader){
    return (
      <Preloader/>
    )
  }
  return (
    <>
      <Header visible={visible}/>
      <Banner setVisible={handleScroll}/>
      <Forms/>
      <About/>
      <Profesionals/>
      <Notes/>
      <Articles/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
