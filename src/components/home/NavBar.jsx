import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overflowX: "overlay",

  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      {" "}
      <Component>
        {navData.map(({ url, text }) => (
          <Container>
            <img src={url} alt="new" style={{ width: 64 }} />
            <Text>{text}</Text>
          </Container>
        ))}
      </Component>
    </Box>
  );
};

export default NavBar;
