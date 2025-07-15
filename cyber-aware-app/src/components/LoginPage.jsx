import React, { useState } from 'react';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'une authentification
    setTimeout(() => {
      if (formData.username && formData.password) {
        const userData = {
          username: formData.username,
          email: `${formData.username}@cyberaware.com`,
          joinDate: new Date().toLocaleDateString('fr-FR')
        };
        onLogin(userData);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-quote">
            "Parce qu'un simple clic peut tout compromettre... 
            anticipez avec nous"
          </div>
          
          <div className="cyber-logo">
            <div className="logo-icon">🛡️</div>
            <div className="logo-text">Cyber Aware</div>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">👤</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nom d'utilisateur"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">🔒</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Connexion...' : 'se connecter'}
          </button>
        </form>

        <div className="login-footer">
          <div className="login-links">
            <a href="#" onClick={(e) => { e.preventDefault(); }}>
              Mentions Légales
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>
              Contact
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); }}>
              À propos
            </a>
          </div>
          
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
            <p>Mot de passe oublié ?</p>
            <p>Continuer avec Google</p>
            <p>Pas encore inscrit ? Créer un compte</p>
          </div>
        </div>

        <button 
          className="nav-button"
          onClick={() => onNavigate('home')}
          style={{ marginTop: '1rem', width: '100%' }}
        >
          ← Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

