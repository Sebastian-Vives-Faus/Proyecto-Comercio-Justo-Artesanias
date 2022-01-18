import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './style.css'

import { Button } from '@mui/material';

interface Props {
    data: {
        artisan: string,
        hover_image: string,
        id: number,
        image: string,
        name: string,
        price: number
    }
}


export const Artesania_Card: React.FC<Props> = ({data}) =>{
    
    const [hovered, setHovered] = React.useState(false);
    
    return (
        <Card sx={{ width: 250, height: 300, margin: '0.5em', transition: "transform 0.15s ease-in-out" }}
          onMouseOver={()=>setHovered(true)} 
          onMouseOut={()=>setHovered(false)} 
          
          >
          <CardActionArea sx={{height: 250}} onClick={() => {console.log("click card")}}>
          
            <CardMedia
              component="img"
              height="150"
              image={ hovered ?
                   data.image : data.hover_image}
              alt="green iguana"
              sx={{objectFit: 'contain'}}
            />
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left'
            }}>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.artisan}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
               {data.price}
              </Typography>
            
                  
            </CardContent>
          </CardActionArea>
          <div className="buy_button">
            <Button variant="contained" className="hidden-button" onClick={() => {console.log("click button")}}>ADD TO CART</Button>
          </div>
        </Card>
    );
  }