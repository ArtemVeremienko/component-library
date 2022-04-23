import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => {
    return theme.palette.grey[600];
  }};
`;
