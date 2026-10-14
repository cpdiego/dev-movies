import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  Wrapper,
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from './styles'
import { getImages } from '../../utils/getImages'
import {
  getMovies,
  getPopularSeries,
  getTopArtist,
  getTopMovies,
  getTopSeries,
} from '../../services/getData'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topArtist, setTopArtist] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopArtist(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topArtist]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setPopularSeries(popularSeries)
          setTopArtist(topArtist)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <Wrapper>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assita agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Séries Populares'} />
      )}
      {topArtist && <Slider info={topArtist} title={'Top Artistas'} />}
    </Wrapper>
  )
}

export default Home
