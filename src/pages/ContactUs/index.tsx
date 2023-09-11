import * as React from 'react';
import styled, { css } from 'styled-components';

import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';

import GradientText from 'src/components/GradientText';

const Section = styled.section`
  background: #000;
  background-image:
    linear-gradient(108deg, rgba(5, 1, 44, 0.50) 3.46%, rgba(54, 84, 183, 0.50) 34.86%, rgba(5, 1, 44, 0.50) 90.84%);
  min-height: 100vh;
  padding: 80px 20px 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: Noto Sans TC;
  font-size: 20px;
`;

const Paper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 640px;
  border-radius: 12px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const textFieldStyle = css`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  padding: 20px;
  outline-color: rgba(54, 84, 183, 0.50);
  color: #FFF;
  font-size: 18px;
`;

const Input = styled.input`
  ${textFieldStyle}
`;

const TextArea = styled.textarea`
  ${textFieldStyle}
  resize: none;
  height: 200px;
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
  &:disabled {
    background: #EEEEEE66;
    border: none !important;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;

const GradientMask = styled.div`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 1) 100%);
  height: 300px;
  max-width: 100vw;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ContactUs = () => {
  const mailRef = React.useRef<HTMLAnchorElement>(null);
  const [name, setName] = React.useState('');
  const [content, setContent] = React.useState('');
  return (
    <Section>
      <GradientMask className="gradient-mask" />
      <Stack alignItems="center" spacing={2}>
        <GradientText
          text="聯絡我們"
          style={{
            fontWeight: 900,
            fontSize: '48px'
          }}
        />
        <Description>我們很樂意為您服務</Description>
      </Stack>
      <Stack alignItems="center" spacing={2} sx={{ marginTop: 6 }}>
        <Paper>
          <Input type="text" placeholder="姓名/公司" value={name} onChange={(event) => setName(event.target.value)} />
          <TextArea placeholder="內容" value={content} onChange={(event) => setContent(event.target.value)} />
        </Paper>
        <CTAButton
          disabled={name.trim() === '' || content.trim() === ''}
          onClick={() => {
            mailRef.current?.click();
          }}
        >
          送出
        </CTAButton>
        <a
          ref={mailRef}
          style={{ display: 'none' }}
          href={`mailto:service@team.com?body=${content}&subject=${name}的來信`}
        />
      </Stack>
    </Section>
  )
}

export default ContactUs;