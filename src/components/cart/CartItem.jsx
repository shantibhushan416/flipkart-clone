import { removeFromCart } from "../../redux/action/CartActions";
import { addEllipsis } from "../../utils/CommonUtils";
import { useDispatch } from "react-redux";
import ButtonGroup from "./ButtonGroup";
import { Box, Button, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
  background-color: #fff
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
`;

export default function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <Component>
        <LeftComponent>
          <img src={item.url} style={{ height: 110, width: 110 }} />
          <ButtonGroup />
        </LeftComponent>
        <Box style={{ margin: 20 }}>
          <Typography>{addEllipsis(item.title?.longTitle)}</Typography>
          <SmallText>
            Seller:RetailNet
            <Box component="span">
              <img
                src={fassured}
                alt="flipkart"
                style={{ width: 50, marginLeft: 10 }}
              />
            </Box>
          </SmallText>
          <Typography style={{ margin: "20px 0" }}>
            <span style={{ fontWeight: 600, fontSize: 18 }}>
              ₹{item.price.cost}
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "#878787" }}>
              <strike>₹{item.price.mrp}</strike>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
          </Typography>
          <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
      </Component>
    </div>
  );
}
