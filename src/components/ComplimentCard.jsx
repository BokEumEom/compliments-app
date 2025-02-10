// src/components/ComplimentCard.jsx
import './ComplimentCard.css'; // 컴포넌트 전용 스타일 import
import characterImage from '/assets/character.webp';

const ComplimentCard = ({ message }) => {
  return (
    <div className="compliment-card">
      <div className="character-container">
        <img
          src={characterImage}
          alt="칭찬 캐릭터"
          className="character-image"
        />
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ComplimentCard;
