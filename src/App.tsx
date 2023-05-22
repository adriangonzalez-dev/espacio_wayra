import { useEffect, useState } from "react"
import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/header/Header"
import { Forms } from "./components/forms/Forms"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Notes } from "./components/notas/Notes"
import { About } from "./components/about/About"
import { Footer } from "./components/footer/Footer"
function App() {
  const [visible, setVisible] = useState(false)
  const handleScroll = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,

    })
  }, [])
  return (
    <>
      <Header visible={visible}/>
      <Banner setVisible={handleScroll}/>
      <Forms/>
      <About/>
      <Notes/>
      <Footer/>
    </>
  )
}

export default App
