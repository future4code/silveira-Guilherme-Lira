import React from 'react';
import { IconLogic, CommentContainer } from "./style";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IconButton } from '@mui/material';

export function CommentCard(props) {

    const voteUp = () => {
        if (props.userVote === 1) {
            props.commentVote(props.id)
        } else {
            props.commentVote(props.id, 1)
        }
    }

    const voteDown = () => {
        if (props.userVote === -1) {
            props.commentVote(props.id)
        } else {
            props.commentVote(props.id, -1)
        }
    }

    return (
    <CommentContainer key={props.id}>
        <h1> Enviado por: {props.username} </h1>
        <p> Comentário: {props.body} </p>
        <IconLogic>
            <IconButton onClick={voteUp}>
                <p><ArrowUpwardIcon className='uparrow' />{props.voteSum}</p>
            </IconButton>
            <IconButton onClick={voteDown}>
                <ArrowDownwardIcon className='downarrow' />
            </IconButton>
        </IconLogic>
    </CommentContainer>
    );
}

export default CommentCard;