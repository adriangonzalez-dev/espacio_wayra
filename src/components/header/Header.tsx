import {puzzle1,puzzle2,puzzle3,puzzle4,bar} from '../../assets'
import { useState } from 'react'
interface Props {
    visible: boolean
}
export const Header = ({visible}:Props) => {
  const [menu, setMenu] = useState<boolean>(false)

  const setActiveMenu = ():void => setMenu(!menu)

  return (
    <header
    className={`flex justify-between items-center p-2 fixed top-0 z-10 
    left-0 w-full h-16 duration-300 
    ${visible ? 'bg-secondary-100' : 'bg-none'}`}
    > 
        <div className='w-10 z-10 bg-inherit grid grid-cols-2 grid-rows-2 justify-center gap-0 items-center overflow-hidden'>
          <img src={puzzle1} alt="" className='w-10'/>
          <img src={puzzle2} alt="" className='w-10'/>
          <img src={puzzle3} alt="" className='w-10'/>
          <img src={puzzle4} alt="" className='w-10'/>
        </div>

        <nav 
        className={`flex bg-secondary-100
        h-48 flex-col absolute w-full items-center justify-center gap-2 top-16 left-0 ${menu ? 'translate-y-0' : '-translate-y-64'} sm:translate-y-0 sm:flex-row sm:top-0 sm:h-full bg-inherit duration-200 z-0`}>
            <span className="link">Link 1</span>
            <span className="link">Link 2</span>
            <span className="link">Link 3</span>
            <span className="link">Link 3</span>
        </nav>
        <button 
        onClick={setActiveMenu}
        className='ms-auto block md:hidden p-1 cursor-pointer hover:bg-secondary-400 rounded z-10'>
          <img src={bar} alt="" />
        </button>
    </header>
  )
}
