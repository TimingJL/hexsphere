import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import GradientText from 'src/components/GradientText';
import pmImg from 'src/assets/service/project-management.jpg';
import rwdImg from 'src/assets/service/rwd.jpg';
import seoImg from 'src/assets/service/seo.jpg';
import socialMediaImg from 'src/assets/service/social-media.jpg';

import ServiceBlock from './ServiceBlock';

const Section = styled.section`
  padding: 52px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceGridBlocks = styled.div`
  display: grid;
  gap: 20px;
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: Noto Sans TC;
  font-size: 20px;
`;

const OurWork = () => {
  const theme = useTheme();
  const isUpLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isUpMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Section>
      <Stack
        direction={isUpLG ? "row" : "column"}
        spacing={8}
        sx={{ width: "100%", maxWidth: "1920px" }}
        justifyContent="space-between"
      >
        <Stack spacing={2}>
          <GradientText
            text="服務項目"
            style={{
              fontWeight: 900,
              fontSize: '48px'
            }}
          />
          <Description>規劃、設計、實作、後續維護到行銷推廣，一次到位</Description>
        </Stack>
        <ServiceGridBlocks
          style={{
            width: '100%',
            maxWidth: '1200px',
            gridTemplateColumns: isUpMD ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'
          }}
        >
          <ServiceBlock
            title="專案顧問"
            description="資深專案經理為您提供專業的網站顧問諮詢服務"
            src={pmImg}
            style={{ height: isUpMD ? '622px' : '480px' }}
          />
          <ServiceBlock
            title="網頁設計"
            description="確保您的網站在各種裝置和平台上都能完美呈現"
            src={rwdImg}
            style={{ height: isUpMD ? '622px' : '480px' }}
          />
          <ServiceBlock
            title="SEO 優化"
            description="採用 Google 友善的網頁架構，以提高您的網站在搜索引擎中的可見性"
            src={seoImg}
            style={{ height: isUpMD ? '622px' : '480px' }}
          />
          <ServiceBlock
            title="社群行銷"
            description="提供社交媒體平台上的行銷策略，增加您的品牌知名度和線上影響力。"
            src={socialMediaImg}
            style={{ height: isUpMD ? '622px' : '480px' }}
          />
        </ServiceGridBlocks>
      </Stack>
    </Section>
  )
}

export default OurWork;