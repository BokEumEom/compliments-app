// src/pages/Home.jsx

import { useState } from 'react';
import Header from '../components/Header';
import ComplimentCard from '../components/ComplimentCard';
import compliments from '../data/compliments';
import FloatingButton from '../components/FloatingButton';
import './Home.css';

const Home = () => {
  const [compliment, setCompliment] = useState("오늘도 멋진 하루 보내세요!");

  const handleGetCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[randomIndex]);
  };

  return (
    <div className="home-page">
      <Header title="나에게 잘했다고 해주세요" />
      <ComplimentCard message={compliment} />
      <button className="get-compliment-button" onClick={handleGetCompliment}>
        칭찬 받기
      </button>
      <FloatingButton />
    </div>
  );
};

export default Home;
