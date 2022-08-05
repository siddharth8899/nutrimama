import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CuiCard(props) {
  const { name, length, thickness, data, imgs = [] } = props;
  return (
    <Card style={{ margin: 'auto' }} sx={{ maxWidth: 345 }}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {
            imgs && imgs.map(e => {
              return <img
                src={e}
                alt='.'
                style={{
                  display: 'block',
                  height: '100%',
                  margin: 'auto',
                  width: '100%'
                }}
              />
            })
          }
        </Carousel>
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
