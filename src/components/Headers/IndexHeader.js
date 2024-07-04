// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "reactstrap";

// function IndexHeader() {
//   let pageHeader = React.createRef();

//   return (
    
//     <div className="page-header clear-filter">
//       <div
//         className="page-header-image"
//         style={{
//           backgroundImage:
//             "url(" + require("../../assets/img/Stadium.JPG") + ")",
//             backgroundPosition: "300px",
//         }}
//         ref={pageHeader}
//       ></div>

//       <div className="container">
//         <div className="content-left brand"></div>

//         <div className="content-center brand">
//           <div className="smallLogo">
//             <img
//               className="img-fluid"
//               alt="..."
//               src={require("../../assets/img/WAFsmallLogo.png")}
//             ></img>
//           </div>

//           <h1 className="welcome">Benvenuto</h1>
//           <h2 className="innn"> in </h2>

//           <div>
//             <img
//               className="bigLogo"
//               alt="..."
//               src={require("../../assets/img/waflogo_white.png")}
//             ></img>
//           </div>

//           <div className="synopsis">
//             <h3 className="synopsis2">
//               {" "}
//               Supporta la tua squadra del cuore e diventa parte attiva della sua
//               storia e del suo futuro! Con WAF vincerai esperienze uniche ed
//               avrai un impatto diretto sulle decisioni del Club.
//             </h3>
//           </div>

//           <div>
//             <Button
//               className="btn-round btn-lg"
//               color="primary"
//               outline
//               type="button"
//               to="/login-page"
//               tag={Link}
//               style={{
//                 color: "white",
//                 border: "2px solid blue",
//               }}
//             >
//               Login
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default IndexHeader;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url(${require("../../assets/img/Stadium.JPG")}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  background: black;
  padding: 2rem;
  border-radius: 150px 150px 0 0;
  border: 2px solid white;
  transform: rotate(25deg);
  width: 70vw;
  max-width: 800px;
  height: 110vh;
  position: absolute;
  top: 100%;
  left: -20%;
  top: 80%;
  transform: translateY(-50%) rotate(25deg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  zoom: 140%;

  @media (max-width: 768px) {
    border-radius: 0 75px 0 0;
    padding: 1rem;
    transform: rotate(0deg) translateY(-50%);
    width: 100vw;
    height: auto;
    left: 0;
    top: 50%;
  }
`;

const InnerContent = styled.div`
  transform: rotate(-25deg) translateX(120px) translateY(-200px);  /* Aggiunto translateX per spostare a destra */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    transform: rotate(0deg);
    align-items: center;
    text-align: center;
  }
`;

const SmallLogo = styled.img`
  width: 50px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 30px;
  }
`;

const WelcomeText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MiddleText = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BigLogo = styled.img`
  width: 500px;
  margin: 2rem 0;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Synopsis = styled.div`
  max-width: 600px;
  margin: 2rem 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SynopsisText = styled.h3`
  font-size: 1.2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
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
          <WelcomeText>Benvenuto</WelcomeText>
          <MiddleText>in</MiddleText>
          <BigLogo src={require("../../assets/img/waflogo_white.png")} alt="Big Logo" />
          <Synopsis>
            <SynopsisText>
              Supporta la tua squadra del cuore e diventa parte attiva della sua
              storia e del suo futuro! Con WAF vincerai esperienze uniche ed avrai
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







