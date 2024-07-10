import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/HomePage/Header';
import Footer from '../components/HomePage/Footer';
import variable from "../assets/global/variable.json";

import { useNavigate } from 'react-router-dom';
import { decodeToken } from '../utils/jwt'; // Import the decodeToken utility

const PageWrapper = styled.div`
  padding: 2rem;
  background: #fff;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #6c63ff;
  margin: 0.5rem 0 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const DetailsSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const PollDetails = () => {
  const { id_vote } = useParams();
  const [pollDetails, setPollDetails] = useState({
    id_vote: null,
    poll_name: "",
    id_team: "",
    first_choice_name: "",
    first_choice_id: "",
    second_choice_name: "",
    second_choice_id: "",
    total_votes: "",
    second_choice_votes: "",
    first_choice_votes: "",
    exp_poll: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPollDetails = async () => {
      try {
        const response = await axios.post(variable["base-be-deploy-url"] + "/api/v2/poll_details", { id_vote });
        const details = response.data.rows[0];
        
        setPollDetails({
          id_vote: details.id_vote,
          poll_name: details.poll_name,
          id_team: details.id_team,
          first_choice_name: details.first_choice_name,
          first_choice_id: details.first_choice_id,
          second_choice_name: details.second_choice_name,
          second_choice_id: details.second_choice_id,
          total_votes: details.total_votes,
          second_choice_votes: details.second_choice_votes,
          first_choice_votes: details.first_choice_votes,
          exp_poll: details.exp_poll,
        });
        console.log(details)
      } catch (error) {
        console.error('Error fetching poll details:', error);
      }
    };

    fetchPollDetails();
  }, [id_vote]);

  const handlefirstVote = async () => {
    try {
        console.log((pollDetails.first_choice_votes)++)
        console.log((pollDetails.total_votes)++)
      const response = await axios.put(variable["base-be-deploy-url"] + "/api/v2/vote_insert", {
        id_vote: pollDetails.id_vote,
        first_choice_votes: (pollDetails.first_choice_votes)++,
        total_votes: (pollDetails.total_votes)++
      });
      console.log('Vote successful:', response.data);
      navigate("/vote-page");
    } catch (error) {
      console.error('Error updating vote:', error);
    }
  };
  const handlesecondtVote = async () => {
    try {
        console.log((pollDetails.total_votes)++)
        console.log((pollDetails.second_choice_votes)++)
      const response = await axios.put(variable["base-be-deploy-url"] + "/api/v2/vote_insert", {
        id_vote: pollDetails.id_vote,
        second_choice_votes: (pollDetails.second_choice_votes)++,
        total_votes: (pollDetails.total_votes)++
      });
      console.log('Vote successful:', response.data.rows);
      navigate("/vote-page");
    } catch (error) {
      console.error('Error updating vote:', error);
    }
  };
  if (!pollDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <HeaderSection>
          <MainTitle>{pollDetails.poll_name}</MainTitle>
          <Description>{pollDetails.description}</Description>
        </HeaderSection>
        <DetailsSection>
          <h2>Poll Details</h2>
          <p><strong>ID:</strong> {pollDetails.id_vote}</p>
          <p><strong>Name:</strong> {pollDetails.poll_name}</p>
          <p><strong>Options:</strong></p>
          <ul>
            <li>
              <strong>1: </strong>{pollDetails.first_choice_name}
              <button onClick={() => handlefirstVote()}>VOTE</button>
            </li>
            <li>
              <strong>2: </strong>{pollDetails.second_choice_name}
              <button onClick={() => handlesecondtVote()}>VOTE</button>
            </li>
          </ul>
          <p><strong>First Choice Votes:</strong> {pollDetails.first_choice_votes}</p>
          <p><strong>Second Choice Votes:</strong> {pollDetails.second_choice_votes}</p>
          <p><strong>Total Votes:</strong> {pollDetails.total_votes}</p>
          <p><strong>Exp Date Poll:</strong> {pollDetails.exp_poll}</p>
        </DetailsSection>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default PollDetails;