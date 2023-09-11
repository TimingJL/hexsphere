import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const options = {
  root: null,
  rootMargin: '50px',
  threshold: 0.5
}

const Container = styled.div`
  position: fixed;
  font-family: Noto Sans TC;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const Box = styled.div`
  color: #FFF;
  padding: 16px 24px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
`;

const Logo = styled.div`
  font-family: 'Roboto Serif', serif;
  font-size: 24px;
  font-weight: 700;
`;

const Navigation = () => {
  const anchorRef = React.useRef(null);
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));
  const [isOnTop, setIsOpTop] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callbackFunction = (entires: any) => {
    setIsOpTop(entires[0].isIntersecting);
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (anchorRef.current) {
      observer.observe(anchorRef.current);
    }
  }, []);

  return (
    <>
      <div ref={anchorRef} style={{ position: 'absolute' }} />
      <Container>
        <Box
          style={{
            background: isOnTop ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
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
    </>
  )
}

export default Navigation;