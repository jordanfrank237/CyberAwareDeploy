import React from 'react';

const Dashboard = ({ user, progress, onNavigate, onLogout }) => {
  const modules = [
    {
      id: 'formation',
      title: 'Formation',
      description: 'Apprenez les bases de la cybersécurité avec nos cours interactifs',
      icon: '📚',
      progress: progress.formation,
      status: `${progress.completedLessons.length}/8 leçons complétées`
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: 'Testez vos connaissances avec nos quiz spécialisés',
      icon: '🎓',
      progress: progress.quiz,
      status: `${progress.completedQuizzes.length}/5 quiz complétés`
    },
    {
      id: 'certifications',
      title: 'Certifications',
      description: 'Obtenez des certifications reconnues en cybersécurité',
      icon: '✅',
      progress: progress.certifications,
      status: `${progress.earnedCertifications.length}/4 certifications obtenues`
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-logo">
          <div className="logo-icon">🛡️</div>
          <div className="logo-text">Cyber Aware</div>
        </div>
        
        <div className="user-info">
          <div className="user-avatar">
            {user?.username?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <div style={{ fontWeight: '600' }}>
              {user?.username || 'Utilisateur'}
            </div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              Membre depuis {user?.joinDate || 'aujourd\'hui'}
            </div>
          </div>
          <button 
            className="nav-button"
            onClick={onLogout}
            style={{ marginLeft: '1rem' }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      <div className="welcome-section">
        <h1 className="welcome-title">
          Bienvenue {user?.username || 'Utilisateur'} 👋
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Apprenez à vous protéger contre les cyberattaques
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic' }}>
          "Plateforme interactive de sensibilisation aux menaces numériques"
        </p>
      </div>

      <div className="progress-section">
        <h2 style={{ marginBottom: '1rem', color: '#e2e8f0' }}>
          Progression globale
        </h2>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress.overall}%` }}
          ></div>
        </div>
        <div className="progress-text">
          {progress.overall}% Progression
        </div>
      </div>

      <div className="modules-grid">
        {modules.map((module) => (
          <div 
            key={module.id}
            className="module-card"
            onClick={() => onNavigate(module.id)}
          >
            <div className="module-icon">
              {module.icon}
            </div>
            <h3 className="module-title">{module.title}</h3>
            <p className="module-description">{module.description}</p>
            <div className="module-progress">
              <div 
                className="module-progress-fill"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
            <div className="module-status">{module.status}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button 
          className="nav-button"
          onClick={() => onNavigate('chatbot')}
          style={{ 
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            border: 'none',
            color: 'white',
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}
        >
          💬 Commencer votre formation
        </button>
        
        <div style={{ marginTop: '1rem' }}>
          <button className="nav-button">FAQ</button>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem', 
        padding: '2rem',
        borderTop: '1px solid rgba(59, 130, 246, 0.2)',
        color: '#64748b',
        fontSize: '0.9rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <span>Mentions Légales</span>
          <span>Contact</span>
          <span>À propos</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

