import React from 'react';
import styled from 'styled-components';

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

const ProgressBarContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  background: #4b00ff;
  height: 10px;
  width: ${props => props.width}%;
  border-radius: 20px 0 0 20px;
`;

const PersonalPreferences = ({ preferences }) => (
  <PreferencesWrapper>
    <PreferenceTitle>PERSONAL PREFERENCES</PreferenceTitle>
    {preferences.map(preference => (
      <div key={preference.name}>
        <PreferenceText>{preference.name}</PreferenceText>
        <ProgressBarContainer>
          <ProgressBar width={preference.level} />
        </ProgressBarContainer>
      </div>
    ))}
  </PreferencesWrapper>
);

export default PersonalPreferences;
