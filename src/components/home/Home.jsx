import { useEffect } from "react";

import { Box,styled } from "@mui/material";
import {useDispatch,useSelector} from 'react-redux';

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import MidSlide from "./MidSlide";


import { getProducts } from "../../redux/action/ProductAction";



const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`;

const Home = () => {

    const {products} =  useSelector(state => state.getProducts);
   

    const dispatch = useDispatch()

    useEffect(() => {dispatch(getProducts())},[dispatch]);


    return(
        <> 
           <NavBar/>
           <Component>
               <Banner/>
               <MidSlide products={products}title = "Deal of the day" timer={true} />
               <MidSection/>
               <Slide products={products}title = "End of Season Bestsellers" timer={false}  />
               <Slide products={products}title = "Back to Campus Deals" timer={false} />
               <Slide products={products}title = "Sports, Healthcare & more" timer={false} />
               <Slide products={products}title = "Trending Offers" timer={false} />
               <Slide products={products}title = "Recommended Items" timer={false} />
               <Slide products={products}title = "Seasons's top picks" timer={false} />
               <Slide products={products}title = "Top Deals on Accessories" timer={false} />
           </Component>
         
        </>
       
    )
}

export default Home;