import React from 'react'
import { CircularProgress } from '@mui/material';
import { LoadingStyle } from './styled';

export const Loading = () => {
    return (
        <LoadingStyle>
            <CircularProgress />
        </LoadingStyle>
    )
}

export default Loading