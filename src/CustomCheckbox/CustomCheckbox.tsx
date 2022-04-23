import { Checkbox, styled } from '@mui/material';

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.palette.error.dark,
  },
}));
