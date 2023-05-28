import { useEffect, useState } from "react"
import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/header/Header"
import { Forms } from "./components/forms/Forms"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Notes } from "./components/notas/Notes"
import { About } from "./components/about/About"
import { Footer } from "./components/footer/Footer"
import { Profesionals } from "./components/card-profesionals/Profesionals"
import { Contact } from "./components/contact/Contact"
import { Preloader } from "./components/preloader/Preloader"
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
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
