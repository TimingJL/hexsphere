import styled from 'styled-components';

const Gradient = styled.div<{
  $gradientFrom: string;
  $gradientTo: string;
}>`
  background: linear-gradient(180deg, ${props => props.$gradientFrom} 17.39%, ${props => props.$gradientTo} 91.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Noto Serif TC', 'Roboto Serif', serif;
`;

interface IProps {
  text: string;
  style?: React.CSSProperties;
  gradientFrom?: string;
  gradientTo?: string;
}

const GradientText = (props: IProps) => {
  const {
    text,
    style,
    gradientFrom = '#23AAE3',
    gradientTo = '#0044AB',
  } = props;
  return (
    <Gradient
      style={style}
      $gradientFrom={gradientFrom}
      $gradientTo={gradientTo}
    >
      {text}
    </Gradient>
  )
}

export default GradientText;
