import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';

import { AnchorId } from 'src/constants';
import GradientText from 'src/components/GradientText';
import { HEXSPHERE_EMAIL } from 'src/config';
import lineIconPath from 'src/assets/third-party/line.png'
import contactUsSrc from 'src/assets/contact/contact-us-bg.jpg'
import { LINE_OFFICIAL_LINK } from 'src/config';

const Section = styled.section`
  background: #FFF;
  background: linear-gradient(
    115deg,
    #dcc5ff 0.1%,
    rgb(56 209 255 / 66%) 28.52%,
    #0070d9a2 61.31%,
    #afffce 106.39%
  ), url(${contactUsSrc});
  background-size: cover;
  background-position: center;
  padding: 240px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 50vh;
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: Noto Sans TC;
  font-size: 24px;
`;

const MailInfo = styled.div`
  font-family: Noto Sans TC;
  font-size: 20px;
  a {
    color: white;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const AddFriendBtn = styled.button`
  border: none;
  cursor: pointer;
  color: #FFF;
  background: #39CD01;
  border-radius: 50px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const ContactUs = () => {

  const handleClickLine = () => {
    window.open(LINE_OFFICIAL_LINK, "_blank");
  };

  return (
    <Section id={AnchorId.CONTACT}>
      <Stack alignItems="center" spacing={2}>
        <GradientText
          text="聯絡我們"
          gradientFrom="#fff"
          gradientTo="#fff"
          style={{
            fontWeight: 900,
            fontSize: '48px'
          }}
        />
        <Description>我們很樂意為您服務</Description>
      </Stack>
      <Stack alignItems="center" spacing={6} sx={{ marginTop: 6, color: '#FFF' }}>
        <MailInfo>
          <span style={{ marginRight: '8px' }}>Mail:</span>
          <a href={`mailto:${HEXSPHERE_EMAIL}`}>
            hexsphereinfo@gmail.com
          </a>
        </MailInfo>
        <AddFriendBtn onClick={handleClickLine}>
          <Icon src={lineIconPath} />
          加入 LINE 好友
        </AddFriendBtn>
      </Stack>
    </Section>
  );
};

export default ContactUs;