// src/components/FloatingButton.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  BookmarkIcon,
  ClockIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';
import './FloatingButton.css';

const FloatingButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="floating-button-container">
      {/* 항상 렌더링하고 menuOpen 상태에 따라 open 클래스를 추가 */}
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <button
          className="menu-item"
          onClick={() => handleMenuClick('/favorites')}
        >
          <BookmarkIcon className="menu-icon" />
          <span>즐겨찾기</span>
        </button>
        <button
          className="menu-item"
          onClick={() => handleMenuClick('/history')}
        >
          <ClockIcon className="menu-icon" />
          <span>기록</span>
        </button>
        <button
          className="menu-item"
          onClick={() => handleMenuClick('/settings')}
        >
          <Cog6ToothIcon className="menu-icon" />
          <span>설정</span>
        </button>
      </div>
      <button className="floating-button" onClick={toggleMenu}>
        {menuOpen ? (
          <XMarkIcon className="icon" />
        ) : (
          <Bars3Icon className="icon" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
