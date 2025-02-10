// src/components/Header.jsx

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <header className="app-header">
      {showBackButton && (
        <button className="back-button" onClick={handleBack}>
          <ArrowLeftIcon className="back-icon" />
        </button>
      )}
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
