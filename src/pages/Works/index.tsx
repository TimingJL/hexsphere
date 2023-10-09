import * as React from 'react';
import styled from 'styled-components';

import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { AnchorId } from 'src/constants';
import GradientText from 'src/components/GradientText';

// Website
import teachesPlatformSrc from 'src/assets/works/teaches-platform.jpg';
import nccuCourseSrc from 'src/assets/works/nccu-course.png';
import beyondMilkSrc from 'src/assets/works/beyond-milk.png';
import fuFoundationSrc from 'src/assets/works/fu-foundation.png';
import spotlightSrc from 'src/assets/works/spotlight.png';

// Social Media
import socialMediaSrc from 'src/assets/works/social-media.jpg';
import linkedinSrc from 'src/assets/works/linkedin.png';
import instagramSrc from 'src/assets/works/instagram.png';

// UX/UI
import taxFillingSystemSrc from 'src/assets/works/tax-filling-system.jpg';
import appSrc from 'src/assets/works/app.jpg';

const websiteData = [
  {
    img: teachesPlatformSrc,
    title: '線上課程網站',
    rows: 2,
    cols: 2,
  },
  {
    img: nccuCourseSrc,
    title: '政課爽-政大選課查詢系統',
  },
  {
    img: fuFoundationSrc,
    title: '傅偉勳基金會官方網站',
  },
  {
    img: beyondMilkSrc,
    title: '二吉軒豆乳-既有網站優化',
  },
  {
    img: spotlightSrc,
    title: '科技觀光應用概念網站'
  }
];

const socialMediaData = [
  {
    img: instagramSrc,
    title: 'Instagram 小編',
    cols: 2,
    rows: 1,
  },
  {
    img: linkedinSrc,
    title: 'Linkedin 企業形象經營',
    rows: 2,
    cols: 2,
  },
  {
    img: socialMediaSrc,
    title: '社群媒體經營',
    cols: 2,
    rows: 1,
  },
];

const uxUiData = [
  {
    img: taxFillingSystemSrc,
    title: '政府合作專案',
    rows: 2,
    cols: 2,
  },
  {
    img: appSrc,
    title: '手機應用程式優化',
    rows: 2,
    cols: 2,
  }
];

const Section = styled.section`
  padding: 92px 20px;
  min-height: 100vh;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 40px;
  ${props => props.theme.breakpoints.up("xs")} {
    font-size: 48px;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 56px;
  }
`;

const CategoryTitle = styled.div`
  font-size: 20px;
`;

const CategoryContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Works = () => {
  return (
    <Section id={AnchorId.WORKS}>
      <Title>
        <GradientText
          text='作品集'
          style={{
            position: 'relative',
            zIndex: 1,
            fontSize: '58px',
          }}
        />
      </Title>
      <Stack spacing={10} alignItems="center">
        <CategoryContainer>
          <CategoryTitle>網站設計&開發</CategoryTitle>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {websiteData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>社群媒體經營</CategoryTitle>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {socialMediaData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>使用者體驗</CategoryTitle>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {uxUiData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CategoryContainer>
      </Stack>
    </Section>
  );
};

export default Works;
