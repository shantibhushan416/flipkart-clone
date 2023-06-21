import { Box, Typography,Menu,MenuItem,styled } from "@mui/material";
import {PowerSettingsNew} from '@mui/icons-material';
import { useState } from "react"


const Component = styled(Menu)`
    margin-top: 5px
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px
`;


const Profile = ({account,setAccount}) => {
    const [open,setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const logout = () => {
        setAccount("");
    }

    return (
        <>
        <Box>
            <Typography style={{marginTop:2,cursor:"pointer"}} onClick={handleClick}>
                {account}
            </Typography>
        </Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {handleClose(); logout()}} style={{cursor:"pointer"}}>
            <PowerSettingsNew color="primary" fontSize="small"/>
            <Logout>Logout</Logout>
        </MenuItem>
      </Component>
        </>
    )
}

export default Profile