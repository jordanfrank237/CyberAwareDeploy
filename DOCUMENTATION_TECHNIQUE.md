# Documentation Technique - Cyber Aware
## Plateforme de Sensibilisation à la Cybersécurité

**Développé par :** Frank  
**Date :** Juillet 2025  
**Version :** 1.0.0

---

## 📋 Table des Matières

1. [Vue d'ensemble du projet](#vue-densemble-du-projet)
2. [Architecture technique](#architecture-technique)
3. [Installation et configuration](#installation-et-configuration)
4. [Structure du projet](#structure-du-projet)
5. [API Backend](#api-backend)
6. [Frontend React](#frontend-react)
7. [Déploiement](#déploiement)
8. [Maintenance](#maintenance)

---

## 🎯 Vue d'ensemble du projet

Cyber Aware est une plateforme web interactive de sensibilisation à la cybersécurité développée avec une stack moderne :

- **Frontend :** React 18 + Vite + Tailwind CSS
- **Backend :** Node.js + Express
- **IA :** OpenAI GPT-4.1-mini pour le chatbot
- **Base de données :** LocalStorage (extensible vers MongoDB)
- **Déploiement :** Compatible avec Vercel, Netlify, Heroku

### Fonctionnalités principales

✅ **Authentification utilisateur** avec persistance  
✅ **Dashboard interactif** avec suivi de progression  
✅ **Module de formation** avec leçons structurées  
✅ **Système de quiz** avec scoring en temps réel  
✅ **Certifications et badges** gamifiés  
✅ **Chatbot IA** spécialisé en cybersécurité  
✅ **Design responsive** fidèle aux maquettes  

---

## 🏗️ Architecture technique

```
cyber-aware-app/
├── src/
│   ├── components/          # Composants React
│   │   ├── HomePage.jsx     # Page d'accueil
│   │   ├── LoginPage.jsx    # Authentification
│   │   ├── Dashboard.jsx    # Tableau de bord
│   │   ├── Formation.jsx    # Module formation
│   │   ├── Quiz.jsx         # Module quiz
│   │   ├── Certifications.jsx # Module certifications
│   │   └── Chatbot.jsx      # Interface chatbot
│   ├── App.jsx              # Composant principal
│   ├── App.css              # Styles personnalisés
│   └── main.jsx             # Point d'entrée
├── public/                  # Assets statiques
├── package.json             # Dépendances
└── vite.config.js           # Configuration Vite

CyberAware_Backend/
├── index.js                 # Serveur Express
├── package.json             # Dépendances backend
└── README.md                # Documentation API
```

---

## ⚙️ Installation et configuration

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Clé API OpenAI (optionnel pour le chatbot)

### Installation Frontend

```bash
# Cloner le projet
git clone <votre-repo>
cd cyber-aware-app

# Installer les dépendances
npm install --legacy-peer-deps

# Démarrer en développement
npm run dev
```

### Installation Backend

```bash
cd CyberAware_Backend

# Installer les dépendances
npm install express openai

# Configurer les variables d'environnement
export OPENAI_API_KEY="votre-clé-api"
export OPENAI_API_BASE="https://api.openai.com/v1"

# Démarrer le serveur
node index.js
```

### Variables d'environnement

Créer un fichier `.env` dans le dossier backend :

```env
OPENAI_API_KEY=sk-votre-clé-openai
OPENAI_API_BASE=https://api.openai.com/v1
PORT=3000
```

---

## 📁 Structure du projet

### Frontend (React)

```javascript
// App.jsx - Routeur principal
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')
  
  // Logique d'authentification et navigation
}
```

### Composants principaux

1. **HomePage** - Landing page avec présentation
2. **LoginPage** - Authentification utilisateur
3. **Dashboard** - Vue d'ensemble avec progression
4. **Formation** - Modules d'apprentissage
5. **Quiz** - Tests de connaissances
6. **Certifications** - Badges et récompenses
7. **Chatbot** - Assistant IA

### Gestion d'état

```javascript
// Stockage local pour la persistance
const saveUserData = (userData) => {
  localStorage.setItem('cyberAwareUser', JSON.stringify(userData))
}

const getUserData = () => {
  const stored = localStorage.getItem('cyberAwareUser')
  return stored ? JSON.parse(stored) : null
}
```

---

## 🔧 API Backend

### Endpoints disponibles

#### POST /chatbot
```javascript
// Requête
{
  "message": "Qu'est-ce que le phishing ?"
}

// Réponse
{
  "response": "Le phishing est une technique d'escroquerie..."
}
```

#### GET /user/:userId/stats
```javascript
// Réponse
{
  "overall": 0,
  "formation": 0,
  "quiz": 0,
  "certifications": 0,
  "completedLessons": 0,
  "totalLessons": 12
}
```

#### POST /user/:userId/progress
```javascript
// Requête
{
  "module": "formation",
  "progress": 25
}

// Réponse
{
  "success": true,
  "message": "Progression mise à jour"
}
```

### Configuration CORS

```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})
```

---

## 🎨 Frontend React

### Système de thème

```css
:root {
  --cyber-primary: #4c6ef5;
  --cyber-secondary: #364fc7;
  --cyber-accent: #5c7cfa;
  --cyber-dark: #0f172a;
  --cyber-darker: #020617;
}

.cyber-gradient {
  background: linear-gradient(135deg, 
    #0f172a 0%, 
    #1e293b 25%, 
    #16213e 50%, 
    #1e293b 75%, 
    #0f172a 100%
  );
}
```

### Composants réutilisables

```javascript
// Bouton personnalisé
const CyberButton = ({ children, onClick, disabled }) => (
  <button 
    className="cyber-button px-6 py-3 rounded-lg"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

// Card module
const ModuleCard = ({ title, icon, progress, onClick }) => (
  <div className="module-card p-6 cursor-pointer" onClick={onClick}>
    <div className="module-icon">
      {icon}
    </div>
    <h3>{title}</h3>
    <div className="progress-bar" style={{ width: `${progress}%` }} />
  </div>
)
```

### Gestion des animations

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

---

## 🚀 Déploiement

### Déploiement Frontend (Vercel)

```bash
# Build de production
npm run build

# Déploiement Vercel
npx vercel --prod
```

### Déploiement Backend (Heroku)

```bash
# Créer l'app Heroku
heroku create cyber-aware-backend

# Configurer les variables d'environnement
heroku config:set OPENAI_API_KEY=votre-clé
heroku config:set OPENAI_API_BASE=https://api.openai.com/v1

# Déployer
git push heroku main
```

### Configuration Nginx (VPS)

```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    
    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /api {
        proxy_pass http://localhost:3000;
    }
}
```

---

## 🔧 Scripts de lancement

### start-frontend.sh
```bash
#!/bin/bash
echo "🚀 Démarrage du frontend Cyber Aware..."
cd cyber-aware-app
npm install --legacy-peer-deps
npm run dev
```

### start-backend.sh
```bash
#!/bin/bash
echo "🚀 Démarrage du backend Cyber Aware..."
cd CyberAware_Backend
npm install
export OPENAI_API_KEY="votre-clé-api"
export OPENAI_API_BASE="https://api.openai.com/v1"
node index.js
```

### start-all.sh
```bash
#!/bin/bash
echo "🚀 Démarrage complet de Cyber Aware..."

# Démarrer le backend en arrière-plan
cd CyberAware_Backend
npm install
export OPENAI_API_KEY="votre-clé-api"
node index.js &

# Démarrer le frontend
cd ../cyber-aware-app
npm install --legacy-peer-deps
npm run dev
```

---

## 🛠️ Maintenance

### Logs et monitoring

```javascript
// Backend logging
const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})
```

### Tests

```javascript
// Tests unitaires avec Jest
npm install --save-dev jest @testing-library/react

// Exemple de test
test('Dashboard renders correctly', () => {
  render(<Dashboard user={mockUser} />)
  expect(screen.getByText('Bienvenue')).toBeInTheDocument()
})
```

### Mise à jour des dépendances

```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour
npm update

# Audit de sécurité
npm audit
npm audit fix
```

---

## 📞 Support technique

Pour toute question technique :

- **Développeur :** Frank
- **Email :** frank@cyberaware.dev
- **Documentation :** [docs.cyberaware.dev](https://docs.cyberaware.dev)
- **Repository :** [github.com/frank/cyber-aware](https://github.com/frank/cyber-aware)

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

*Documentation générée le 15 juillet 2025 par Frank*

