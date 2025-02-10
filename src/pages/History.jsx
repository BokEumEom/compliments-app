// src/pages/History.jsx

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './History.module.css';

const History = () => {
  const [history, setHistory] = useState([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 기록 불러오기
  useEffect(() => {
    const storedHistory = localStorage.getItem('complimentHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // 전체 기록 삭제 핸들러
  const clearHistory = () => {
    localStorage.removeItem('complimentHistory');
    setHistory([]);
  };

  return (
    <div className="history-page">
      {/* Header 컴포넌트에 타이틀과 뒤로가기 버튼 표시 */}
      <Header title="기록" showBackButton={true} />
      {/* 헤더 높이만큼 상단 패딩을 추가하여 내용이 겹치지 않도록 함 */}
      <div className="history-content">
        {history.length === 0 ? (
          <p>아직 기록된 칭찬이 없습니다.</p>
        ) : (
          <div className="history-list">
            {history.map((item, index) => (
              <div key={index} className="history-item">
                <div className="history-message">{item.message}</div>
                <div className="history-timestamp">
                  {new Date(item.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
        {history.length > 0 && (
          <button className="clear-history-button" onClick={clearHistory}>
            기록 삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default History;
