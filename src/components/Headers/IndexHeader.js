import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url(${require("../../assets/img/Stadium.JPG")}) no-repeat center right; /* Modificato da center a left */
  background-size: 100%; /* Riduce lo zoom dell'immagine */
  background-position: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

 
`;

const ContentWrapper = styled.div`
  background: black;
  padding: 2rem;
  border-radius: 150px 90px 0 0;
  border: 3px solid white;
  transform: rotate(25deg);
  width: 70vw;
  max-width: 800px;
  height: 110vh;
  position: absolute;
  top: 70%;
  left: -20%;
  transform: translateY(-50%) rotate(25deg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  zoom: 140%;

  @media (max-width: 1024px) {
    zoom: 120%;
  }

  @media (max-width: 768px) {
    zoom: 100%;
    border-radius: 0 75px 0 0;
    padding: 1rem;
    transform: rotate(0deg) translateY(-50%);
    width: 100vw;
    height: auto;
    left: 0;
    top: 50%;
  }

  @media (max-width: 480px) {
    zoom: 80%;
    left: 0;
  }

  @media (max-width: 320px) {
    zoom: 60%;
    left: 0;
  }
`;

const InnerContent = styled.div`
  transform: rotate(-25deg) translateX(200px) translateY(-130px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    transform: rotate(0deg);
    align-items: center;
    text-align: center;
    translateX(0px); /* Modifica per allineare al centro */
  }
`;

const SmallLogo = styled.img`
  width: 40px;
  margin-bottom: 3rem;
  margin-top: -1.5rem;

  @media (max-width: 768px) {
    width: 30px;
    margin-top: 0;
  }
`;

const WelcomeRow = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

const WelcomeText = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-right: 0;
  }
`;

const MiddleText = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BigLogo = styled.img`
  width: 35rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Synopsis = styled.div`
  max-width: 30rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SynopsisText = styled.h3`
  font-size: 1.2rem;
  color: white;
  text-align: justify;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  min-width: 200px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: white;
  border: 2px solid blue;
  text-decoration: none;
  margin-top: 2rem;

  &:hover {
    background-color: blue;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

function IndexHeader() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <InnerContent>
          <SmallLogo src={require("../../assets/img/WAFsmallLogo.png")} alt="Small Logo" />
          <WelcomeRow>
            <WelcomeText>Benvenuto</WelcomeText>
            <MiddleText>in</MiddleText>
          </WelcomeRow>
          <BigLogo src={require("../../assets/img/waflogo_white.png")} alt="Big Logo" />
          <Synopsis>
            <SynopsisText>
              Supporta la tua squadra del cuore e diventa parte attiva della sua
              storia e del suo futuro! <br />
              Con WAF vincerai esperienze uniche ed avrai
              un impatto diretto sulle decisioni del Club.
            </SynopsisText>
          </Synopsis>
          <StyledButton to="/login-page">Login</StyledButton>
        </InnerContent>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default IndexHeader;