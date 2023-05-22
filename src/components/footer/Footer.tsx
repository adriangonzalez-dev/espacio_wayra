import wsp from '../../assets/icons/whatsapp.svg'

export const Footer = () => {
  return (
    <footer className="h-20 w-full">
        <a className='w-40 h-12 bg-secondary-200 cursor-pointer rounded-full fixed bottom-3 left-0 flex gap-2'>
            <img src={wsp} alt="" className='w-12'/>
            <p className='font-patrick text-white'>Escribinos por Whatsapp!</p>
        </a>
    </footer>
  )
}
