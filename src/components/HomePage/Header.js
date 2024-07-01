import React from "react";
import styled from "styled-components";
import logoLeft from "../../assets/img/logo-left.png";
import logoRight from "../../assets/img/logo-right.png";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #ccc; /* Linea grigia all'estremità inferiore */
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const NavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 5rem; /* Spazio uniforme tra gli elementi di navigazione */
`;

const NavLink = styled.a`
  color: black; /* Colore nero */
  font-family: Arial, sans-serif; /* Font Arial */
  font-weight: bold; /* Testo in grassetto */
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* Per aggiungere un effetto hover */
  }
`;

const LogoRight = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoRightWrapper = styled.a`
  width: 40px;
  height: 40px;
  display: inline-block;

  &:hover {
    opacity: 0.8; /* Effetto hover cambiando l'opacità */
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo src={logoLeft} alt="Left Logo" />
    <NavWrapper>
      <Nav>
      <Link to="/vote-page">
        <NavLink href="#vote">Vota</NavLink>
        </Link>
        <NavLink href="#vip">VIP Experience</NavLink>
        <NavLink href="#win">Vinci</NavLink>
        <NavLink href="#subscribe">Abbonati</NavLink>
        <NavLink href="#shop">Shop</NavLink>
      </Nav>
    </NavWrapper>
    <LogoRightWrapper href="#profile">
    <Link to="/profile-page">
      <LogoRight src={logoRight} alt="Right Logo" />
      </Link>
    </LogoRightWrapper>
  </HeaderWrapper>
);

export default Header;
