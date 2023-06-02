import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from 'react-redux';
import { addEllipsis } from "../../utils/common-utils";

import ButtonGrp from './ButtonGrp';

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff
`;

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const RemoveBtn = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600
`;

 const CartItem = ({prop}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
     return (
        <Component>
            <LeftComponent>
                <img src={prop.url} alt="product" style={{ height: 110, width: 110}}/>
                <ButtonGrp/>
            </LeftComponent>
            <Box style={{ margin: '20px'}}>
                <Typography>{addEllipsis(prop.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span"><img src={fassured} alt="fassured" style={{ width: 50, marginLeft: 18}}/></Box>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: 18}}>₹{prop.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>{prop.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3c'}}>{prop.price.discount}</Box>
                </Typography>
                <RemoveBtn onClick={ () => removeItemFromCart(prop.id)}>Remove</RemoveBtn>
            </Box>
        </Component>
     )
}


export default CartItem;