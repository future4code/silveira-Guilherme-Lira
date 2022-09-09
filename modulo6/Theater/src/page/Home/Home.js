import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from './../../Contants/url';
import axios from 'axios'
import { Header, Main, MoviePage, SearchBlock, WelcomeText, FilterText, ButtonFilterBox, ButtonFilter } from './style';
import { MovieCard } from "../../Components/MovieCard";
import logo from '../../assets/tmdblogo.png'

export const Home = () => {

    const [movieList, setMovieList] = useState([])
    const [category, setCategory] = useState("")


    const getMovies = () => {
        axios.get(`${BASE_URL}/movie/popular${API_KEY}`)
            .then((res) => {
                setMovieList(res.data.results)
                console.log(movieList)
            })
            .catch((er) => {
                console.log(er.response)
            })
    }

    useEffect(() => {
        getMovies()
    }, [])

    const listPopularMovies = movieList && movieList.map((movie) => {
        return (
            <MovieCard key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                release={movie.release_date}
            />
        )
    })

    const movieFilter = (chosenCategory) => {
        if (chosenCategory === category) {
            setCategory("")
        }
        else {
            setCategory(chosenCategory)
        }
    }

    return (
        <Main>
            <Header>
                <img src={logo} alt='tmdb logo' />
            </Header>
            <SearchBlock>
                <WelcomeText>
                    <p> Milhões de filmes, séries e pessoas <br></br> para descobrir. Explore já. </p>
                </WelcomeText>
                <ButtonFilterBox>
                    <FilterText> Filtre Por: </FilterText>
                    <div>
                        <ButtonFilter onClick={() => movieFilter("Ação")}> <p>Ação</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Aventura")}> <p>Aventura</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Animação")}> <p>Animação</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Comédia")}> <p>Comédia</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Crime")}> <p>Crime</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Documentário")}> <p>Documentário</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Drama")}> <p>Drama</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Família")}> <p>Família</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Fantasia")}> <p>Fantasia</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("História")}> <p>História</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Terror")}> <p>Terror</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Música")}> <p>Música</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Mistério")}> <p>Mistério</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Romance")}> <p>Romance</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Ficção Científica")}> <p>Ficção Científica</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Cinema TV")}> <p>Cinema TV</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Thriller")}> <p>Thriller</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Guerra")}> <p>Guerra</p> </ButtonFilter>
                        <ButtonFilter onClick={() => movieFilter("Faroeste")}> <p>Faroeste</p> </ButtonFilter>
                    </div>
                </ButtonFilterBox>
            </SearchBlock>
            <MoviePage>
                {listPopularMovies}
            </MoviePage>
        </Main>
    )
}