import Header from "../components/AnimeList/header"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

const Page = async () => {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)

  // const topAnime = await response.json()
  // console.log(topAnime)
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  // recomendedAnime = {data : recomendedAnime.slice(0,4)}
  recomendedAnime = reproduce(recomendedAnime, 4)

  console.log(recomendedAnime)

  return (
    <>
    {/* anime terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>

      {/* anime terbaru */}
      <section>
        <Header title="Rekomendasi" linkTitle="Lihat Semua" linkHref="/new" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  )
}
export default Page;