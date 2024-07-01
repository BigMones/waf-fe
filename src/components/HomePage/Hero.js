import React from 'react';
import styled from 'styled-components';
import heroImg from '../../assets/img/hero.jpeg';
import logoImg from '../../assets/img/logowaf.png'; // Assicurati di aggiornare il percorso del logo

const HeroWrapper = styled.section`
  text-align: center;
  padding-bottom: 4rem;
`;

const LogoImage = styled.img`
  width: 20rem;  // Dimensioni del logo
  height: auto;
  margin: 0rem;

`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;  // Aumenta la dimensione del titolo
  margin: 0rem;
  font-family: 'Arial', sans-serif; // Specifica il font
  font-weight: bold; // Grassetto
  text-transform: uppercase; // Maiuscolo
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif; // Specifica il font
  margin-bottom: 4rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 300px;
  border-radius: 10px;
`;

const Hero = () => (
  <HeroWrapper>
    <LogoImage src={logoImg} alt="Logo" />
    <HeroTitle>LA VOCE DEI TIFOSI</HeroTitle>
    <HeroSubtitle>diventa parte attiva della storia e del futuro del Club</HeroSubtitle>
    <HeroImage src={heroImg} alt="Hero" />
  </HeroWrapper>
);

export default Hero;
