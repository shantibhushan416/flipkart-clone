import { Box, Button,styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
      padding: '20px 40px'
  }
}))

const Image = styled('img')({
  padding: 15
});

const StyledButton = styled(Button)(({theme}) => ({
  width: "48.5%",
  borderRadius: 2,
  height: 50,
  color: "#FFF",
  [theme.breakpoints.down("lg")]:{
    width: "48.5%%"
  },
  [theme.breakpoints.down("sm")]:{
    width: "50%"
  },

}))
 

const ActionItems = ({ product }) => {
  return (
    <LeftContainer>
     {product.map(data => (
     <Box style={{ 
      padding: '15px 20px',
      width: '90%',
      border: '1px solid #f0f0f0',}}>
        <Image src={data.detailUrl} alt="" style={{width:"100%"}} />
     </Box>
     )) }
        <StyledButton  style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
        <StyledButton  style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
    </LeftContainer>
  );
};

export default ActionItems;
