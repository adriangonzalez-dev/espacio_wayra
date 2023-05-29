import { Card } from "./Card"

export interface Article {
    id: number,
    img: string,
    link: string,
    title: string,
    published: string,
    author: string,
    description: string
}

const articles:Article[]  = [
    {
        id: 1,
        img:"https://porquequieroestarbien.com/sites/default/files/styles/max_1300x1300/public/2022-03/cu%C3%A1ndo-se-necesita-fonoaudiolog%C3%ADa.png.webp?itok=7rfP4IUe",
        link: "#!" ,
        title: "Artículo 1",
        published: "13.01.2022",
        author: "Anna Maria Doe",
        description: "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam."

    },{
        id: 2,
        img:"https://www.totalcare.com.co/fotospages/thu_terapia_de_fonoaudiologia_1557441387.jpg",
        link: "#!" ,
        title: "Artículo 2",
        published: "12.01.2022",
        author: "Halley Frank",
        description: "Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum."
    },{
        id: 3,
        img:"https://www.totalcare.com.co/galepages/thu_gal_terapia_de_fonoaudiologia_1556918742.jpg",
        link: "#!" ,
        title: "Artículo 3",
        published: "10.01.2022",
        author: "Joe Svan",
        description: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec."
    }
]

export const Articles = () => {
    return (
        <div className="container my-6 px-6 mx-auto font-patrick">
        <section className="mb-16 text-gray-800 text-center md:text-left">

            <h2 className="text-3xl font-bold mb-6 text-center">Artículos</h2>

            {
                articles.map((article, index) => (
                    <Card article={article} key={index} position={index % 2 === 0 ? "left" : "right"}/>
                ))
            }

        </section>
        </div>
    )
}
