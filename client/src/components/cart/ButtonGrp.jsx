import styled from "@emotion/styled";
import {  Button, ButtonGroup } from "@mui/material"

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50px;
`;
    
const ButtonGrp = () => {
    return (
        <Component>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </Component>
    )
}

export default ButtonGrp;