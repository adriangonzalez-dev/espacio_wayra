import {toy, planet, rainbow, sun} from '../../assets'
import './forms.css'

export const Forms = () => {
  return (
    <section className='w-full flex flex-wrap justify-evenly p-4 font-patrick bg-gray-100'>
        <article 
        data-aos="zoom-in"
        className='bg-secondary-200 box-info'>
           <span className='flex w-full items-center justify-center gap-2'>
                <img src={toy} alt="" className='w-12'/>
                <h3 className='text-2xl'>Titulo 1</h3>
           </span>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aut.</p>
        </article>
        <article 
        className='bg-secondary-300 box-info'
        data-aos="zoom-in">
            <span className='flex w-full items-center justify-center gap-2'>
                <img src={sun} alt="" className='w-12'/>
                <h3 className='text-2xl'>Titulo 1</h3>
           </span>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aut.</p>
        </article>
        <article 
        className='bg-secondary-400 box-info'
        data-aos="zoom-in">
            <span className='flex w-full items-center justify-center gap-2'>
                <img src={rainbow} alt="" className='w-12'/>
                <h3 className='text-2xl'>Titulo 1</h3>
           </span>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aut.</p>
        </article>
        <article 
        className='bg-secondary-500 box-info'
        data-aos="zoom-in">
            <span className='flex w-full items-center justify-center gap-2'>
                <img src={planet} alt="" className='w-12'/>
                <h3 className='text-2xl'>Titulo 1</h3>
           </span>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem aut.</p>
        </article>
    </section>
  )
}
