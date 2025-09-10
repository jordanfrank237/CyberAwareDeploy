import React from 'react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Cyber Aware</h1>
        <p className="home-subtitle">
          Apprenez à vous protéger contre les cyberattaques
        </p>
        <p style={{ 
          color: '#64748b', 
          fontSize: '1rem',
          fontStyle: 'italic',
          marginBottom: '2rem'
        }}>
          "Plateforme interactive de sensibilisation aux menaces numériques"
        </p>
        
        <button 
          className="home-cta"
          onClick={() => onNavigate('login')}
        >
          Commencer maintenant
        </button>
        
        <div style={{ 
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '800px'
        }}>
          <div style={{
            background: 'rgba(30, 41, 59, 0.6)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Formation</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Cours interactifs sur la cybersécurité
            </p>
          </div>
          
          <div style={{
            background: 'rgba(30, 41, 59, 0.6)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
            <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Quiz</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Testez vos connaissances
            </p>
          </div>
          
          <div style={{
            background: 'rgba(30, 41, 59, 0.6)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
            <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Certifications</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Obtenez des certifications reconnues
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ 
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '2rem',
        color: '#64748b',
        fontSize: '0.9rem'
      }}>
        <span>Mentions Légales
          // Contenu pour la page des mentions légales
<div>
    <h1>Mentions Légales</h1>
    <h2>Éditeur du site</h2>
    <p>Frank (Jordan), étudiant et créateur de la plateforme CyberAware.</p>
    <h2>Contact</h2>
    <p>Email : tsakemfrank3@gmail.com</p>
    <p>Téléphone : +33 7 74 79 84 59</p>
    <h2>Hébergement</h2>
    <p>Ce site est hébergé par Netlify, Inc., situé au 2325 3rd Street, Suite 296, San Francisco, California 94107.</p>
    <h2>Propriété intellectuelle</h2>
    <p>Le contenu de ce site, incluant les textes, images et modules de formation, est la propriété exclusive de son créateur. Toute reproduction est interdite sans autorisation.</p>
    <h2>Protection des données</h2>
    <p>Ce site a pour unique but la sensibilisation à la cybersécurité. Les données de progression sont stockées localement sur le navigateur de l'utilisateur et ne sont pas collectées, sauf dans le cadre d'un futur système de comptes sécurisé.</p>
</div>

        </span>
        <span>Contact 
          Téléphone : +33 7 74 79 84 59
          Email : tsakemfrank3@gmail.com
        </span>
        <span>À propos</span>
      </div>
    </div>
  );
};

export default HomePage;

