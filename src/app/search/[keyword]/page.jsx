import Header from "@/components/AnimeList/header"
import AnimeList from "@/components/AnimeList"


const Page = async ({params}) => {
  const {keyword} = params 
  
  const decodKeyword = decodeURI(keyword)

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodKeyword}`)

  const searchAnime = await response.json()
//   console.log(topAnime)

  return (
    <>
    {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian Untuk ${decodKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}
export default Page;