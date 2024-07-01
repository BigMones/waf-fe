import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();

  return (
    
    <div className="page-header clear-filter">
      <div
        className="page-header-image"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/Stadium.JPG") + ")",
            backgroundPosition: "300px",
        }}
        ref={pageHeader}
      ></div>

      <div className="container">
        <div className="content-left brand"></div>

        <div className="content-center brand">
          <div className="smallLogo">
            <img
              className="img-fluid"
              alt="..."
              src={require("../../assets/img/WAFsmallLogo.png")}
            ></img>
          </div>

          <h1 className="welcome">Benvenuto</h1>
          <h2 className="innn"> in </h2>

          <div>
            <img
              className="bigLogo"
              alt="..."
              src={require("../../assets/img/waflogo_white.png")}
            ></img>
          </div>

          <div className="synopsis">
            <h3 className="synopsis2">
              {" "}
              Supporta la tua squadra del cuore e diventa parte attiva della sua
              storia e del suo futuro! Con WAF vincerai esperienze uniche ed
              avrai un impatto diretto sulle decisioni del Club.
            </h3>
          </div>

          <div>
            <Button
              className="btn-round btn-lg"
              color="primary"
              outline
              type="button"
              to="/login-page"
              tag={Link}
              style={{
                color: "white",
                border: "2px solid blue",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexHeader;
