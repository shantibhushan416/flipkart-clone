import { ButtonGroup, Button,styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

export default function GroupedButton() {
    return(
        <Component>
            <StyledButton>-</StyledButton>
            <StyledButton>1</StyledButton>
            <StyledButton>+</StyledButton>
        </Component>
    )
};