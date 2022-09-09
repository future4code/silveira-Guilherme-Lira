import { ContainerHeader, Title } from "./styled"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { goBack } from "../../Routes/coordinator";
import { useNavigate } from 'react-router-dom';

const Header = ({title, back}) => {
    const navigate = useNavigate()

    return <ContainerHeader>
        { back && <ArrowBackIosIcon onClick={() => goBack(navigate)}/> }
        <Title>{title}</Title>
    </ContainerHeader>
}

export default Header