import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Formation from './components/Formation';
import Quiz from './components/Quiz';
import Certifications from './components/Certifications';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [userProgress, setUserProgress] = useState({
    overall: 0,
    formation: 0,
    quiz: 0,
    certifications: 0,
    completedLessons: [],
    completedQuizzes: [],
    earnedCertifications: []
  });

  // Charger les données utilisateur depuis localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('cyberAwareUser');
    const savedProgress = localStorage.getItem('cyberAwareProgress');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentPage('dashboard');
    }
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Sauvegarder les données utilisateur
  const saveUserData = (userData, progressData) => {
    if (userData) {
      localStorage.setItem('cyberAwareUser', JSON.stringify(userData));
      setUser(userData);
    }
    if (progressData) {
      localStorage.setItem('cyberAwareProgress', JSON.stringify(progressData));
      setUserProgress(progressData);
    }
  };

  const handleLogin = (userData) => {
    saveUserData(userData, userProgress);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('cyberAwareUser');
    setUser(null);
    setCurrentPage('home');
  };

  const updateProgress = (type, value, additionalData = {}) => {
    const newProgress = { ...userProgress };
    
    switch (type) {
      case 'lesson':
        if (!newProgress.completedLessons.includes(value)) {
          newProgress.completedLessons.push(value);
          newProgress.formation = Math.min(100, (newProgress.completedLessons.length / 8) * 100);
        }
        break;
      case 'quiz':
        if (!newProgress.completedQuizzes.includes(value)) {
          newProgress.completedQuizzes.push(value);
          newProgress.quiz = Math.min(100, (newProgress.completedQuizzes.length / 5) * 100);
        }
        break;
      case 'certification':
        if (!newProgress.earnedCertifications.includes(value)) {
          newProgress.earnedCertifications.push(value);
          newProgress.certifications = Math.min(100, (newProgress.earnedCertifications.length / 4) * 100);
        }
        break;
    }
    
    // Calculer la progression globale
    newProgress.overall = Math.round(
      (newProgress.formation + newProgress.quiz + newProgress.certifications) / 3
    );
    
    saveUserData(null, newProgress);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'dashboard':
        return (
          <Dashboard 
            user={user} 
            progress={userProgress}
            onNavigate={setCurrentPage}
            onLogout={handleLogout}
          />
        );
      case 'formation':
        return (
          <Formation 
            progress={userProgress}
            onNavigate={setCurrentPage}
            onUpdateProgress={updateProgress}
          />
        );
      case 'quiz':
        return (
          <Quiz 
            progress={userProgress}
            onNavigate={setCurrentPage}
            onUpdateProgress={updateProgress}
          />
        );
      case 'certifications':
        return (
          <Certifications 
            progress={userProgress}
            onNavigate={setCurrentPage}
          />
        );
      case 'chatbot':
        return <Chatbot onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;

