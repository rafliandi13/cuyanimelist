import Header from "../components/AnimeList/header"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)

  // const topAnime = await response.json()
  // console.log(topAnime)
  const topAnime = await getAnimeResponse("top/anime","limit=8")

  return (
    <>
    {/* anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>

      {/* anime terbaru */}
      <section>
        <Header title="Paling Baru" linkTitle="Lihat Semua" linkHref="/new" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
export default Page;