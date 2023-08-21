import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Paper, Typography } from '@mui/material';
import {useState} from 'react';
import Github from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import Tooltip from '@mui/material/Tooltip';

const ProjectCard = (props) => {
    return ( 
    <>
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            title={props.title}
        />

        <CardActionArea>
            {props.img && <CardMedia
                component="img"
                height="140"
                src={props.img}
                alt="project image" 
                sx={{objectFit: "contain"}}/>}

        </CardActionArea>
        <CardActions>
            {props.github && 
            <Tooltip title={'Github'}>
                <IconButton href={props.github}>
                    <Github />
                </IconButton> 
            </Tooltip>}
            {props.demo && 
            <Tooltip title={'See demo'}>
                <IconButton href={props.demo}>
                    <Launch />
                </IconButton> 
            </Tooltip>}
            
        </CardActions>
    </Card>
    </>
    );
}
 
export default ProjectCard;