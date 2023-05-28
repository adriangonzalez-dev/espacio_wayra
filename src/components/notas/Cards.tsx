import {puzzle1, puzzle2, puzzle3, puzzle4} from '../../assets'

export const Cards = () => {
  return (
    <article
    className='w-72 h-72 shadow-md relative p-4 overflow-hidden'>
        <div className='absolute top-1/6 left-1/6 w-60 h-60 opacity-10 grid grid-cols-2 grid-rows-2 gap-4'>
            <span data-aos="fade-down-right">
                <img src={puzzle1} alt=""/>
            </span>
            <span data-aos="fade-down-left">
                <img src={puzzle2} alt="" />
            </span>
            <span data-aos="fade-up-right">
                <img src={puzzle3} alt="" />
            </span>
            <span data-aos="fade-up-left">
                <img src={puzzle4} alt="" />
            </span>
        </div>
        <div
        className="text-center p-2 font-patrick w-full h-full border-secondary-500 border-2 flex flex-col justify-between">
            <h3 className='text-2xl font-bold text-secondary-100'>Titulo de propuesta</h3>
            <p>descripción de propuesta: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maiores! Impedit nihil ipsum in dignissimos ipsam voluptatibus ut quia laudantium veniam, nisi velit</p>
            <span>Más info/contacto</span>
        </div>
    </article>
  )
}
