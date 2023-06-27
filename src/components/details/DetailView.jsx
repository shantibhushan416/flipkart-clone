import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from "react-router-dom"

import { getProductDetails } from "../../redux/action/ProductAction";
import ProductDetail from "./ProductDetail";
import ActionItems from "./ActionItems.jsx";

import { Box, Grid,styled } from "@mui/material";


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  
    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading, product} =  useSelector(state => state.getProductDetails)
    console.log(product)

    useEffect(() => {
        dispatch(getProductDetails(id))
    },[dispatch,id])

    return(
        <Component>   

        {product && Object.keys(product).length &&
                 
            <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItems product={product} />
                </Grid>
                   { product.map((data) => (
                   <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail 
                        product={product}
                        fassured={fassured}
                        title={data.title.longTitle}
                        cost={data.price.cost}
                        mrp={data.price.mrp}
                        discount={data.price.discount}
                        description={data.description}
                        />
                        
                    </RightContainer>))}
        </Container>
                
                
        }
          
        </Component>
    )
}

export default DetailView