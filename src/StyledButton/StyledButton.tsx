import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const StyledButton = styled(Button)`
  color: ${({ theme }) => {
    // console.log(theme);
    return theme.palette.grey[800];
  }};
`;
