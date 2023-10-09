import * as React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled.div`
  height: 100vh;
  padding: 16px 24px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(270deg, #3A40D0 0%, #0084BC 100%);
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  padding: 8px;
`;

interface IProps {
  menuItems: {
    text: string;
    href: string;
  }[]
}

const FullScreenDialog = (props: IProps) => {
  const { menuItems } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton sx={{ p: '10px', opacity: open ? 0 : 1 }} aria-label="menu" onClick={handleClickOpen}>
        <MenuIcon style={{ color: '#0145AB' }} />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          '& .MuiDialog-paper': {
            background: 'transparent',
          },
          '& .MuiPaper-root': {
            overflow: 'hidden'
          }
        }}
      >
        <Container>
          <Background />
          <Stack direction="row" justifyContent="flex-end">
            <IconButton aria-label="menu" onClick={handleClose}>
              <CloseOutlinedIcon style={{ color: '#fff' }} />
            </IconButton>
          </Stack>
          <Stack direction="column" alignItems="center" sx={{ height: '100%', marginTop: 16, position: 'relative' }}>
            {menuItems.map((item) => (
              <A key={item.href} href={item.href} onClick={() => handleClose()}>
                {item.text}
              </A>
            ))}
          </Stack>
        </Container>
      </Dialog>
    </>
  );
};

export default FullScreenDialog;
