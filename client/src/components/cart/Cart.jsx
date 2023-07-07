
import { Grid, Typography, Box, styled, Button } from "@mui/material";
import { useSelector } from 'react-redux';

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCard from "./EmptyCard";

import { post } from '../../utils/paytm';
import { payUsingPaytm } from '../../service/api';

const Container = styled(Grid)(({theme}) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff
`;

const ButtonWrapper = styled(Box)`
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
    width: 251px;
    height: 51px;
    border-radius: 3px;
`;

const LeftComponent = styled(Grid)(({theme}) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));


const Cart = () => {
    
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    return (
        <>
             {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length}) </Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem prop= {item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton onClick={ () => buyNow()}> Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}  />
                        </Grid>
                    </Container>   
                    : <EmptyCard/>
            }         
        </>
    )
}

export default Cart;
