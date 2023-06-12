
import { InputBase,Box,styled  } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';


const SearchContainer = styled(Box)`
    background: #fff; 
    width: 38%; 
    border-radius: 2px; 
    margin-left: 10px; 
    display: flex`;;

const InputContainer = styled(InputBase)`
    padding-left: 20px; 
    width: 100%; font-size: unset`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
    `;


const Search = () =>{
    return(
        <SearchContainer>
            <InputContainer placeholder="Search for products and more"/>
            <SearchIconWrapper>
                <MicIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search;