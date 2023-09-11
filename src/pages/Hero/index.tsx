import styled from 'styled-components';
import Stack from '@mui/material/Stack';

import HeroBg from 'src/assets/hero-bg.jpg';

const Section = styled.section`
  background-image:
    linear-gradient(108deg, rgba(5, 1, 44, 0.50) 3.46%, rgba(54, 84, 183, 0.50) 34.86%, rgba(5, 1, 44, 0.50) 90.84%),
    url(${HeroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  padding-top: 80px;
  padding: 20px;
  position: relative;

  h1 {
    font-size: 48px;
    letter-spacing: 1px;
  }
`;

const GradientMask = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 1) 100%);
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Hero = () => {
  return (
    <Section>
      <GradientMask />
      <Stack alignItems="center" sx={{ marginTop: '240px', zIndex: 10, position: 'relative' }}>
        <h1>網頁設計魔法</h1>
        <p>專業設計師團隊，打造你的線上獨特風采</p>
        <button>立即開始</button>
      </Stack>
    </Section>
  )
}

export default Hero;