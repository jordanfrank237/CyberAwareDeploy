# CyberAware - Plateforme de Sensibilisation à la Cybersécurité

**Développé par Frank**  
**Version 1.0**  
**Date : 15 juillet 2025**

---

## 🛡️ À propos de CyberAware

CyberAware est une plateforme interactive de sensibilisation à la cybersécurité développée entièrement par Frank. Cette solution moderne et complète permet aux utilisateurs d'apprendre les bonnes pratiques de cybersécurité à travers des modules de formation, des quiz interactifs, un système de certifications et un chatbot IA.

## ✨ Fonctionnalités

### 🎓 Module Formation
- 8 leçons complètes sur la cybersécurité
- Contenu pédagogique interactif
- Système de progression personnalisé
- Validation des leçons terminées

### 📝 Module Quiz
- 5 quiz spécialisés avec questions à choix multiples
- Système de scoring et validation
- Affichage des résultats détaillés
- Progression basée sur les réussites

### 🏆 Module Certifications
- 4 certifications disponibles
- Déblocage automatique selon les critères
- Système de badges et récompenses
- Suivi des accomplissements

### 🤖 Chatbot IA
- Assistant conversationnel intelligent
- Réponses personnalisées sur la cybersécurité
- Intégration OpenAI GPT
- Interface de chat moderne

### 👤 Gestion Utilisateur
- Authentification simple et sécurisée
- Sauvegarde automatique de la progression
- Tableau de bord personnalisé
- Statistiques détaillées

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ installé
- Clé API OpenAI (optionnelle pour le chatbot)

### Installation Express

1. **Télécharger le projet**
```bash
# Extraire l'archive CyberAware
unzip cyberaware-frank.zip
cd cyberaware-frank
```

2. **Démarrer l'application**
```bash
# Utiliser le script de démarrage automatique
./start-cyberaware.sh
```

3. **Accéder à l'application**
- Frontend : http://localhost:5173
- Backend : http://localhost:3001

### Installation Manuelle

1. **Backend**
```bash
cd CyberAware_Backend
npm install
node index.js
```

2. **Frontend**
```bash
cd cyber-aware-app
npm install
npm run dev
```

## 📁 Structure du Projet

```
cyberaware-frank/
├── 📂 cyber-aware-app/          # Application React frontend
│   ├── 📂 src/
│   │   ├── 📂 components/       # Composants React
│   │   ├── App.jsx             # Composant principal
│   │   └── App.css             # Styles globaux
│   ├── package.json
│   └── vite.config.js
├── 📂 CyberAware_Backend/       # API Node.js backend
│   ├── index.js                # Serveur Express
│   └── package.json
├── 📄 start-cyberaware.sh       # Script de démarrage
├── 📄 stop-cyberaware.sh        # Script d'arrêt
├── 📄 PACKAGE_TECHNIQUE_CYBERAWARE.md  # Documentation technique
└── 📄 README_CYBERAWARE.md      # Ce fichier
```

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env` dans `CyberAware_Backend/` :

```env
OPENAI_API_KEY=votre_clé_api_openai
OPENAI_API_BASE=https://api.openai.com/v1
PORT=3001
```

### Configuration du Chatbot

Le chatbot fonctionne avec ou sans clé OpenAI :
- **Avec clé** : Réponses IA personnalisées
- **Sans clé** : Réponses prédéfinies de fallback

## 🎮 Utilisation

### Première Connexion

1. Accéder à http://localhost:5173
2. Cliquer sur "Commencer maintenant"
3. Se connecter avec n'importe quel nom d'utilisateur/mot de passe
4. Explorer les modules de formation

### Navigation

- **Tableau de bord** : Vue d'ensemble de la progression
- **Formation** : Accès aux 8 leçons de cybersécurité
- **Quiz** : Tests de connaissances interactifs
- **Certifications** : Badges et récompenses
- **Chatbot** : Assistant IA pour questions

### Progression

- La progression est sauvegardée automatiquement
- Les certifications se débloquent selon les critères
- Toutes les données sont persistées localement

## 🛠️ Gestion des Services

### Démarrage
```bash
./start-cyberaware.sh
```

### Arrêt
```bash
./stop-cyberaware.sh
# ou Ctrl+C dans le terminal de démarrage
```

### Vérification du Statut
```bash
# Vérifier les processus actifs
ps aux | grep -E "(node|vite)"

# Tester l'API
curl http://localhost:3001/api/health
```

## 🔒 Sécurité

- Validation des entrées utilisateur
- Protection CORS configurée
- Gestion sécurisée des clés API
- Pas de données sensibles stockées côté client

## 📚 Documentation

- **Documentation technique complète** : `PACKAGE_TECHNIQUE_CYBERAWARE.md`
- **Guide d'installation** : Ce README
- **Code commenté** : Tous les fichiers sources

## 🐛 Dépannage

### Problèmes Courants

**Port déjà utilisé :**
```bash
# Arrêter les processus existants
./stop-cyberaware.sh
# Redémarrer
./start-cyberaware.sh
```

**Chatbot ne répond pas :**
- Vérifier que le backend est démarré
- Contrôler la clé API OpenAI
- Consulter les logs du serveur

**Progression non sauvegardée :**
- Vérifier que localStorage est activé
- Tester avec un autre navigateur
- Consulter la console pour les erreurs

### Logs et Diagnostic

```bash
# Logs en temps réel
tail -f logs/app.log

# Test de connectivité API
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Test"}'
```

## 🚀 Déploiement en Production

### Build de Production

```bash
cd cyber-aware-app
npm run build
```

### Configuration Serveur

- Servir les fichiers statiques depuis `dist/`
- Configurer HTTPS
- Mettre à jour les variables d'environnement
- Configurer les domaines autorisés

## 📈 Évolutions Futures

- Module blockchain pour coffre-fort numérique
- Simulateur de phishing interactif
- Application mobile React Native
- Base de données persistante
- Interface d'administration

## 👨‍💻 Développeur

**Frank**  
Créateur et développeur principal de CyberAware

- Conception et architecture complète
- Développement frontend React
- Développement backend Node.js
- Intégration IA et design UX/UI
- Documentation technique

## 📄 Licence

Projet développé par Frank - Tous droits réservés

---

## 🎯 Support

Pour toute question ou assistance :

1. Consulter la documentation technique : `PACKAGE_TECHNIQUE_CYBERAWARE.md`
2. Vérifier les logs d'erreur
3. Tester avec les scripts de diagnostic fournis

**Version :** 1.0  
**Dernière mise à jour :** 15 juillet 2025  
**Développé avec ❤️ par Frank**

