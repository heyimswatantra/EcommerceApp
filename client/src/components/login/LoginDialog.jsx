import { useState } from 'react';

import {Dialog, Box, TextField, Button, Typography, styled} from '@mui/material';

const Component = styled(Box)`
height: 70vh;
width: 90vh;
`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height: 83%;
width: 28%;
padding: 45px 35px;
& > p , & > h5 {
    color: #FFFFFF;
    font-weight: 550;
}
`;

const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
padding: 25px 35px;
flex: 1;
& > div, & > button, & > p {
    margin-top: 20px;
}`;

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`;

const RequestOTP = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
font-size: 12px;
color: #87878;
`;

const CreateAccount = styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`;

const accountInitailValues = { 
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    }, 
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subheading: 'Signup with your mobile to get started',
    }
}

const LoginDailog = ({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountInitailValues.login);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitailValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitailValues.signup);
    }

    return (
        <Dialog open= {open} onClose={handleClose} PaperProps={{sx: { maxWidth:'unset'}}}>
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ? 
                            <Wrapper>
                            <TextField variant='standard' label='Enter Email/Phone Number' />
                            <TextField variant='standard' label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center'}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={ () => toggleSignup()}> New to Flipkart? Create and account</CreateAccount>
                            </Wrapper>
                        : 
                            <Wrapper>
                            <TextField variant='standard' label='Enter First Name' />
                            <TextField variant='standard' label='Enter Last Name' />
                            <TextField variant='standard' label='Enter Username' />
                            <TextField variant='standard' label='Enter Email' />
                            <TextField variant='standard' label='Enter Password' />
                            <TextField variant='standard' label='Enter Phone' />
                            <LoginButton>Contunue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}


export default LoginDailog;