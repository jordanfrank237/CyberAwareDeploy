import React from 'react';

const Certifications = ({ progress, onNavigate }) => {
  const certifications = [
    {
      id: 1,
      title: "Fondamentaux de la Cybersécurité",
      description: "Certification de base couvrant les concepts essentiels de la cybersécurité",
      requirements: "Terminer 3 leçons de formation",
      icon: "🛡️",
      requiredLessons: 3,
      requiredQuizzes: 0
    },
    {
      id: 2,
      title: "Expert en Mots de Passe",
      description: "Maîtrise des bonnes pratiques de gestion des mots de passe",
      requirements: "Terminer les leçons sur les mots de passe et réussir le quiz",
      icon: "🔐",
      requiredLessons: 2,
      requiredQuizzes: 1
    },
    {
      id: 3,
      title: "Détecteur de Phishing",
      description: "Capacité à identifier et éviter les tentatives de phishing",
      requirements: "Terminer 5 leçons et réussir 3 quiz",
      icon: "🎣",
      requiredLessons: 5,
      requiredQuizzes: 3
    },
    {
      id: 4,
      title: "Maître de la Cybersécurité",
      description: "Certification complète démontrant une expertise globale",
      requirements: "Terminer toute la formation et tous les quiz",
      icon: "👑",
      requiredLessons: 8,
      requiredQuizzes: 5
    }
  ];

  const checkCertificationEligibility = (cert) => {
    const lessonsCompleted = progress.completedLessons.length >= cert.requiredLessons;
    const quizzesCompleted = progress.completedQuizzes.length >= cert.requiredQuizzes;
    return lessonsCompleted && quizzesCompleted;
  };

  const isEarned = (certId) => {
    return progress.earnedCertifications.includes(certId);
  };

  const handleClaimCertification = (certId) => {
    const cert = certifications.find(c => c.id === certId);
    if (checkCertificationEligibility(cert) && !isEarned(certId)) {
      // Ici on pourrait ajouter une logique pour "réclamer" la certification
      // Pour l'instant, on la marque automatiquement comme obtenue
      alert(`Félicitations ! Vous avez obtenu la certification "${cert.title}" !`);
    }
  };

  return (
    <div className="certifications-page">
      <div className="formation-header">
        <h1 className="formation-title">Certifications</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Obtenez des certifications reconnues en cybersécurité
        </p>
        <div style={{ marginTop: '1rem' }}>
          <button 
            className="nav-button"
            onClick={() => onNavigate('dashboard')}
          >
            ← Retour au tableau de bord
          </button>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        padding: '2rem',
        background: 'rgba(30, 41, 59, 0.6)',
        borderRadius: '16px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        maxWidth: '600px',
        margin: '0 auto 3rem'
      }}>
        <h2 style={{ 
          color: '#e2e8f0',
          marginBottom: '1rem'
        }}>
          Votre Progression
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          color: '#94a3b8'
        }}>
          <div>
            <div style={{ fontSize: '2rem', color: '#3b82f6' }}>
              {progress.completedLessons.length}
            </div>
            <div>Leçons terminées</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', color: '#8b5cf6' }}>
              {progress.completedQuizzes.length}
            </div>
            <div>Quiz réussis</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', color: '#10b981' }}>
              {progress.earnedCertifications.length}
            </div>
            <div>Certifications obtenues</div>
          </div>
        </div>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => {
          const isEligible = checkCertificationEligibility(cert);
          const earned = isEarned(cert.id);
          
          return (
            <div 
              key={cert.id}
              className={`certification-card ${earned ? 'earned' : ''}`}
            >
              <div className={`certification-badge ${earned ? 'earned' : ''}`}>
                {cert.icon}
              </div>
              
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-description">{cert.description}</p>
              
              <div style={{ 
                margin: '1.5rem 0',
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.6)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: '#94a3b8'
              }}>
                <strong>Prérequis:</strong><br />
                {cert.requirements}
              </div>

              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                color: '#94a3b8'
              }}>
                <span>
                  Leçons: {progress.completedLessons.length}/{cert.requiredLessons}
                </span>
                <span>
                  Quiz: {progress.completedQuizzes.length}/{cert.requiredQuizzes}
                </span>
              </div>

              <div className="certification-status">
                {earned ? (
                  <span className="earned">🏆 Obtenue</span>
                ) : isEligible ? (
                  <button 
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600'
                    }}
                    onClick={() => handleClaimCertification(cert.id)}
                  >
                    🎯 Réclamer
                  </button>
                ) : (
                  <span className="locked">🔒 Verrouillée</span>
                )}
              </div>

              {!isEligible && !earned && (
                <div style={{ 
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  color: '#64748b',
                  textAlign: 'center'
                }}>
                  {cert.requiredLessons - progress.completedLessons.length > 0 && 
                    `${cert.requiredLessons - progress.completedLessons.length} leçon(s) restante(s)`
                  }
                  {cert.requiredLessons - progress.completedLessons.length > 0 && 
                   cert.requiredQuizzes - progress.completedQuizzes.length > 0 && 
                   " et "
                  }
                  {cert.requiredQuizzes - progress.completedQuizzes.length > 0 && 
                    `${cert.requiredQuizzes - progress.completedQuizzes.length} quiz restant(s)`
                  }
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ 
        textAlign: 'center',
        marginTop: '3rem',
        padding: '2rem',
        background: 'rgba(30, 41, 59, 0.6)',
        borderRadius: '16px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        maxWidth: '600px',
        margin: '3rem auto 0'
      }}>
        <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>
          💡 Conseil
        </h3>
        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
          Complétez les formations et réussissez les quiz pour débloquer vos certifications. 
          Chaque certification démontre votre maîtrise d'un aspect spécifique de la cybersécurité.
        </p>
      </div>
    </div>
  );
};

export default Certifications;

