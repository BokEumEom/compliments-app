// src/pages/Home.jsx

import { useState } from 'react';
import Header from '../components/Header';
import ComplimentCard from '../components/ComplimentCard';
import compliments from '../data/compliments';
import characters from '../data/characters';
import FloatingButton from '../components/FloatingButton';
import './Home.css';

const Home = () => {
  const [complimentIndex, setComplimentIndex] = useState(0);
  const [compliment, setCompliment] = useState(compliments[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleGetCompliment = () => {
    // 현재 이미지는 교체될 것이므로, 일단 animate=false로 초기화
    setAnimate(false);

    setTimeout(() => {
      // 칭찬 메시지와 이미지 인덱스 순차 변경
      setComplimentIndex((prev) => (prev + 1) % compliments.length);
      setCurrentImageIndex((prev) => (prev + 1) % characters.length);

      // 변경된 이미지에 fade-in 효과를 적용
      setCompliment(compliments[complimentIndex]);
      setAnimate(true);
    }, 50);
  };

  return (
    <div className="home-page">
      <Header title="칭찬 메시지" showBackButton={false} />
      <div className="home-content">
        <ComplimentCard
          message={compliment}
          animate={animate}
          characterSrc={characters[currentImageIndex]}
        />
        <button className="get-compliment-button" onClick={handleGetCompliment}>
          칭찬 받기
        </button>
      </div>
      <FloatingButton />
    </div>
  );
};

export default Home;
