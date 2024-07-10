import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/HomePage/Header'; // Assicurati di importare il componente Header
import logo from '../assets/img/logowaf.png'; // Assicurati di aggiornare il percorso
import Footer from '../components/HomePage/Footer.js';
import DailyUsageChart from '../components/ProfilePage/DailyUsageChart'; // Assicurati di aggiornare il percorso
import PersonalPreferences from '../components/ProfilePage/PersonalPreferences'; // Assicurati di aggiornare il percorso
import { decodeToken } from '../utils/jwt'; // Import the decodeToken utility
import variable from "../assets/global/variable.json";

const ProfileWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  color: #000;
`;

const UserName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const UserLevel = styled.p`
  font-size: 1.2rem;
  color: #6c63ff;
  margin: 0;
`;

const Logo = styled.img`
  width: 500px; /* Aumenta la larghezza del logo */
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ProfileLeft = styled.div`
  display: flex;
  background: #d9e1f2;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileCard = styled.div`
  background: #6c63ff;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProfileInfo = styled.div`
  background: #f0f0f0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: #6c63ff;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
`;

const CancelButton = styled.button`
  background-color: #001f87;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  flex: 2;
  text-align: center;
  font-weight: bold;
  margin-right: 1rem;
`;

const LogoutButton = styled.button`
  background-color: #001f87;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;

const preferencesData = [
  { name: 'Partite in casa', level: 80 },
  { name: 'Partite in trasferta', level: 60 },
  { name: 'Esperienze online', level: 40 },
  { name: 'Esperienze offline', level: 50 },
  { name: 'Acquisti online', level: 90 },
];

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: null,
    email: "",
    regDate: "",
    desc: "",
    ruolo: "",
    idFav: "",
    isMvf: "",
    pubKey: "",
    mvfPos: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setID] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decoded = decodeToken(token);
      setID(parseInt(decoded.id));
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (id === null) return;

      try {
        const response = await axios.post(variable["base-be-deploy-url"] + "/api/v2/user", { id });
        const user = response.data.rows[0];
        setUserData({
          name: user.username,
          email: user.mail,
          regDate: user.regdate,
          desc: user.descrizione,
          ruolo: user.ruolo,
          idFav: user.id_favourite,
          isMvf: user.is_mvf,
          pubKey: user.pubkey,
          mvfPos: user.mvf_pos,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error loading user data</p>;
  }

  return (
    <>
      <Header />
      <ProfileWrapper>
        <ProfileHeader>
          <UserInfo>
            <UserName>{userData.name}</UserName>
            <UserLevel>WAF LEVEL USERNAME/100</UserLevel>
          </UserInfo>
        </ProfileHeader>
        <ProfileContent>
          <ProfileLeft>
            <ProfileCard>
              <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
            </ProfileCard>
            <ProfileInfo>
              <InfoTitle>ACCOUNT INFO: {userData.isMvf}</InfoTitle>
              <InfoText>Login: {userData.pubKey}</InfoText>
              <InfoText>Abbonamento: USERNAME</InfoText>
              <Textarea placeholder="Scrivi la tua bio..." rows="4"></Textarea>
            </ProfileInfo>
          </ProfileLeft>
          <PersonalPreferences preferences={preferencesData} />
        </ProfileContent>
        <DailyUsageChart />
        <ButtonContainer>
          <CancelButton>ANNULLA ABBONAMENTO</CancelButton>
          <LogoutButton>LOGOUT</LogoutButton>
        </ButtonContainer>
      </ProfileWrapper>
      <Footer />
    </>
  );
};

export default ProfilePage;
