import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';

import HeroBg from 'src/assets/hero-bg.jpg';

const Section = styled.section`
  padding-top: 80px;
  padding: 20px;
  background-image:
    linear-gradient(108deg, rgba(5, 1, 44, 0.50) 3.46%, rgba(54, 84, 183, 0.50) 34.86%, rgba(5, 1, 44, 0.50) 90.84%),
    url(${HeroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;

  h1 {
    font-size: 48px;
    letter-spacing: 1px;
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: Noto Sans TC;
  font-size: 20px;
`;

const GradientMask = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 1) 100%);
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const CTAButton = styled(ButtonBase)`
  margin-top: 40px !important;
  margin-bottom: 52px !important;
  border-radius: 712px !important;
  border: 2px solid #D0DBFE !important;
  padding: 10px !important;
  width: 187px !important;
  background: var(--2, linear-gradient(270deg, #3A40D0 0%, #0084BC 100%));
  font-size: 24px;
  letter-spacing: 1.2px;
  text-align: center;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <Section>
      <GradientMask />
      <Stack alignItems="center" spacing={1} sx={{ marginTop: '240px', zIndex: 10, position: 'relative' }}>
        <h1>網頁設計魔法</h1>
        <Description>專業設計師團隊，打造你的線上獨特風采</Description>
        <CTAButton>立即開始</CTAButton>
      </Stack>
    </Section>
  )
}

export default Hero;