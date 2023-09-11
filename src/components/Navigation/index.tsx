import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const Box = styled.div`
  color: #FFF;
  padding: 24px;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-family: 'Roboto Serif', serif;
  font-size: 24px;
  font-weight: 700;
`;

const Navigation = () => {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Container
      {...!isUpSM && {
        style: {
          padding: '24px'
        }
      }}
    >
      <Box
        style={{
          width: isUpSM ? '100%' : 'calc(100% - 48px)',
          background: isUpSM ? 'transparent' : '#000',
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Logo>Logo</Logo>
          <Stack direction="row" spacing={isUpSM ? 2 : 1}>
            {
              isUpSM ? (
                <>
                  <div>Home</div>
                  <div>Our Work</div>
                  <div>Team</div>
                  <div>Contact</div>
                </>
              ) : (
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <MenuIcon style={{ color: '#fff' }} />
                </IconButton>
              )
            }
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default Navigation;