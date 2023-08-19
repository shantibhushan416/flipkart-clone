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
                   
                   <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail 
                        product={product}
                        fassured={fassured}
                        title={product.title.longTitle}
                        cost={product.price.cost}
                        mrp={product.price.mrp}
                        discount={product.price.discount}
                        description={product.description}
                        />
                        
                    </RightContainer>
        </Container>
                
                
        }
          
        </Component>
    )
}

export default DetailView