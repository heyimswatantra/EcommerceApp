import styled from "@emotion/styled";
import {  Button, ButtonGroup } from "@mui/material"
import { useState } from "react";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50px;
`;
    
const ButtonGrp = () => {
    const [num, setnum] = useState(1);
    const increaseCnt = () => {
        setnum(num => num + 1)
    }
    const decreaseCnt = () => {
        if( num > 1) setnum(num => num - 1)
    }
    return (
        <Component>
            <StyledButton onClick={decreaseCnt}>-</StyledButton>
            <Button disabled>{num}</Button>
            <StyledButton onClick={increaseCnt}>+</StyledButton>
        </Component>
    )
}

export default ButtonGrp;