import { Header } from "../Home/style"
import logo from '../../assets/tmdblogo.png'
import { Main } from "./style"
import { useParams } from "react-router-dom"
import { useState } from 'react';
import axios from "axios";
import { API_KEY, BASE_URL } from './../../Contants/url';
import { useEffect } from 'react';

export const Details = (props) => {

    const [movieDetails, setMovieDetails] = useState([])

    const params = useParams();

    const getMoviesDetails = () => {
        axios.get(`${BASE_URL}/movie/${params.id}${API_KEY}`)
            .then((res) => {
                console.log(res.data)
                setMovieDetails(res.data)
                console.log('taqui')
                console.log(movieDetails)
            })
            .catch((er) => {
                console.log(er.response)
            })
    }

    const movieDetailsList = movieDetails.map((movie) => {
        return (
            <div key={movie.id}>
                <p> {movie.original_title} </p>
            </div>
        )
    })

    useEffect(() => {
        getMoviesDetails()
    }, [])
      
    return (
        <div>
            <Header>
                <img src={logo} alt='tmdb logo' />
            </Header>

            <div>
                {movieDetailsList}
            </div>

            {/* <Main>
                <Poster>
                    <img
                        src={`${process.env.REACT_APP_BASE_URL_IMAGEM}${movieSelected?.poster_path}`}
                        alt=""
                    />
                </Poster>
                <DetailMovie>
                    <strong>{movieSelected?.title}</strong>
                    <h3>{releaseDate}</h3>
                    <div>
                        <AiFillStar color="#f4f006" size={25} />
                        <span>{movieSelected?.vote_average}</span>
                    </div>
                    <p>{movieSelected?.overview}</p>

                    <button>
                        <h2>Trailer</h2>
                        <AiFillPlayCircle color="#b71313" size={50} />
                    </button>
                </DetailMovie>
            </Main> */}

        </div >
    )
}