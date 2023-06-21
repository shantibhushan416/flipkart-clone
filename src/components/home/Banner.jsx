import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

import { styled } from "@mui/material";

import { bannerData } from "../../constants/data";

const Image = styled('img')(({theme})=> ({
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]:{
      objectFit: "cover",
      height: 100
    }
}));

const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Banner = () => {
    return(<Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {bannerData.map(({url} )=> (<Image src={url} alt="new" />))}
    </Carousel>)
}

export default Banner