import { experimentalStyled as styled } from '@mui/material/styles';
import { AppBar, Container, Card } from '@mui/material';

const AppbarHeight = 64;

export const AppbarStyled = styled(AppBar)({
  height: AppbarHeight
});

export const AppbarContainerStyled = styled(Container)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const BodyContainerStyled = styled(Container)({
  paddingTop: 24 + AppbarHeight
});

export const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  margin: theme.spacing(0, 'auto', 3)
}));
