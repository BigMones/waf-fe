import React, { useState } from "react";
import axios from 'axios';
import { Button, Input, Alert } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import variable from "../assets/global/variable.json";

function LoginPage() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [ruolo, setRuolo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const loginCheck = async () => {
    try {
      const response = await axios.post(variable["base-be-url"] + "/api/v2/login", { username, password });
      if (response.status === 200 && response.data.rowCount == 1) {
        console.log("Login Successful", response.data);
        navigate("/home-page");
      } else {
        setErrorMessage("Login failed. Please check your username and password.");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your username and password.");
      console.error(error);
    }
  };

  const registerAccount = async () => {

    try {
      const response = await axios.post(variable["base-be-url"] + "/api/v2/register", { username, mail, descrizione, ruolo, password });
      if (response.status === 200 && response.data.rowCount == 1) {
        console.log("Registrazione avvenuta con successo", response.data);
        navigate("/home-page");
      } else {
        setErrorMessage("Uno o piú parametri sono errati.");
      }
    } catch (error) {
      setErrorMessage("Uno o piú parametri sono errati.");
      console.error(error);
    }
  }

  return (
    <>
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundColor: "black",
          }}
        ></div>

        <div className="container">
          <div>
            <h1 className="loginText">Login</h1>
            <img
              className="bigLogo1"
              alt="..."
              src={require("../assets/img/waflogo_white.png")}
            ></img>
          </div>

          <div
            className="content-right brand"
            style={{
              backgroundImage: "url(" + require("../assets/img/FAN.jpeg") + ")",
              width: "100%",
              zoom: "109%",
            }}
          ></div>

          {!showCreateAccount ? (
            <div>
              <Button
                className="btn-round btn-block btn-lg first"
                color="primary"
                outline
                type="button"
                style={{
                  color: "white",
                  border: "2px solid blue",
                }}
              >
                PHANTOM WALLET
              </Button>

              <Button
                className="btn-round btn-block btn-lg second"
                color="primary"
                outline
                type="button"
                style={{
                  color: "white",
                  border: "2px solid blue",
                }}
              >
                SOLFLARE WALLET
              </Button>

              {errorMessage && (
                <Alert color="danger" style={{ width: "50%", margin: "0 auto 10px" }}>
                  {errorMessage}
                </Alert>
              )}

              <Input
                className="form input-white-placeholder"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                style={{
                  backgroundColor: "black",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  marginBottom: "10px",
                }}
              />

              <Input
                className="form2 input-white-placeholder"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{
                  backgroundColor: "black",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />

              <Button
                onClick={loginCheck}
                className="btn btn-block btn-lg third"
                color="danger"
                outline="none"
                type="button"
                style={{
                  color: "white",
                  border: "2px solid red",
                }}
              >
                LOGIN
              </Button>
            </div>
          ) : (
            <div>
              <Input
                className="formnew1 input-white-placeholder"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                style={{
                  backgroundColor: "black",
                  placeholderTextColor: "white",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />
              <Input
                className="formnew2 input-white-placeholder"
                type="text"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Email"
                style={{
                  backgroundColor: "black",
                  placeholderTextColor: "white",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />
              <Input
                className="formnew3 input-white-placeholder"
                type="text"
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
                placeholder="Descrizione"
                style={{
                  backgroundColor: "black",
                  placeholderTextColor: "white",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />
              <Input
                className="formnew4 input-white-placeholder"
                type="text"
                value={ruolo}
                onChange={(e) => setRuolo(e.target.value)}
                placeholder="Ruolo"
                style={{
                  backgroundColor: "black",
                  placeholderTextColor: "white",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />

              <Input
                className="formnew5 input-white-placeholder"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{
                  backgroundColor: "black",
                  placeholderTextColor: "white",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />

              <Input
                className="formnew6 input-white-placeholder"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Conferma Password"
                style={{
                  backgroundColor: "black",
                  placeholderTextColor: "white",
                  border: "2px solid blue",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "16px",
                  textAlign: "center",
                  outline: "none",
                  width: "50%",
                  color: "white",
                  marginBottom: "10px",
                }}
              />
              <Button
                className="btn-round btn-lg account2"
                color="neutral"
                outline
                type="button"
                onClick={registerAccount}
                style={{
                  color: "Red",
                  border: "transparent",
                  width: "300px",
                  backgroundColor: "transparent",
                }}
              >
                Confirm Create Account
              </Button>
            </div>
          )}

          <Button
            className="btn-round btn-lg account"
            color="neutral"
            outline
            type="button"
            onClick={handleCreateAccountClick}
            style={{
              color: "white",
              border: "transparent",
              width: "300px",
              backgroundColor: "transparent",
            }}
          >
            Create Account
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;