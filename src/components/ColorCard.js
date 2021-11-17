import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import JsonData from '../MOCK_DATA.json'
import Masonry from 'react-masonry-css';
import '../App.css';

const ColorCard = ({searchTerm}) => {
    return (
        <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
        {JsonData.filter((val) => {
            if (searchTerm === "") {
              return val
            } else if (val.color_name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }}).map((val, key) => {
            return <Card className="cardStyle" sx={{ minWidth: 275 }} style={{
            backgroundColor: val.color_code
          }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {val.color_code}
            </Typography>
            </CardContent>
            </Card>
            ;
          })}
          </Masonry>
    )
}

export default ColorCard
