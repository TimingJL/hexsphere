import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import GradientText from 'src/components/GradientText';
import { AnchorId } from 'src/constants';
import hexsphereLogo from 'src/assets/logo/hexsphere-logo.svg'

import ColorBlockBackground from './ColorBlockBackground';

const teamMembers = [
  {
    name: 'Norelle',
    title: 'Project Manager',
    avatarUrl: 'https://i.pravatar.cc/400?img=1',
    description: 'Norelle 在資訊產業界擁有豐富經驗，執行過政府、學校及私人企業之網站規劃與系統架構設計專案，擅長專案管理，注重時程、風險控管與使用者體驗，時刻掌握並理解客戶需求，與內外部建立良好溝通橋樑，以達雙方共贏。'
  },
  {
    name: 'Andy',
    title: 'Frontend Developer',
    avatarUrl: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    description: "Andy 是一位充滿企圖心和幹勁的前端工程師，具有優秀的 HTML、CSS、JavaScript 和 React.js 技能。作為一名專注的網頁開發人員，他不斷追求卓越的工作表現。擁有打造卓越用戶體驗的熱情，Andy 將創意和技術專業帶入每個專案中。"
  },
  {
    name: 'Taiming',
    title: 'Full-stack Developer',
    avatarUrl: 'https://i.pravatar.cc/400?img=13',
    description: "Taiming 是一位充滿熱情且擁有超過5年專業經驗的網頁開發人員。精通 RWD、HTML、CSS、JavaScript、React.js、Node.js、TypeScript 和 Python。Taiming 專攻網頁開發和 Chrome Extension 的創建。以一絲不苟的態度專注於網頁呈現細節，並確保每個專案的穩定性。"
  },
  {
    name: 'Ariel',
    title: 'Sales & Marketing Manager',
    avatarUrl: 'https://i.pravatar.cc/400?img=9',
    description: "Ariel 從事國外業務經驗超過十年、產業經驗包含手工具產業、自行車產業、LED燈具產業、IC軟體產業；擅長新客戶開發，國內外客戶關係維繫、合約審核、產品開發案執行控管；同時具備實際數位行銷經驗，擅長社群媒體管理、影片剪輯、後製工作和線上行銷。以專業及具彈性溝通達到客戶滿意及需求。",
  },
];

const HexSphereName = styled.div`
  font-family: 'Saira', sans-serif;
  color: #0145AB;
  font-size: 52px;
  z-index: 1;
`;

const Description = styled.div`
  color: #292929;
  font-family: Noto Sans TC;
  font-size: 20px;
  max-width: 600px;
  text-align: center;
  z-index: 1;
`;

const Section = styled.section`
  background: #FFF;
  min-height: 100vh;
  padding: 92px 20px;
  position: relative;
  overflow: hidden;
`;

const Team = () => {
  return (
    <Section id={AnchorId.TEAM}>
      <ColorBlockBackground />
      <Stack spacing={8}>
        <Stack alignItems="center" spacing={2}>
          <img src={hexsphereLogo} width={180} style={{ aspectRatio: 1 }} />
          <HexSphereName>HEXSPHERE</HexSphereName>
          <Description>
            HexSphere 由 Hexagonal 與 Sphere 組成。萬物起源之水，利用它的分子結構，創造出多樣的水型態，其中六方水晶系完美的對稱軸與角度，搭配球體的圓弧度所創造出的獨特空間，展現出團隊高度專業性、溝通彈性與協調力。
          </Description>
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <GradientText
            text="團隊介紹"
            style={{
              fontWeight: 900,
              fontSize: '48px'
            }}
          />
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={8}
          justifyContent="center"
          sx={{ marginTop: 12, zIndex: 1 }}
          useFlexGap
        >
          {teamMembers.map((member) => (
            <Stack
              key={member.name}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Avatar
                alt={member.name}
                src={member.avatarUrl}
                sx={{ width: 200, height: 200 }}
              />
              <GradientText
                text={member.name}
                gradientFrom='#16163F'
                gradientTo='#16163F'
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: 500,
                  fontSize: '24px',
                }}
              />
              <Description>{member.title}</Description>
              <Description style={{ width: '250px', fontSize: '12px', textAlign: 'justify' }}>{member.description}</Description>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Section>
  )
}

export default Team;