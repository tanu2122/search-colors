import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Masonry from 'react-masonry-css';
import nearestColor from 'nearest-color';
import namedColors from 'color-name-list';
import '../App.css';

const ColorCard = ({searchTerm}) => {

    const [image, setImage] = useState([])
    const ACCESS_KEY="KMClg5mkrheV84WFULwatg4kAItCC0GPmL3nwSXOjGU";  
    const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
    const nearest = nearestColor.from(colors);  

    const getImages = async () => {
        const response = await fetch('https://api.unsplash.com/photos?per_page=70&client_id='+ACCESS_KEY);
        setImage(await response.json())
        // const data = await response.json()
        // console.log(data)
    }

    useEffect(() => {
      getImages();
    }, [])
    return (
        <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
        {image.filter((val) => {
          let someColor = nearest(val.color)
          console.log(someColor.name)
            if (searchTerm === "") {
              return val
              } 
            else if (someColor.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
            /* else if (val.description !== null) {
              if (val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              } */
            }).map((val, key) => {
            return <Card className="cardStyle" sx={{ minWidth: 275 }} style={{backgroundColor: val.color}}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {val.color}
            </Typography>
             <img alt="" src={val.urls.small}/>
            </CardContent>
            </Card>
            ;
          })}
          </Masonry>
    )
}

export default ColorCard
