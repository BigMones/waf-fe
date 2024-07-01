import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Su di Noi</p>
    <p>Contatti: info@wearefootball.com</p>
    <p>Social Media: Facebook, Twitter, Instagram</p>
  </FooterWrapper>
);

export default Footer;
