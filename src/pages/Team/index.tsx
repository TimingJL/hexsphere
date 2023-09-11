import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import GradientText from 'src/components/GradientText';

const teamMembers = [
  {
    name: 'Norelle',
    title: 'Project Manager',
    avatarUrl: 'https://i.pravatar.cc/400?img=1',
    description: '專案經理 Norelle 擁有超過4年以上的豐富經驗。她在團隊協作、時間管理和溝通方面表現出色。Norelle 擅長網頁設計、用戶體驗設計、線上營銷和 SEO 搜索引擎優化。她的適應能力和組織能力確保了專案的成功。'
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
    description: "Taiming 是一位充滿熱情且擁有超過5年專業經驗的網頁開發人員。精通 RWD、HTML、CSS、JavaScript、React.js、Node.js、TypeScript 和 Python，Taiming 專攻網頁開發和 Chrome Extension 的創建。以一絲不苟的細節關注，Taiming 確保每個專案的系統穩定性。"
  },
  {
    name: 'Ariel',
    title: 'Sales & Marketing Manager',
    avatarUrl: 'https://i.pravatar.cc/400?img=9',
    description: "Ariel 是一位高度技巧的專業人士，擁有超過十年的銷售、行銷和數位專業知識經驗。她擅長社群媒體管理、影片剪輯、後製工作和線上行銷。Ariel 超過10年的豐富經驗使她成為在各種專案中實現卓越成果的寶貴資產。",
  },
];

const Description = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: Noto Sans TC;
  font-size: 20px;
`;

const Section = styled.section`
  background: #000;
  min-height: 100vh;
  padding: 52px 20px;
`;

const Team = () => {
  return (
    <Section>
      <Stack>
        <Stack alignItems="center">
          <GradientText
            text="專業團隊"
            style={{
              fontWeight: 900,
              fontSize: '48px'
            }}
          />
          <Description>Meet Our Team</Description>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={8}
          justifyContent="center"
          sx={{ marginTop: 12 }}
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
                gradientFrom='#FFF'
                gradientTo='#A2B9F5'
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