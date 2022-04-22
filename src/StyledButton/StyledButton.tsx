import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => {
    // console.log(theme);
    return theme.palette.grey[50];
  }};
`;
