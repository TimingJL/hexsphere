import * as React from 'react';
import styled from 'styled-components';

import ButtonBase from '@mui/material/ButtonBase';

import { AnchorId } from 'src/constants';
import HexagonGridBgPath from 'src/assets/hexagon-grid-bg.svg';

const Section = styled.section`
  padding-top: 80px;
  padding: 20px;
  background: linear-gradient(115deg, #F0F6FE 8.03%, rgba(222, 229, 254, 0.50) 28.52%, #88BEEF 61.31%, #1B52E0 106.39%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HexagonGridBackground = styled.div`
  background: url(${HexagonGridBgPath});
  background-size: cover;
  background-position: center
  z-index: 1;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100%;
    background: linear-gradient(115deg, #f0f6fed1 8.03%, rgb(255 255 255 / 98%) 28.52%, #88beefeb 61.31%, #1b52e045 106.39%);
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-weight: 900;
    font-size: 90px;
    margin: 0;
    color: #16163F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title__first {
    letter-spacing: 4px;
    white-space: nowrap;
    ${props => props.theme.breakpoints.up("xs")} {
      font-size: 24px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
      font-size: 28px;
    }
  }
  .title__second {
    letter-spacing: 20px;
    white-space: nowrap;
    ${props => props.theme.breakpoints.up("xs")} {
      font-size: 48px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
      font-size: 56px;
    }
    ${props => props.theme.breakpoints.up("md")} {
      font-size: 60px;
      letter-spacing: 40px;
    }
  }
`;

const Description = styled.div`
  color: #FFF;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: Noto Sans TC;
  margin-top: 40px;
  margin-bottom: 52px;
  max-width: 600px;
  text-align: center;
  ${props => props.theme.breakpoints.up("xs")} {
    font-size: 20px;
    max-width: 400px;
  }
  ${props => props.theme.breakpoints.up("xs")} {
    font-size: 24px;
    max-width: 500px;
  }
`;

const GradientMask = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%);
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const CTAButton = styled(ButtonBase)`
  border-radius: 712px !important;
  border: 2px solid #D0DBFE !important;
  padding: 10px !important;
  width: 187px !important;
  background: linear-gradient(90deg, #5D9DFC 0%, #0053C2 75%);
  font-size: 24px;
  letter-spacing: 1.2px;
  text-align: center;
  cursor: pointer;
  color: #FFF !important;
`;

const Hero = () => {
  const anchorRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <Section id={AnchorId.HERO}>
      <HexagonGridBackground />
      <GradientMask />
      <TitleContainer>
        <div className="title">
          <div className="title__first">
            用好的設計，為你帶<span style={{ letterSpacing: 0 }}>來</span>
          </div>
          <div className="title__second">
            超凡行銷<span style={{ letterSpacing: 0 }}>力</span>
          </div>
        </div>
        <Description>高質感.響應式網站.企業形象網站設計.客製化網頁設計.活動網站.打造品牌優勢</Description>
        <CTAButton
          onClick={() => {
            if (anchorRef.current) {
              anchorRef.current.click();
            }
          }}
        >
          立即開始
        </CTAButton>
        <a href={`#${AnchorId.CONTACT}`} ref={anchorRef} style={{ display: 'none' }} />
      </TitleContainer>
    </Section>
  )
}

export default Hero;