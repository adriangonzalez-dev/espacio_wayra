/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import logo from '../../assets/svg/logo.svg'
import { useVisible } from '../../hooks/useVisible'
import { Waves } from './Waves'

interface Props {
  setVisible: () => void
}
export const Banner = ({setVisible}:Props) => {

  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible(ref)

  useEffect(() => {
      setVisible()
  }, [isVisible])

  return (
    <div 
    className='bg-clouds w-full h-96 bg-cover
    flex items-center justify-center relative overflow-y-hidden '
    ref={ref}>
        <img 
        src={logo} 
        alt="" 
        className='w-1/4 min-w-150 max-w-250'
        data-aos="zoom-in"
        />
       <Waves/>
    </div>
  )
}
