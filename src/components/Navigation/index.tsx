import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AnchorId } from 'src/constants';
import hexsphereLogoSrc from 'src/assets/logo/hexsphere-logo.svg'

import FullScreenDialog from './FullScreenDialog'

const options = {
  root: null,
  rootMargin: '50px',
  threshold: 0.5
}

const menuItems = [
  {
    text: '首頁',
    href: `#${AnchorId.HERO}`
  },
  // {
  //   text: '服務項目',
  //   href: `#${AnchorId.SERVICE}`
  // },
  {
    text: '作品集',
    href: `#${AnchorId.WORKS}`
  },
  {
    text: '團隊介紹',
    href: `#${AnchorId.TEAM}`
  },
  {
    text: '聯絡我們',
    href: `#${AnchorId.CONTACT}`
  },
];

const Container = styled.nav`
  position: fixed;
  font-family: Noto Sans TC;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const Box = styled.div`
  color: #0145AB;
  padding: 16px 24px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
`;

const Logo = styled.div`
  font-family: 'Saira', sans-serif;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const A = styled.a`
  color: #0145AB;
  text-decoration: none;
  &:hover {
    color: #0145AB;
    opacity: 0.9;
  }
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
            boxShadow: isOnTop ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.1)',
            background: isOnTop ? 'transparent' : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: isOnTop ? 'none' : 'blur(10px)',
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Logo>
              <img src={hexsphereLogoSrc} alt="hexsphere-logo" width={40} style={{ aspectRatio: 1 }} />
              HEXSPHERE
            </Logo>
            <Stack direction="row" spacing={isUpSM ? 2 : 1}>
              {
                isUpSM ? (
                  <>
                    {menuItems.map((item) => (
                      <A key={item.href} href={item.href}>{item.text}</A>
                    ))}
                  </>
                ) : (
                  <FullScreenDialog menuItems={menuItems} />
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