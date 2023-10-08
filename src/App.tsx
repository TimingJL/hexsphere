import styled, { ThemeProvider } from 'styled-components';

import Fab from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';

import Navigation from 'src/components/Navigation';
import Hero from 'src/pages/Hero'
import Works from 'src/pages/Works'
// import Service from 'src/pages/Service'
import Team from 'src/pages/Team'
// import ContactUs from 'src/pages/ContactUs'
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
  const muiTheme = useTheme();
  const handleClickLine = () => {
    window.open(LINE_OFFICIAL_LINK, "_blank");
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Navigation />
      <Hero />
      <Works />
      {/* <Service /> */}
      <Team />
      {/* <ContactUs /> */}
      <Footer />
      <FloatingButton>
        <Fab aria-label="line" onClick={handleClickLine}>
          <Icon alt="line" src={lineIconPath} />
        </Fab>
      </FloatingButton>
    </ThemeProvider>
  );
}

export default App
