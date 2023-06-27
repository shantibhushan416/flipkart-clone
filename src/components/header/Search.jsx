import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { getProducts } from "../../redux/action/ProductAction";

import { InputBase,Box,styled, List, ListItem  } from "@mui/material";
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

const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: black;
    margin-top: 36px
    `;

const Search = () =>{

    const [text, setText] = useState("");

    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
        setText(text)
    }

    return(
        <SearchContainer>
            <InputContainer 
            placeholder="Search for products and more"
            onChange={(e)=> getText(e.target.value)}
            value={text}
            />
            <SearchIconWrapper>
                <MicIcon/>
            </SearchIconWrapper>
            {
                text && 
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(({title,id}) => (
                            <ListItem>
                                <Link 
                                to={`product/${id}`} 
                                style={{textDecoration: "none", color: "inherit"}}
                                onClick={() => setText('')}
                                >
                                {title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;