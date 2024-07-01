import React from "react";
import styled from "styled-components";
import Header from "../components/HomePage/Header.js";
import Hero from "../components/HomePage/Hero.js";
import Activity from "../components/HomePage/Activity.js";
import Footer from "../components/HomePage/Footer.js";
import starIcon from "../assets/img/star1.png"; 
import Icon from "../components/HomePage/Icon.js";
import voteIcon from "../assets/img/monitor1.png"; 
import winIcon from "../assets/img/scudo1.png"; 
import logoWAF from "../assets/img/logowaf.png";
import MVF from "../components/HomePage/MVF.js";


const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Hero />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Icon
          logoSrc={logoWAF}
          iconSrc={starIcon}
          description="Vivi esperienze straordinarie con la tua squadra"
          buttonText="VIP Experience"
        />
        <Icon
          logoSrc={logoWAF}
          iconSrc={voteIcon}
          description="Diritto di veto su decisioni importanti del Club"
          buttonText="Vota"
        />
        <Icon
          logoSrc={logoWAF}
          iconSrc={winIcon}
          description="Vinci premi limitati offerti per la tua fedeltà alla squadra"
          buttonText="Vinci"
        />
      </div>
      <Activity />
      <MVF />
      <Footer />
    </AppWrapper>
  );
}

export default App;
