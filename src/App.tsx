import styled from 'styled-components';

import Fab from '@mui/material/Fab';

import Navigation from 'src/components/Navigation';
import Hero from 'src/pages/Hero'
import Service from 'src/pages/Service'
import Team from 'src/pages/Team'
import ContactUs from 'src/pages/ContactUs'
import Footer from 'src/pages/Footer'
import lineIconPath from 'src/assets/third-party/line.png'
import { LINE_OFFICIAL_LINK } from 'src/config';


const FloatingButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

function App() {

  const handleClickLine = () => {
    window.open(LINE_OFFICIAL_LINK, "_blank");
  };

  return (
    <>
      <Navigation />
      <Hero />
      <Service />
      <Team />
      <ContactUs />
      <Footer />
      <FloatingButton>
        <Fab aria-label="line" onClick={handleClickLine}>
          <Icon alt="line" src={lineIconPath} />
        </Fab>
      </FloatingButton>
    </>
  );
}

export default App
