import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";

const Component = styled(Grid)`
  padding: 30px 135px;
`;
const LeftComponent = styled(Grid)`
  padding-right: 15px;
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <BottomWrapper>
              <StyledButton>Place Order</StyledButton>
            </BottomWrapper>
          </LeftComponent>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
