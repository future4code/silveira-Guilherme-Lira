import { IMG_URL } from '../Contants/url'
import { ImgDefinitions, MovieBlockCard, RelaseDateStyle, TitleStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { goToMovieDetails } from '../Routes/Coordinator';

export const MovieCard = (props) => {

    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }


    return (
        <MovieBlockCard key={props.id} onClick={() => onClickCard(props.id)}>
            <div>
                <ImgDefinitions src={`${IMG_URL}${props.poster}`} />
            </div>
            <div>
                <TitleStyle> {props.title} </TitleStyle>
                <RelaseDateStyle> {props.release} </RelaseDateStyle>
            </div>
        </MovieBlockCard>
    )
}