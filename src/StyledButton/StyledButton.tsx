import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => {
    // console.log(theme);
    return theme.palette.grey[800];
  }};
`;
