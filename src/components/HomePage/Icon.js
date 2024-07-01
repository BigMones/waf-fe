import React from 'react';
import styled from 'styled-components';


const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
  max-width: 14rem;
`;

const LogoImage = styled.img`
  width: 9rem; /* Adatta la dimensione del logo */
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const IconImage = styled.img`
  width: 12rem;
  height: auto;
  margin-bottom: 0.5rem;
`;

// const IconTitle = styled.h2`
//   font-size: 1.2rem;
//   font-family: Arial, sans-serif;
//   font-weight: bold;
//   color: #000;
//   text-align: center;
//   margin-bottom: 0.5rem;
// `;

const IconDescription = styled.p`
  font-size: 0.9rem;
  font-family: Arial, sans-serif;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

const IconButton = styled.button`
  background-color: #4b00ff;
  color: white;
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  min-width: 200px;
`;

const Icon = ({ logoSrc, iconSrc, title, description, buttonText }) => (
  <IconWrapper>
    <LogoImage src={logoSrc} alt="Logo" />
    <IconImage src={iconSrc} alt={title} />
    <IconDescription>{description}</IconDescription>
    <IconButton>{buttonText}</IconButton>
  </IconWrapper>
);

export default Icon;
