import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import "react-multi-carousel/lib/styles.css";

export default function CuiCard(props) {
  const { name, length, thickness, data, imgs } = props;
  return (
    <Card style={{ margin: 'auto' }} sx={{ maxWidth: 345 }}>
      {
        imgs ?
          <CardMedia
            component="img"
            height="100%"
            image={imgs}
          />
          : <></>
      }
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thickness}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
