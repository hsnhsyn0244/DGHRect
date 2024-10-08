import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import MT25 from '../Images/MT25.jpeg'
import { Button } from '@mui/material';


function MuiCard() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="160"
                    image={MT25}
                    alt='MT-25'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component="div">MT-25</Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati qui corrupti ipsam eos quod officia amet laboriosam accusantium voluptatem repellat, ex neque natus rerum ipsa beatae. Nobis minus aspernatur minima quos voluptatum libero amet veritatis esse. Autem totam, quo eius nulla voluptas illum aliquid illo neque provident nemo placeat consequatur.</Typography>
                </CardContent>
                <CardActionArea>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActionArea>

            </Card>
        </div>
    )
}

export default MuiCard