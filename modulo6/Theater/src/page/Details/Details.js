import { Header } from "../Home/style"
import logo from '../../assets/tmdblogo.png'
import { Main } from "./style"
import { useParams } from "react-router-dom"
import { useState } from 'react';
import axios from "axios";
import { API_KEY, BASE_URL, IMG_URL } from './../../Contants/url';
import { useEffect } from 'react';

export const Details = (props) => {

    const [movieDetails, setMovieDetails] = useState([])

    const params = useParams();

    const getMoviesDetails = () => {
        axios.get(`${BASE_URL}/movie/${params.id}${API_KEY}`)
            .then((res) => {
                console.log([res.data])
                setMovieDetails([res.data])
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
                <div>
                    <img src={`${IMG_URL}${movie.poster_path}`} alt=""/>
                </div>
                <div>
                    <strong>{movie.title}</strong>
                    <h3>{movie.release_date}</h3>
                    <div>
                        <span>{movie.vote_average}</span>
                    </div>
                    <p>{movie.overview}</p>

                    <button>
                        <h2>Trailer</h2>
                        
                    </button>
                </div>
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
        </div>
    )
}