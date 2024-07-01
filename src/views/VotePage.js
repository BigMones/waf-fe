import React from 'react';
import styled from 'styled-components';
import Header from '../components/HomePage/Header'; // Assicurati di importare il componente Header
import Footer from '../components/HomePage/Footer'; // Assicurati di importare il componente Footer
import player1 from '../assets/img/calc1.png'; // Assicurati di aggiornare il percorso
import player2 from '../assets/img/calc2.png'; // Assicurati di aggiornare il percorso
import logo from '../assets/img/logowaf.png';

const PageWrapper = styled.div`
  padding: 2rem;
  background: #fff;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem; /* Aumenta la dimensione del titolo principale */
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem; /* Aumenta la dimensione del sottotitolo */
  color: #6c63ff;
  margin: 0.5rem 0 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem; /* Aumenta la dimensione del testo della descrizione */
  margin-bottom: 1rem;
  font-weight: bold; /* Aggiungi il peso del carattere in grassetto */
`;

const VoteSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const VoteCard = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  flex: 1;
  max-width: 300px;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const VoteImage = styled.img`
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

const VoteLabel = styled.div`
  padding: 1rem;
  font-weight: bold;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NewsCard = styled.div`
  background: #fff;
  border: 2px solid #6c63ff;
  border-radius: 10px;
  padding: 1rem;
  flex: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const PercentageCard = styled.div`
  background: #fff;
  border: 2px solid #6c63ff;
  border-radius: 10px;
  padding: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StatValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const StatIcon = styled.span`
  background: #6c63ff;
  color: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LowerStatsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

const StatCard = styled.div`
  background: #fff;
  border: 2px solid #6c63ff;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  flex: 1 1 calc(33.333% - 1rem);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const InsightCard = styled(StatCard)`
  flex: 1 1 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownCard = styled(StatCard)`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
`;

const VotePage = () => (
  <>
    <Header />
    <PageWrapper>
      <HeaderSection>
        <img src={logo} alt="Logo" style={{ width: '500px', height: 'auto'}} />
        <MainTitle>SCEGLI IL TALENTO</MainTitle>
        <Subtitle>Il Calciomercato dei tifosi</Subtitle>
        <Description>Chi vorresti nella tua squadra?</Description>
        <Description>
          Per la prima volta nel mondo del calcio voi tifosi sceglierete e
          finanzierete, in parte, il prossimo acquisto del Club. Grazie alla
          blockchain in totale sicurezza e trasparenza, il ricavato dagli
          abbonamenti di WAF sarà utilizzato per il calciomercato!
        </Description>
        <Description>Fai sentire la tua voce!</Description>
      </HeaderSection>
      <VoteSection>
        <VoteCard>
          <VoteImage src={player1} alt="Player 1" />
          <VoteLabel>VOTA</VoteLabel>
        </VoteCard>
        <VoteCard>
          <VoteImage src={player2} alt="Player 2" />
          <VoteLabel>VOTA</VoteLabel>
        </VoteCard>
      </VoteSection>
      <StatsSection>
        <NewsCard>
          <h4>NEWS :</h4>
          <p>
            Il 60% degli abbonati ha votato. Per il momento la scelta 2 prevale.
            Hai ancora una settimana per lasciare il tuo voto.
          </p>
        </NewsCard>
        <PercentageCard>
          <StatValue>
            <StatIcon>&#x2B06;</StatIcon> 40,5%
          </StatValue>
        </PercentageCard>
      </StatsSection>
      <LowerStatsSection>
        <InsightCard>
          <div>
            <h4>Visualizza grafici</h4>
            <p>Insight</p>
          </div>
          <div>...</div>
        </InsightCard>
        <StatCard>
          <h4>Voto scelta 1</h4>
          <StatValue>20%</StatValue>
        </StatCard>
        <StatCard>
          <h4>Voto scelta 2</h4>
          <StatValue>40%</StatValue>
        </StatCard>
        <DropdownCard>
          <h4>Votazione in corso:</h4>
          <p>Calciomercato</p>
          <p>Design della divisa</p>
          <p>Musica da stadio</p>
        </DropdownCard>
      </LowerStatsSection>
    </PageWrapper>
    <Footer />
  </>
);

export default VotePage;
