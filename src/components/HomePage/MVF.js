import React from 'react';
import styled from 'styled-components';

const MVFWrapper = styled.section`
  padding: 2rem;
`;

const MVFHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MVFTitle = styled.h2`
  font-size: 2rem;
`;

const MVFBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const MVFTextWrapper = styled.div`
  max-width: 50%;
  text-align: left;
  padding-right: 2rem; /* Aggiunge padding a destra per bilanciare */
`;

const MVFSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MVFText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  max-width: 50rem;
`;

const MVFGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 40rem;
  padding-left: 2rem; /* Aggiunge padding a sinistra per bilanciare */
`;

const MVFTop = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const MVFTopTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  padding-right: 0rem;
`;

const MVFGridItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-right: 0rem;
`;

const MVFItemWrapper = styled.div`
  text-align: center;
`;

const MVFItemTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MVFItemIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const MVFItem = ({ position, name, icon }) => (
  <MVFItemWrapper>
    <MVFItemTitle>{position}</MVFItemTitle>
    <MVFItemIcon>{icon}</MVFItemIcon>
    <p>{name}</p>
  </MVFItemWrapper>
);

const MVF = () => (
  <MVFWrapper>
    <MVFHeader>
      <MVFTitle>Tifoso del mese - MVF (Most Valuable Fan)</MVFTitle>
    </MVFHeader>
    <MVFBody>
      <MVFTextWrapper>
        <MVFSubtitle>È tempo di premi!</MVFSubtitle>
        <MVFText>
          Ogni mese verranno premiati i 3 tifosi più fedeli, ovvero i 3 fans che
          avranno nel loro account WAF più punti fedeltà. Come raccogli punti?
          Semplice, usando WAF! Partecipa alle votazioni, vivi le fantastiche
          esperienze disponibili, acquista le limited edition e prova a vincere i
          premi messi in palio dalla tua squadra del cuore!
        </MVFText>
      </MVFTextWrapper>
      <MVFGrid>
        <MVFTop>
          <MVFTopTitle>2024</MVFTopTitle>
          <MVFTopTitle>SETTEMBRE</MVFTopTitle>
        </MVFTop>
        <MVFGridItems>
          <MVFItem position="1° POSTO" name="Laura Rossi" icon="🥇" />
          <MVFItem position="2° POSTO" name="Paolo Esposito" icon="🥈" />
          <MVFItem position="3° POSTO" name="Davide Costa" icon="🥉" />
        </MVFGridItems>
      </MVFGrid>
    </MVFBody>
  </MVFWrapper>
);

export default MVF;