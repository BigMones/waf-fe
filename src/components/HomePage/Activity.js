import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importa le immagini
import julie from '../../assets/img/julie.jpg';
import ryan from '../../assets/img/ryan.jpg';
import eva from '../../assets/img/eva.jpg';

const ActivityWrapper = styled.section`
  padding: 2rem;
  text-align: center;
  justify-content: center;
`;

const ActivityTitle = styled.h2`
  font-size: 2.5rem; /* Dimensione molto più grande */
  margin-bottom: 2rem;
`;

const ActivityItem = styled.div`
  min-width: 200px;  /* Dimensioni maggiori */
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActivityImage = styled.img`
  width: 200px;  /* Dimensioni delle immagini */
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '0',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: '0',
      },
    },
  ],
};

const Activity = () => (
  <ActivityWrapper>
    <ActivityTitle>Scopri le attività programmate per questo mese:</ActivityTitle>
    <Slider {...settings}>
      <ActivityItem>
        <ActivityImage src={eva} alt="Activity 1" />
        <p>Scegli e vota il design della divisa</p>
      </ActivityItem>
      <ActivityItem>
        <ActivityImage src={julie} alt="Activity 2" />
        <p>Vinci la maglia del nostro numero 1</p>
      </ActivityItem>
      <ActivityItem>
        <ActivityImage src={ryan} alt="Activity 3" />
        <p>Incontra la prima squadra</p>
      </ActivityItem>
    </Slider>
  </ActivityWrapper>
);

export default Activity;
