// src/components/ComplimentCard.jsx

import './ComplimentCard.module.css';

const ComplimentCard = ({ message, animate, characterSrc }) => {
  return (
    <div className="compliment-card">
      <div className="character-container">
        {/* 
          animate가 true이면 캐릭터 이미지에 "image-fade-in" 클래스를 추가하여 
          Fade 애니메이션만 적용 (기존 스타일은 그대로 유지)
        */}
        <img 
          src={characterSrc} 
          alt="칭찬 캐릭터" 
          className={`character-image ${animate ? 'image-fade-in' : ''}`} 
        />
        {/* 
          말풍선(speech-bubble)은 기존 애니메이션 그대로 유지하거나, 
          애니메이션 없이 보여주려면 fade-in 클래스 제거 (예시에서는 변경 없음)
        */}
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ComplimentCard;
