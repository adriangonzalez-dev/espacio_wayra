import { Article } from ".."
type Position = 'left' | 'right'
interface Props {
    article: Article,
    position: Position
}

export const Card = ({article, position}:Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
                <div className={`mb-6 md:mb-0 ${position === 'left' ? 'md:order-last' : ''}`}>
                    <div
                        className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={article.img}
                            className="w-full" alt="Louvre" />
                        <a href={article.link}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                style={{backgroundColor:'rgba(251, 251, 251, 0.2)'}}></div>
                        </a>
                    </div>
                </div>

                <div className={`${position === 'left' ? 'md:order-first' : ''}`}>
                    <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                    <p className="mb-6 text-gray-500">
                        <small>Published <u>{article.published}</u> by <a href="" className="text-gray-900">{article.author}</a></small>
                    </p>
                    <p className="text-gray-500">
                        {article.description}
                    </p>
                </div>
            </div>
  )
}
