import { useState,useContext } from "react";
import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material"
import {authenticateSignup,authenticateLogIn} from "../../service/Api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
height: 70vh;
width: 90vh`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 28%;
height: 82%;
padding: 45px 35px;
& > p , & > h5{
    color: #fff;
    font: weight: 600;
}
`;

const Error = styled(Typography)`
font-size: 14px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600
`;
const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
padding: 25px 35px;
flex: 1 ;
& > div, & > button, & > p{
    margin-top: 20px
}
`;

const LoginButton = styled(Button)`
text-transform: none;
background: #fb641b;
color: #fff;
height: 48px;
border-radius: 2px;
`;

const RequestOTPButton = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%)
`;
const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`;

const CreateAccount= styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`;

const accountIntialValue = {
    login:{
        view: 'login',
        heading: "Login",
        subHeading: 'Get access to your Orders, Wishlist and Recommendations.',
    },

    signUp:{
        view: "signup",
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started',
    }
}


const signUpIntialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone:"",

}

const loginIntialValues={
    userName:"",
    password:""
}
const LoginDialog = ({open, setOpen}) => {

    const [account, toggleAccount]  = useState(accountIntialValue.login);
    const [signUp,SetSignUp] = useState(signUpIntialValues);
    const [login, setLogin] = useState(loginIntialValues);
    const [error,setError] = useState(false)


    const {setAccount} = useContext(DataContext);
    
    
    const HandleClose = () => {
        setOpen(false);
        toggleAccount(accountIntialValue.login);
        setError(false);
    }
    const onHandSignUp = () => {
        toggleAccount(accountIntialValue.signUp)
    }

    const onHandleChange = (e) => {
        SetSignUp({...signUp, [e.target.name]: e.target.value})
        console.log(signUp)
    }

    const signupUser = async () => {
       let response =  await authenticateSignup(signUp);
       if(!response) return;
       HandleClose()
       setAccount(signUp.firstName);
       
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
     }

    const loginUser = async () => {
        let response =  await authenticateLogIn(login);
        if(response.status === 200){
            HandleClose();
            setAccount(response.data.data.firstName)
        }
        else{
            setError(true)
        }
        
        
     }

    return (
        <Dialog open={open} onClose={HandleClose}PaperProps={{sx: {maxWidth: 'unset'}}} >
            <Component>
                <Box style={{display:"flex", height:"100%"}}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Image>
                   { (account.view === "login") ? <Wrapper>
                        <TextField variant="standard" label="Enter UserName" name="userName" onChange={(e) => onValueChange(e)}/>
                       {error && <Error>Please enter valid username or password</Error>}
                        <TextField variant="standard" label="Enter Password" name="password"  onChange={(e) => onValueChange(e)}/>
                        <Text>By continuing, you agree to flipkart's Terms of use and Privacy Policy.</Text>
                        <LoginButton onClick={()=> loginUser()} >Login</LoginButton>
                        <Typography style={{textAlign:"center"}} >Or</Typography>
                        <RequestOTPButton>Request OTP</RequestOTPButton>
                        <CreateAccount onClick={() => onHandSignUp()}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard" name="firstName" label="Enter Firstname" onChange={(e) => onHandleChange(e)} />
                        <TextField variant="standard" name="lastName" label="Enter Lastname" onChange={(e) => onHandleChange(e)} />
                        <TextField variant="standard" name="userName" label="Enter Username" onChange={(e) => onHandleChange(e)} />
                        <TextField variant="standard" name="email" label="Enter Email" onChange={(e) => onHandleChange(e)} />
                        <TextField variant="standard" name="password" label="Enter Password" onChange={(e) => onHandleChange(e)} />
                        <TextField variant="standard"name="phone" label="Enter Phone" onChange={(e) => onHandleChange(e)} />
                        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                       
                    </Wrapper>}
                </Box>
            </Component>
        </Dialog>
    )
}


export default LoginDialog 