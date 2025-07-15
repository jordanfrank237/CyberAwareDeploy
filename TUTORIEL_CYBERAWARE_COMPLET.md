# 📚 TUTORIEL COMPLET - CyberAware v1.0
## Guide d'utilisation de A à Z

**Développé par Frank**  
**Version : 1.0**  
**Date : 15 juillet 2025**

---

## 🎯 Table des matières

1. [Introduction et présentation](#introduction-et-présentation)
2. [Installation et premier démarrage](#installation-et-premier-démarrage)
3. [Interface et navigation](#interface-et-navigation)
4. [Utilisation des modules](#utilisation-des-modules)
5. [Gestion des serveurs](#gestion-des-serveurs)
6. [Résolution des problèmes](#résolution-des-problèmes)
7. [Déploiement et personnalisation](#déploiement-et-personnalisation)
8. [Conseils d'utilisation avancée](#conseils-dutilisation-avancée)

---

## 🚀 Introduction et présentation

### Qu'est-ce que CyberAware ?

CyberAware est une plateforme interactive de sensibilisation à la cybersécurité que vous avez développée. Elle offre une expérience d'apprentissage complète avec :

- **8 modules de formation** couvrant tous les aspects de la cybersécurité
- **5 quiz interactifs** pour tester les connaissances
- **4 certifications** débloquées selon la progression
- **Un chatbot IA** pour répondre aux questions
- **Un système de progression** personnalisé

### Objectifs pédagogiques

La plateforme vise à sensibiliser les utilisateurs aux :
- Bonnes pratiques de mots de passe
- Reconnaissance et prévention du phishing
- Sécurité des réseaux et Wi-Fi
- Protection des données personnelles
- Sauvegardes et récupération
- Sécurité mobile et applications
- Malwares et antivirus
- Ingénierie sociale

---

## 💻 Installation et premier démarrage

### Prérequis système

Avant de commencer, assurez-vous d'avoir :
- **Node.js version 18 ou supérieure** installé sur votre machine
- **npm** (gestionnaire de paquets Node.js)
- **Un terminal/invite de commandes**
- **Un navigateur web moderne** (Chrome, Firefox, Safari, Edge)

### Étape 1 : Extraction des fichiers

1. **Télécharger l'archive**
   - Récupérez le fichier `CyberAware_Frank_Complete.tar.gz`
   - Placez-le dans un dossier de votre choix

2. **Extraire l'archive**
   ```bash
   # Sur Linux/Mac
   tar -xzf CyberAware_Frank_Complete.tar.gz
   
   # Sur Windows (avec 7-Zip ou WinRAR)
   # Clic droit > Extraire ici
   ```

3. **Accéder au dossier**
   ```bash
   cd CyberAware_Frank_Complete
   ls -la  # Vérifier le contenu
   ```

### Étape 2 : Installation des dépendances

1. **Backend (API)**
   ```bash
   cd CyberAware_Backend
   npm install
   cd ..
   ```

2. **Frontend (Interface)**
   ```bash
   cd cyber-aware-app
   npm install
   cd ..
   ```

### Étape 3 : Premier démarrage

**Méthode automatique (recommandée) :**
```bash
./start-cyberaware.sh
```

**Méthode manuelle :**
```bash
# Terminal 1 - Backend
cd CyberAware_Backend
node index.js

# Terminal 2 - Frontend  
cd cyber-aware-app
npm run dev
```

### Étape 4 : Accès à l'application

Une fois démarré, ouvrez votre navigateur et accédez à :
- **Application principale** : http://localhost:5173
- **API Backend** : http://localhost:3001

---

## 🎨 Interface et navigation

### Page d'accueil

Lorsque vous accédez à l'application, vous arrivez sur la page d'accueil qui présente :

1. **En-tête** : Logo CyberAware et titre principal
2. **Slogan** : "Apprenez à vous protéger contre les cyberattaques"
3. **Description** : "Plateforme interactive de sensibilisation aux menaces numériques"
4. **Bouton principal** : "Commencer maintenant" (pour accéder à la connexion)
5. **Modules en aperçu** : Formation, Quiz, Certifications
6. **Pied de page** : Liens vers mentions légales, contact, à propos

### Page de connexion

Après avoir cliqué sur "Commencer maintenant" :

1. **Formulaire de connexion** avec :
   - Champ nom d'utilisateur (accepte n'importe quel nom)
   - Champ mot de passe (accepte n'importe quel mot de passe)
   - Bouton "Se connecter"

2. **Fonctionnalités** :
   - Validation visuelle des champs
   - Animation lors de la saisie
   - Redirection automatique après connexion

3. **Navigation** :
   - Bouton "Retour à l'accueil" pour revenir en arrière
   - Liens vers mentions légales, contact, à propos

### Tableau de bord principal

Une fois connecté, vous accédez au dashboard qui affiche :

1. **En-tête utilisateur** :
   - Logo CyberAware
   - Nom de l'utilisateur connecté
   - Date d'inscription
   - Bouton de déconnexion

2. **Message de bienvenue** :
   - Salutation personnalisée
   - Rappel de l'objectif de la plateforme

3. **Progression globale** :
   - Barre de progression générale (commence à 0%)
   - Pourcentage affiché en temps réel

4. **Modules disponibles** :
   - **Formation** : Icône livres, description, progression (0/8 leçons)
   - **Quiz** : Icône diplôme, description, progression (0/5 quiz)
   - **Certifications** : Icône trophée, description, progression (0/4 certifications)

5. **Actions rapides** :
   - Bouton "Commencer votre formation"
   - Bouton "FAQ"

---

## 📖 Utilisation des modules

### Module Formation

Le module Formation contient 8 leçons complètes sur la cybersécurité.

#### Accès au module
1. Cliquez sur la carte "Formation" depuis le dashboard
2. Ou utilisez le bouton "Commencer votre formation"

#### Navigation dans les leçons
1. **Liste des leçons** :
   - Leçon 1 : Introduction à la cybersécurité
   - Leçon 2 : Mots de passe sécurisés
   - Leçon 3 : Reconnaissance du phishing
   - Leçon 4 : Sécurité des réseaux Wi-Fi
   - Leçon 5 : Protection des données personnelles
   - Leçon 6 : Sauvegardes et récupération
   - Leçon 7 : Sécurité mobile
   - Leçon 8 : Malwares et antivirus

2. **Interface de leçon** :
   - Titre de la leçon
   - Contenu pédagogique détaillé
   - Exemples pratiques
   - Conseils et bonnes pratiques
   - Bouton "Marquer comme terminée"

3. **Progression** :
   - Chaque leçon terminée augmente la progression
   - Calcul automatique : (leçons terminées / 8) × 100
   - Sauvegarde automatique de l'avancement

#### Conseils d'utilisation
- Lisez chaque leçon attentivement
- Prenez des notes sur les points importants
- Appliquez les conseils dans votre quotidien
- N'hésitez pas à relire les leçons

### Module Quiz

Le module Quiz propose 5 tests interactifs pour évaluer vos connaissances.

#### Accès au module
1. Cliquez sur la carte "Quiz" depuis le dashboard
2. Les quiz se débloquent progressivement

#### Types de quiz
1. **Quiz Mots de passe** : Bonnes pratiques de création et gestion
2. **Quiz Phishing** : Reconnaissance des tentatives d'hameçonnage
3. **Quiz Réseaux** : Sécurité des connexions et Wi-Fi
4. **Quiz Données** : Protection et sauvegarde des informations
5. **Quiz Général** : Synthèse de tous les domaines

#### Interface de quiz
1. **Page de sélection** :
   - Liste des quiz disponibles
   - Statut (disponible, terminé, verrouillé)
   - Score obtenu si déjà passé

2. **Interface de test** :
   - Question affichée clairement
   - 4 choix de réponses (A, B, C, D)
   - Bouton "Valider la réponse"
   - Compteur de questions (ex: 3/10)

3. **Résultats** :
   - Score final (ex: 8/10)
   - Pourcentage de réussite
   - Commentaires sur les réponses
   - Possibilité de refaire le quiz

#### Système de scoring
- **Réussite** : 70% ou plus (7/10 minimum)
- **Échec** : Moins de 70%
- **Progression** : Seuls les quiz réussis comptent
- **Calcul** : (quiz réussis / 5) × 100

### Module Certifications

Le module Certifications récompense vos accomplissements avec des badges.

#### Types de certifications
1. **Débutant en cybersécurité** : Terminer 2 leçons
2. **Expert en mots de passe** : Réussir le quiz mots de passe
3. **Détecteur de phishing** : Réussir le quiz phishing
4. **Maître de la cybersécurité** : Terminer toutes les leçons et tous les quiz

#### Critères de déblocage
- **Automatique** : Les certifications se débloquent dès que les critères sont remplis
- **Notification** : Message de félicitations lors du déblocage
- **Persistance** : Les certifications sont sauvegardées définitivement

#### Affichage
- Badge coloré pour les certifications obtenues
- Badge grisé pour les certifications non obtenues
- Description des critères pour chaque certification
- Date d'obtention affichée

### Chatbot IA

Le chatbot est votre assistant personnel pour toutes questions sur la cybersécurité.

#### Accès au chatbot
1. Icône de chat en bas à droite de l'écran
2. Clic pour ouvrir l'interface de conversation

#### Utilisation
1. **Interface** :
   - Zone de conversation
   - Champ de saisie en bas
   - Bouton d'envoi

2. **Types de questions** :
   - Questions sur les leçons
   - Demandes de conseils personnalisés
   - Clarifications sur des concepts
   - Situations pratiques

3. **Exemples de questions** :
   - "Comment créer un mot de passe sécurisé ?"
   - "Comment reconnaître un email de phishing ?"
   - "Quels sont les risques du Wi-Fi public ?"
   - "Comment sauvegarder mes données ?"

#### Fonctionnalités avancées
- **Réponses contextuelles** : Le chatbot connaît le contenu des leçons
- **Conseils personnalisés** : Adaptés à votre niveau et progression
- **Mode fallback** : Réponses prédéfinies si l'IA n'est pas disponible
- **Historique** : Conservation des conversations pendant la session

---

## ⚙️ Gestion des serveurs

### Démarrage de l'application

#### Méthode automatique (recommandée)
```bash
# Depuis le dossier principal
./start-cyberaware.sh
```

**Ce que fait le script :**
- Vérifie la présence des dossiers nécessaires
- Installe les dépendances si manquantes
- Démarre le backend sur le port 3001
- Démarre le frontend sur le port 5173
- Affiche les URLs d'accès
- Gère les erreurs automatiquement

#### Méthode manuelle

**Terminal 1 - Backend :**
```bash
cd CyberAware_Backend
node index.js
```

**Terminal 2 - Frontend :**
```bash
cd cyber-aware-app
npm run dev
```

### Arrêt de l'application

#### Méthode automatique
```bash
./stop-cyberaware.sh
```

#### Méthode manuelle
- **Ctrl+C** dans chaque terminal
- Ou fermer les fenêtres de terminal

#### Arrêt forcé
```bash
# Arrêter tous les processus Node.js
pkill -f node
pkill -f vite
```

### Vérification du statut

#### Vérifier les processus actifs
```bash
ps aux | grep -E "(node|vite)"
```

#### Tester la connectivité
```bash
# Tester le frontend
curl http://localhost:5173

# Tester le backend
curl http://localhost:3001

# Tester l'API du chatbot
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Test"}'
```

#### Vérifier les ports utilisés
```bash
netstat -tulpn | grep :5173
netstat -tulpn | grep :3001
```

### Configuration avancée

#### Variables d'environnement
Créez un fichier `.env` dans `CyberAware_Backend/` :
```env
OPENAI_API_KEY=votre_clé_api_openai
OPENAI_API_BASE=https://api.openai.com/v1
PORT=3001
```

#### Configuration du chatbot
- **Avec clé OpenAI** : Réponses IA personnalisées
- **Sans clé** : Réponses prédéfinies de qualité
- **Test** : Le chatbot fonctionne dans les deux cas

---

## 🔧 Résolution des problèmes

### Problèmes courants et solutions

#### 1. "Port déjà utilisé"
**Symptôme :** Erreur "EADDRINUSE" au démarrage

**Solution :**
```bash
# Arrêter les processus existants
./stop-cyberaware.sh
# Attendre 5 secondes
sleep 5
# Redémarrer
./start-cyberaware.sh
```

#### 2. "Module non trouvé"
**Symptôme :** Erreur "Cannot find module"

**Solution :**
```bash
# Réinstaller les dépendances backend
cd CyberAware_Backend
rm -rf node_modules package-lock.json
npm install

# Réinstaller les dépendances frontend
cd ../cyber-aware-app
rm -rf node_modules package-lock.json
npm install
```

#### 3. "Page blanche"
**Symptôme :** L'application ne s'affiche pas

**Solutions :**
1. Vérifier que les deux serveurs sont démarrés
2. Vider le cache du navigateur (Ctrl+F5)
3. Tester avec un autre navigateur
4. Vérifier la console du navigateur (F12)

#### 4. "Chatbot ne répond pas"
**Symptôme :** Pas de réponse du chatbot

**Solutions :**
1. Vérifier que le backend est démarré
2. Tester l'API manuellement
3. Vérifier les logs du serveur
4. Le mode fallback devrait fonctionner même sans OpenAI

#### 5. "Progression non sauvegardée"
**Symptôme :** La progression disparaît

**Solutions :**
1. Vérifier que localStorage est activé
2. Ne pas utiliser le mode navigation privée
3. Vérifier les paramètres de cookies du navigateur

### Diagnostic avancé

#### Logs du serveur
```bash
# Voir les logs en temps réel
tail -f logs/app.log

# Logs système
journalctl -f
```

#### Test de l'API
```bash
# Test de santé
curl http://localhost:3001/api/health

# Test du chatbot
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

#### Vérification des fichiers
```bash
# Vérifier la structure
ls -la cyber-aware-app/src/
ls -la CyberAware_Backend/

# Vérifier les permissions
chmod +x *.sh
```

### Réinitialisation complète

Si tous les problèmes persistent :

```bash
# 1. Arrêter tous les processus
./stop-cyberaware.sh
pkill -f node
pkill -f vite

# 2. Nettoyer les dépendances
cd CyberAware_Backend
rm -rf node_modules package-lock.json
cd ../cyber-aware-app
rm -rf node_modules package-lock.json
cd ..

# 3. Réinstaller
cd CyberAware_Backend && npm install && cd ..
cd cyber-aware-app && npm install && cd ..

# 4. Redémarrer
./start-cyberaware.sh
```

---

## 🌐 Déploiement et personnalisation

### Déploiement local (réseau)

Pour rendre l'application accessible sur votre réseau local :

1. **Modifier la configuration Vite**
   ```javascript
   // cyber-aware-app/vite.config.js
   export default defineConfig({
     plugins: [react()],
     server: {
       host: '0.0.0.0',  // Écouter sur toutes les interfaces
       port: 5173
     }
   })
   ```

2. **Redémarrer l'application**
   ```bash
   ./stop-cyberaware.sh
   ./start-cyberaware.sh
   ```

3. **Accès réseau**
   - Trouvez votre IP locale : `ipconfig` (Windows) ou `ifconfig` (Linux/Mac)
   - Accédez via : `http://VOTRE_IP:5173`

### Déploiement en production

#### Build de production
```bash
cd cyber-aware-app
npm run build
```

#### Serveur web (Apache/Nginx)
1. Copiez le contenu de `dist/` vers votre serveur web
2. Configurez les redirections pour le routing React
3. Activez HTTPS pour la sécurité

#### Variables d'environnement production
```env
NODE_ENV=production
OPENAI_API_KEY=votre_clé_production
PORT=3001
```

### Personnalisation

#### Modifier les couleurs
Éditez `cyber-aware-app/src/App.css` :
```css
:root {
  --primary-color: #4f46e5;    /* Bleu principal */
  --secondary-color: #7c3aed;  /* Violet secondaire */
  --accent-color: #06b6d4;     /* Cyan accent */
}
```

#### Ajouter du contenu
1. **Nouvelles leçons** : Modifiez `Formation.jsx`
2. **Nouveaux quiz** : Modifiez `Quiz.jsx`
3. **Nouvelles certifications** : Modifiez `Certifications.jsx`

#### Changer les textes
Tous les textes sont dans les fichiers `.jsx` des composants.

---

## 💡 Conseils d'utilisation avancée

### Pour les formateurs

#### Suivi des apprenants
- Encouragez la prise de notes pendant les leçons
- Organisez des discussions après chaque module
- Utilisez les quiz comme évaluations formatives
- Créez des défis basés sur les certifications

#### Animation de sessions
1. **Introduction** : Présentation de la plateforme (10 min)
2. **Formation guidée** : Première leçon ensemble (20 min)
3. **Travail autonome** : Exploration libre (30 min)
4. **Quiz collectif** : Test en groupe (15 min)
5. **Débriefing** : Discussion des apprentissages (15 min)

### Pour les apprenants

#### Stratégie d'apprentissage
1. **Planification** : 1-2 leçons par session
2. **Prise de notes** : Résumé des points clés
3. **Application** : Mise en pratique immédiate
4. **Révision** : Relecture avant les quiz
5. **Évaluation** : Auto-évaluation régulière

#### Utilisation du chatbot
- Posez des questions spécifiques
- Demandez des exemples concrets
- Explorez des scénarios réels
- Clarifiez les concepts difficiles

### Pour les administrateurs

#### Maintenance régulière
```bash
# Mise à jour des dépendances
npm update

# Vérification de sécurité
npm audit
npm audit fix

# Sauvegarde des données
cp -r cyber-aware-app/ backup/
cp -r CyberAware_Backend/ backup/
```

#### Monitoring
- Surveillez l'utilisation des ressources
- Vérifiez les logs d'erreur
- Testez régulièrement toutes les fonctionnalités
- Sauvegardez la configuration

#### Évolutions
- Ajoutez de nouveaux contenus régulièrement
- Mettez à jour les informations de cybersécurité
- Intégrez les retours des utilisateurs
- Planifiez les améliorations techniques

---

## 🎓 Conclusion

Vous disposez maintenant d'un guide complet pour utiliser CyberAware efficacement. Cette plateforme que vous avez développée offre une expérience d'apprentissage riche et interactive pour la sensibilisation à la cybersécurité.

### Points clés à retenir

1. **Démarrage simple** : `./start-cyberaware.sh`
2. **Arrêt propre** : `./stop-cyberaware.sh`
3. **Accès local** : http://localhost:5173
4. **Progression sauvegardée** : Automatiquement dans le navigateur
5. **Support complet** : Documentation technique disponible

### Ressources supplémentaires

- **Documentation technique** : `PACKAGE_TECHNIQUE_CYBERAWARE.md`
- **Guide de livraison** : `LIVRAISON_FINALE.md`
- **README principal** : `README_CYBERAWARE.md`
- **Code source** : Tous les fichiers sont modifiables

### Support

En cas de problème, consultez :
1. Ce tutoriel pour les problèmes courants
2. La documentation technique pour les aspects avancés
3. Les logs du serveur pour le diagnostic
4. La console du navigateur pour les erreurs frontend

**Bonne utilisation de votre plateforme CyberAware !** 🚀

---

**Développé par Frank - Version 1.0 - Juillet 2025**

