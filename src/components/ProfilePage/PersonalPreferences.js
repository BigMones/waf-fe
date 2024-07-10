import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { decodeToken } from '../../utils/jwt'; // Import the decodeToken utility
import variable from "../../assets/global/variable.json";

const PreferencesWrapper = styled.div`
  background: #d9e1f2;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 300px;
  max-width: 300px;
  height: 100%;
`;

const PreferenceTitle = styled.h3`
  font-size: 1.5rem;
  color: #6c63ff;
  margin-bottom: 1rem;
  text-align: center;
`;

const PreferenceText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const PersonalPreferences = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id_team, setID] = useState(null);
  const [teamData, setTeamData] = useState({
    nome: "",
    id_campionato: "",
    anno_creazione: "",
    status: "",
    nome_champ:"",
    paese:""
  });

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decoded = decodeToken(token);
      setID(parseInt(decoded.id_favourite));
    }
  }, []);

  useEffect(() => { 
    const fetchPreferences = async () => {
      if (id_team === null) return;
      try {
        const response = await axios.post(variable["base-be-url"] + "/api/v2/fav_team", { id_team });
        console.log("API Response:", response.data.rows[0]); 
        const team = response.data.rows[0];
        console.log("Team Response:", team.nome); 
        setTeamData({
          nome: team.nome,
          id_campionato: team.id_campionato,
          anno_creazione: team.anno_creazione,
          status: team.status,
          nome_champ: team.nome_champ,
          paese: team.paese
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPreferences();
  }, [id_team]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading preferences: {error.message}</p>;
  }

  return (
    <PreferencesWrapper>
    <PreferenceTitle>SUPPORTED TEAM INFO</PreferenceTitle>
    {teamData && (
      <>
        <PreferenceText>Team Name: {teamData.nome}</PreferenceText>
        <PreferenceText>Championship Name: {teamData.nome_champ}, {teamData.paese}</PreferenceText>
        <PreferenceText>Creation Year: {teamData.anno_creazione}</PreferenceText>
        <PreferenceText>Status: {teamData.status}</PreferenceText>
      </>
    )}
  </PreferencesWrapper>
  );
};

export default PersonalPreferences;
