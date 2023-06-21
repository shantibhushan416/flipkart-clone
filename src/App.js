import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 55 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
