// src/pages/Settings.jsx

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Settings.module.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('ko');

  // 컴포넌트 마운트 시 로컬 스토리지에서 설정값 불러오기
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
    const savedNotifications = localStorage.getItem('notificationsEnabled');
    if (savedNotifications !== null) {
      setNotificationsEnabled(savedNotifications === 'true');
    }
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleDarkModeChange = (e) => {
    const value = e.target.checked;
    setDarkMode(value);
    localStorage.setItem('darkMode', value);
  };

  const handleNotificationsChange = (e) => {
    const value = e.target.checked;
    setNotificationsEnabled(value);
    localStorage.setItem('notificationsEnabled', value);
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage(value);
    localStorage.setItem('language', value);
  };

  return (
    <div className="settings-page">
      {/* Header 컴포넌트를 사용하여 타이틀과 뒤로가기 버튼 표시 */}
      <Header title="설정" showBackButton={true} />
      <div className="settings-content">
        <div className="setting-item">
          <label>
            <input 
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeChange}
            />
            다크 모드
          </label>
        </div>
        <div className="setting-item">
          <label>
            <input 
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
            />
            알림 활성화
          </label>
        </div>
        <div className="setting-item">
          <label>
            언어 선택:
            <select value={language} onChange={handleLanguageChange}>
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="jp">日本語</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
