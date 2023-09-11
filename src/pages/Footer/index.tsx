import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  color: rgba(255, 255, 255, 0.80);
  font-family: Noto Sans TC;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>© 2023 All Rights Reserved.</div>
    </FooterStyle>
  );
};

export default Footer;
