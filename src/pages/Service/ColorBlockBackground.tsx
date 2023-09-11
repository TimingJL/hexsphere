import * as React from 'react';
import styled from 'styled-components';

import { AnchorId } from 'src/constants';

import {
  ColorBlock01,
  ColorBlock03
} from 'src/components/ColorBlock';

const Container = styled.div`
  min-height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const ColorBlockBackground = () => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const element = (document.getElementById(AnchorId.SERVICE) as HTMLDivElement);
    if (element) {
      setHeight(element.clientHeight);
    }
  }, [])
  return (
    <Container>
      <div style={{ position: 'relative', left: 0, top: 0, width: '100vw', height: height }}>
        <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <ColorBlock01 />
        </div>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <ColorBlock03 />
        </div>
      </div>
    </Container>
  );
};

export default ColorBlockBackground;
