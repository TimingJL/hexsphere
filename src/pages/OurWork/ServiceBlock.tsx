import styled from 'styled-components';

import Stack from '@mui/material/Stack';

import GradientText from 'src/components/GradientText';

const Background = styled.div<{ src: string }>`
  background-color: #000;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 622px;
  border-radius: 16px;
  position: relative;
  padding: 24px;
  box-sizing: border-box;
`;

const GradientMask = styled.div`
  position: absolute;
  top: -5px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(181deg, #000C2D 0.94%, rgba(0, 12, 45, 0.00) 99.9%);
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-size: 16px;
  font-family: Noto Sans TC;
`;

interface IProps {
  title: string;
  description: string;
  src: string;
  style?: React.CSSProperties;
}

const ServiceBlock = (props: IProps) => {
  const { title, description, src, style } = props;
  return (
    <Background src={src} style={style}>
      <GradientMask />
      <Stack
        spacing={2}
        style={{
          position: 'relative'
        }}
      >
        <GradientText
          text={title}
          gradientFrom='#FFF'
          gradientTo='#A2B9F5'
          style={{
            position: 'relative',
            zIndex: 1,
            fontWeight: 500,
            fontSize: '24px',
          }}
        />
        <Description>{description}</Description>
      </Stack>
    </Background>
  );
};

export default ServiceBlock