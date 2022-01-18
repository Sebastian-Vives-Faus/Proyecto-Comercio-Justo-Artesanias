import React from 'react';
import logo from './logo.svg';
import { Box } from '@mui/material';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// Artesania
import { Artesania_Card } from './Artesania_Card';

export const Artesanias = () =>{
  
  interface FolkArt {
    name: string,
    image: string,
    hover_image: string,
    artisan: string,
    price: number
  }

  const [loading, setLoading] = React.useState(false);
  const [folkart, setFolkart] = React.useState([]);


  // Get folkart from backend
  React.useEffect(() => {
    const loadFolkart = async () =>{
      // 1. Fetch the list
      try {
        await axios.get("http://localhost:5000/folkart").then((response) => {
          //console.log(response);
          setFolkart(response.data.folkart);
          setLoading(true);
          console.log(folkart);
        })
      } catch (error) {
        console.log(error);
      }
    };

    loadFolkart();
  },[])

  if (!folkart) return null;

  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          FOLKART
        </p>

      <Box sx={{ 
          display: 'flex', 
          width: '100%', 
          maxWidth: 1400, 
          justifyContent: 'center', 
          textAlign: 'center',
          marginTop: '3em',
          marginBottom: '2em',
          flexWrap: 'wrap' }}
          >


        {loading ? 
          (folkart.map(item => {
            return <Artesania_Card data={item} />
          }))
         : (<p>Loading...</p>)}
        </Box>
      </header>
    </div>
  );
}
