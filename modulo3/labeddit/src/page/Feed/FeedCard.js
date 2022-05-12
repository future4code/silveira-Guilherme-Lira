import React from 'react';
import { PostContainer, IconLogic, ActionCard } from "./styled";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CommentIcon from '@mui/icons-material/Comment';
import { IconButton } from '@mui/material';


export function FeedCard(props) {
    const voteUp = () => {
        if (props.userVote === 1) {
            props.postVote(props.id)
        } else {
            props.postVote(props.id, 1)
        }
    }

    const voteDown = () => {
        if (props.userVote === -1) {
            props.postVote(props.id)
        } else {
            props.postVote(props.id, -1)
        }
    }

    return (
    <PostContainer>
        <ActionCard onClick={() => props.onClickCard(props.id)}>
            <p> Enviado por: {props.username}</p>
            <p> Titulo: {props.title} </p>
            <p> Body: {props.body} </p>
        </ActionCard>
        <IconLogic>
            <IconButton onClick={voteUp}>
                <p><ArrowUpwardIcon className='uparrow' />{props.voteSum}</p>
            </IconButton>
            <IconButton onClick={voteDown}>
                <ArrowDownwardIcon className='downarrow' />
            </IconButton>
            <p><CommentIcon /> {props.commentCount} </p>
        </IconLogic>
    </PostContainer>
    );
}

export default FeedCard;