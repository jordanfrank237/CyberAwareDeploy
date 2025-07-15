# Rapport Individuel de Projet Pédagogique

## Projet : Plateforme interactive de sensibilisation aux cyberattaques & Sécurisation des données avec la Blockchain (Cyber Aware)

### 1. Présentation Personnelle : Mon Rôle au Cœur de la Cybersécurité

*   **Nom, Prénom :** [Votre Nom, Votre Prénom]
*   **Classe et Spécialité :** Cybersécurité et Cloud
*   **Rôle(s) joué(s) dans le projet :** En tant que membre de l'équipe, ma contribution s'est principalement axée sur les aspects liés à la sécurité de la solution, à l'identification des risques potentiels et à la proposition de mesures de protection. J'ai également participé activement à la veille technologique spécifique à la cybersécurité et à la réflexion sur les évolutions futures du projet sous cet angle.
*   **Synthèse de ma mission et implication dans le projet :** Ma mission principale a été de garantir la robustesse et la sécurité de la plateforme Cyber Aware. Cela a impliqué une analyse continue des vulnérabilités potentielles, depuis la conception de l'architecture jusqu'à l'intégration des différentes briques technologiques. J'ai été impliqué dans la définition des bonnes pratiques de sécurité à implémenter, notamment pour l'authentification des utilisateurs, le chiffrement des données et la protection contre les attaques courantes. Mon implication a également couvert la participation aux revues de code pour identifier les failles de sécurité et la proposition de solutions correctives. J'ai travaillé en étroite collaboration avec les développeurs pour m'assurer que les aspects de sécurité soient intégrés dès les premières phases du développement, et non comme une réflexion après coup.

---




## 2. Contribution au Projet : Mon Empreinte Sécurité

Ma contribution au projet **Cyber Aware** s'est manifestée à travers plusieurs tâches clés, principalement orientées vers la cybersécurité, mais également en support du développement général de la solution, garantissant ainsi la robustesse et la fiabilité de notre plateforme.

### 2.1. Tâches Réalisées Personnellement : Une Approche Proactive

*   **Analyse des Risques de Sécurité :** J'ai mené une analyse approfondie des risques de sécurité potentiels pour chaque composant de la plateforme (frontend, backend, base de données, intégration blockchain, chatbot). Cela a inclus l'identification des menaces courantes (OWASP Top 10), des vulnérabilités spécifiques aux technologies choisies (Node.js, React, MongoDB, Ethereum) et des scénarios d'attaque possibles, permettant d'anticiper les failles.
*   **Définition et Implémentation des Mesures de Protection :** Sur la base de l'analyse des risques, j'ai proposé et documenté des mesures de protection adaptées, et j'ai activement participé à leur implémentation. Cela a couvert :
    *   **Authentification et Autorisation :** Recommandations pour l'implémentation de l'authentification multi-facteurs (MFA), l'utilisation de JSON Web Tokens (JWT) pour la gestion des sessions, et la mise en place de contrôles d'accès basés sur les rôles, pour une sécurité renforcée.
    *   **Chiffrement des Données :** Spécification et mise en œuvre des exigences de chiffrement pour les données sensibles au repos (dans MongoDB) et en transit (via HTTPS), assurant la confidentialité des informations.
    *   **Sécurisation des API :** Directives pour la validation des entrées, la prévention des injections (SQL, NoSQL, XSS) et la gestion des erreurs pour éviter la divulgation d'informations sensibles, rendant nos API plus résilientes.
    *   **Sécurité Blockchain :** Analyse des risques liés aux smart contracts (reentrancy, integer overflow, etc.) et proposition de bonnes pratiques de codage Solidity, ainsi que des recommandations pour la sécurisation des clés privées et des interactions avec les nœuds Ethereum, garantissant l'intégrité de nos transactions.
*   **Veille Technologique en Cybersécurité :** J'ai activement participé à la veille technologique, en me concentrant sur les dernières menaces, les vulnérabilités découvertes et les solutions de sécurité émergentes. Cette veille a alimenté nos discussions sur les choix techniques et les stratégies de défense, nous permettant de rester à la pointe.
*   **Tests de Sécurité Préliminaires :** J'ai effectué des tests de sécurité manuels et automatisés sur certaines parties du code et de l'infrastructure, notamment des scans de vulnérabilité et des tests d'injection simples, pour valider l'efficacité des mesures de protection implémentées et identifier les points faibles.
*   **Documentation Sécurité :** J'ai contribué à la rédaction de la section sécurité du cahier des charges détaillé et du rapport de groupe, en y intégrant les aspects liés à la protection des données et à la résilience de la plateforme, assurant une documentation complète et précise.
*   **Participation aux Réunions Scrum :** J'ai activement participé aux Daily Scrums, Sprint Plannings et Rétrospectives, apportant ma perspective sécurité et aidant à identifier les obstacles potentiels liés à la sécurité, favorisant une approche proactive.

### 2.2. Défis Rencontrés et Solutions Apportées : Apprendre et Progresser

*   **Défis :** L'un des principaux défis a été d'intégrer les considérations de sécurité dès le début du cycle de développement (Security by Design) plutôt que de les ajouter a posteriori. La complexité de la blockchain a également représenté un défi, notamment pour comprendre les vecteurs d'attaque spécifiques aux smart contracts et aux transactions on-chain, nécessitant une courbe d'apprentissage rapide.
*   **Solutions :** Pour surmonter ces défis, j'ai organisé des sessions de sensibilisation à la sécurité pour l'équipe de développement, soulignant l'importance des bonnes pratiques de codage sécurisé. J'ai également effectué des recherches approfondies sur les audits de smart contracts et les vulnérabilités connues dans l'écosystème Ethereum, ce qui a permis d'adapter nos recommandations. La collaboration étroite avec Oscar (Développeur Front/Back) a été essentielle pour traduire les exigences de sécurité en implémentations techniques concrètes, assurant une synergie efficace.

### 2.3. Outils, Langages, Environnements Utilisés : Mon Arsenal Technique

*   **Outils d'Analyse de Vulnérabilités :** Utilisation d'outils open-source pour des scans de base (ex: OWASP ZAP pour les applications web, Truffle Security pour les smart contracts), me permettant d'identifier les failles potentielles.
*   **Langages :** Compréhension approfondie des langages utilisés dans le projet (JavaScript, Solidity) pour analyser le code source et identifier les failles potentielles, garantissant une revue de code efficace.
*   **Environnements :** Familiarisation avec l'environnement de développement (Node.js, React) et les outils de gestion de projet (Jira) pour suivre les tâches liées à la sécurité, assurant une intégration fluide dans le workflow de l'équipe.

Ma contribution a visé à faire de **Cyber Aware** non seulement une plateforme éducative, mais aussi un exemple de solution conçue avec une forte conscience des enjeux de cybersécurité, reflétant mon engagement pour un cyberespace plus sûr.


## 3. Analyse du Projet selon votre Spécialité (Cybersécurité) : Une Perspective Critique

En tant que spécialiste en cybersécurité, mon analyse du projet **Cyber Aware** se concentre sur l'identification des risques, la pertinence des mesures de protection mises en place et les bonnes pratiques de sécurité adaptées au contexte de la plateforme, afin de garantir sa robustesse et sa résilience face aux menaces.

### 3.1. Identification des Risques de Sécurité Potentiels : Anticiper les Menaces

Le projet **Cyber Aware**, de par sa nature (plateforme web interactive, manipulation de données utilisateur, intégration blockchain), est exposé à une variété de risques de sécurité. J'ai identifié les risques potentiels suivants, qui nécessitent une attention particulière :

*   **Risques liés à l'Application Web :**
    *   **Injection de Code (XSS, NoSQL Injection) :** Des attaquants pourraient tenter d'injecter du code malveillant dans les champs de saisie (formulaires, chatbot) pour compromettre les sessions des utilisateurs ou manipuler la base de données, menaçant l'intégrité des données.
    *   **Authentification et Gestion de Session Brisées :** Des failles dans le système d'authentification (JWT) pourraient permettre à des attaquants de prendre le contrôle de comptes utilisateurs, compromettant la confidentialité.
    *   **Contrôle d'Accès Brisé :** Un manque de vérification des droits d'accès pourrait permettre à un utilisateur d'accéder à des fonctionnalités ou des données qui ne lui sont pas destinées, violant le principe du moindre privilège.
    *   **Exposition de Données Sensibles :** Une mauvaise configuration ou des erreurs de code pourraient entraîner la divulgation d'informations sensibles (données personnelles, résultats des quiz, etc.), avec des conséquences graves pour la vie privée.

*   **Risques liés à l'Intégration Blockchain :**
    *   **Vulnérabilités des Smart Contracts :** Les smart contracts sur Ethereum peuvent contenir des failles (reentrancy, integer overflow, etc.) qui pourraient être exploitées pour détourner des fonds (si des paiements étaient implémentés) ou corrompre les données enregistrées, menaçant l'immuabilité.
    *   **Sécurité des Clés Privées :** La compromission des clés privées utilisées par le backend pour interagir avec la blockchain pourrait permettre à un attaquant de prendre le contrôle des smart contracts ou de signer des transactions frauduleuses, compromettant l'intégrité du système.
    *   **Attaques sur le Réseau Ethereum :** Bien que le réseau Ethereum soit sécurisé, des attaques comme le 51% attack (bien que très coûteuses et peu probables) ou des attaques de congestion pourraient affecter la disponibilité de notre service, impactant l'accès aux données.

*   **Risques liés à l'Intégration de l'API OpenAI :**
    *   **Injection de Prompts :** Des utilisateurs malveillants pourraient tenter de manipuler le chatbot en lui fournissant des prompts conçus pour contourner ses instructions de sécurité, générer des contenus inappropriés ou obtenir des informations sensibles sur le fonctionnement interne de la plateforme, menaçant la fiabilité du chatbot.
    *   **Abus de l'API :** Une utilisation excessive de l'API pourrait entraîner des coûts élevés et un déni de service pour les autres utilisateurs, impactant la disponibilité du service.

### 3.2. Propositions de Mesures de Protection : Bâtir une Défense Robuste

Pour mitiger ces risques, j'ai proposé un ensemble de mesures de protection, dont certaines ont été intégrées dans le développement du MVP, et d'autres sont des recommandations pour les phases futures :

*   **Authentification Robuste :**
    *   **Mise en place de l'Authentification Multi-Facteurs (MFA) :** Pour renforcer la sécurité des comptes, notamment pour l'accès au coffre-fort numérique, ajoutant une couche de sécurité essentielle.
    *   **Utilisation de JWT avec des délais d'expiration courts :** Pour limiter la durée de vie des sessions et réduire les risques en cas de vol de token, minimisant ainsi la fenêtre d'opportunité pour les attaquants.

*   **Chiffrement des Données :**
    *   **Chiffrement de bout en bout :** Utilisation de HTTPS (SSL/TLS) pour chiffrer toutes les communications entre le client et le serveur, protégeant les données en transit.
    *   **Chiffrement au repos :** Chiffrement des données sensibles stockées dans la base de données MongoDB pour les protéger en cas d'accès non autorisé à la base de données, assurant la confidentialité des informations stockées.

*   **Sécurisation du Code :**
    *   **Validation des Entrées :** Validation systématique de toutes les données provenant des utilisateurs pour prévenir les injections (XSS, NoSQL), renforçant la résilience de l'application.
    *   **Utilisation de bibliothèques de sécurité :** Intégration de bibliothèques comme Helmet.js pour Node.js afin de configurer des en-têtes HTTP de sécurité, ajoutant des protections contre les attaques courantes.
    *   **Audits de Smart Contracts :** Pour une version de production, il serait impératif de faire auditer les smart contracts par des experts en sécurité blockchain pour identifier et corriger les vulnérabilités, garantissant la fiabilité des transactions on-chain.

*   **Protection de l'API OpenAI :**
    *   **Filtrage des Prompts :** Mise en place de filtres pour détecter et bloquer les prompts malveillants, assurant l'intégrité des interactions avec le chatbot.
    *   **Limitation du Taux d'Appels :** Implémentation de quotas d'utilisation par utilisateur pour prévenir les abus et contrôler les coûts, garantissant la disponibilité du service.

### 3.3. Bonnes Pratiques de Sécurité Adaptées au Projet : Une Culture de la Sécurité

Au-delà des mesures techniques, j'ai insisté sur l'importance d'adopter une culture de la sécurité au sein de l'équipe, intégrant la sécurité à chaque étape du développement :

*   **Principe du Moindre Privilège :** Chaque composant de l'application ne doit avoir que les permissions strictement nécessaires à son fonctionnement, minimisant la surface d'attaque.
*   **Security by Design :** Intégrer la sécurité dès la phase de conception, et non comme une réflexion après coup. Cela implique de penser aux risques potentiels à chaque étape du développement, assurant une sécurité intrinsèque.
*   **Mises à Jour Régulières :** Maintenir à jour toutes les dépendances (bibliothèques, frameworks) pour bénéficier des derniers correctifs de sécurité, protégeant contre les vulnérabilités connues.
*   **Journalisation et Surveillance :** Mettre en place un système de journalisation (logging) détaillé pour tracer les événements de sécurité et permettre une analyse post-incident, facilitant la détection et la réponse aux attaques.

En appliquant ces principes et mesures, **Cyber Aware** peut non seulement sensibiliser ses utilisateurs à la cybersécurité, mais aussi démontrer par l'exemple ce qu'est une application conçue avec une forte exigence de sécurité, renforçant ainsi la confiance des utilisateurs.


## 4. Veille Technologique en lien avec votre Spécialité (Cybersécurité) : Rester à la Pointe de l'Innovation

La cybersécurité est un domaine en constante évolution, où de nouvelles menaces et technologies émergent quotidiennement. Une veille technologique active est donc indispensable pour rester informé et anticiper les défis futurs. Dans le cadre du projet **Cyber Aware**, ma veille s'est concentrée sur les outils, les technologies émergentes et les avancées récentes pertinentes pour la protection des systèmes et des données, afin de garantir la pertinence et l'efficacité de nos solutions.

### 4.1. Outils ou Technologies Émergentes dans votre Domaine : Les Tendances qui Façonnent l'Avenir

*   **Sécurité des Applications Cloud-Native (CNAPP) :** Avec l'adoption croissante du cloud, les plateformes CNAPP intègrent la gestion de la posture de sécurité du cloud (CSPM), la protection des charges de travail cloud (CWPP) et la gestion des droits d'infrastructure cloud (CIEM) pour offrir une visibilité et un contrôle complets sur les environnements cloud. C'est une évolution majeure pour sécuriser les applications déployées sur AWS ou Heroku, et une considération essentielle pour l'évolutivité de Cyber Aware.
*   **Sécurité de l'IA et du Machine Learning (MLSecOps) :** L'intégration de l'IA (via OpenAI API) dans notre chatbot soulève des questions de sécurité spécifiques. Le MLSecOps vise à sécuriser le cycle de vie complet des modèles de ML, de la phase d'entraînement à la production, en protégeant contre les attaques par empoisonnement des données, les attaques adversariales et les fuites de modèles. C'est un domaine crucial pour garantir la fiabilité et la sécurité de notre chatbot, et un axe d'amélioration continue.
*   **Confidential Computing :** Cette technologie permet de protéger les données en cours d'utilisation en les traitant dans un environnement d'exécution de confiance (TEE), même lorsque le système d'exploitation ou l'hyperviseur est compromis. Pour des données sensibles, cela pourrait offrir un niveau de protection supplémentaire au-delà du chiffrement au repos et en transit, renforçant la confidentialité des informations critiques.
*   **Zero Trust Architecture (ZTA) :** Le principe "Ne jamais faire confiance, toujours vérifier" est de plus en plus pertinent. L'implémentation d'une architecture Zero Trust signifie que chaque utilisateur, appareil ou application doit être authentifié et autorisé avant d'accéder aux ressources, même s'il se trouve à l'intérieur du réseau. Cela renforcerait considérablement la sécurité de notre plateforme, en adoptant une approche proactive de la sécurité.

### 4.2. Avancées Récentes Pertinentes pour le Projet : Les Dernières Innovations

*   **Évolution des Attaques de Phishing :** Les attaques de phishing deviennent de plus en plus sophistiquées, utilisant l'IA pour générer des e-mails hyper-personnalisés (spear phishing) et des sites web miroirs quasi-indiscernables. Cela souligne l'importance de notre simulateur de phishing et la nécessité de le maintenir à jour avec les dernières techniques d'attaque, pour une sensibilisation toujours plus efficace.
*   **Sécurité des Smart Contracts :** Des outils d'audit automatisés pour les smart contracts (comme Slither, MythX) et des plateformes de bug bounty dédiées à la blockchain (Immunefi, HackenProof) sont de plus en plus matures. Ces avancées sont cruciales pour garantir la sécurité de notre module blockchain et minimiser les risques de vulnérabilités, assurant l'intégrité des transactions.
*   **Authentification sans Mot de Passe (Passwordless) :** Des technologies comme FIDO2 et WebAuthn gagnent du terrain, offrant des alternatives plus sécurisées et conviviales aux mots de passe traditionnels. L'intégration de ces méthodes pourrait améliorer significativement l'expérience utilisateur et la sécurité de l'authentification sur Cyber Aware, simplifiant l'accès tout en renforçant la protection.
*   **Réglementations sur la Protection des Données :** L'évolution constante des réglementations (RGPD, CCPA, etc.) impose des exigences strictes en matière de protection des données personnelles. Notre approche de chiffrement et de stockage décentralisé via IPFS et blockchain s'aligne avec ces principes, offrant une meilleure conformité et une protection accrue de la vie privée.

### 4.3. Sources Consultées : Les Fondations de ma Veille

Ma veille technologique s'est appuyée sur une diversité de sources fiables et reconnues dans le domaine de la cybersécurité, garantissant la pertinence et la crédibilité de mes analyses :

*   **Rapports d'organismes de sécurité :** Rapports annuels de l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information), de l'ENISA (European Union Agency for Cybersecurity), de l'OWASP (Open Web Application Security Project), fournissant des analyses approfondies des menaces et des vulnérabilités.
*   **Blogs et publications de recherche :** Articles de blogs spécialisés (KrebsOnSecurity, SANS Internet Storm Center), publications de chercheurs en sécurité et de grandes entreprises technologiques (Google Project Zero, Microsoft Security), offrant des perspectives techniques et des analyses d'incidents.
*   **Documentation officielle des technologies :** Documentation des frameworks et outils (Ethereum, Solidity, IPFS, OpenAI API) pour comprendre les mécanismes de sécurité intégrés et les bonnes pratiques, assurant une compréhension technique solide.
*   **Conférences et webinaires :** Participation à des conférences sur la cybersécurité (Black Hat, DEF CON, FIC) et visionnage de webinaires sur les dernières tendances et vulnérabilités, permettant de rester informé des dernières avancées.
*   **Plateformes de Bug Bounty :** Suivi des rapports de vulnérabilités publiés sur des plateformes comme HackerOne ou Bugcrowd pour comprendre les vecteurs d'attaque récents et les méthodes d'exploitation, nourrissant une approche proactive de la sécurité.

Cette veille continue me permet de rester à la pointe des connaissances en cybersécurité et d'apporter des recommandations pertinentes pour renforcer la sécurité de **Cyber Aware**, contribuant ainsi à un cyberespace plus sûr et plus résilient.


## 5. Vision Personnelle et Perspectives : Façonner l'Avenir de la Cybersécurité

Ma spécialité en cybersécurité me permet d'avoir une vision critique et prospective sur l'évolution du projet **Cyber Aware**. Au-delà des fonctionnalités actuelles, j'entrevois plusieurs pistes d'amélioration et de développement futur qui renforceraient significativement la valeur et la résilience de la plateforme, la positionnant comme un acteur clé dans la sensibilisation et la formation en cybersécurité.

### 5.1. Recommandations pour faire évoluer le projet grâce à votre spécialité : Des Innovations Stratégiques

*   **Intégration d'un SIEM/SOAR simplifié :** Pour les entreprises ou les utilisateurs avancés, l'intégration d'un système de gestion des informations et des événements de sécurité (SIEM) ou d'orchestration, d'automatisation et de réponse de sécurité (SOAR) simplifié pourrait permettre de corréler les événements de sécurité (tentatives de phishing détectées, accès non autorisés au coffre-fort) et d'automatiser certaines réponses. Cela transformerait la plateforme en un outil proactif de détection et de réponse aux incidents, offrant une valeur ajoutée considérable.
*   **Développement de Scénarios d'Attaque Avancés :** Enrichir le simulateur de phishing avec des scénarios plus complexes, incluant l'ingénierie sociale vocale (vishing) ou par SMS (smishing), et des attaques ciblées (spear phishing) basées sur des informations collectées sur les utilisateurs (avec leur consentement). Cela permettrait une sensibilisation plus réaliste et personnalisée, préparant mieux les utilisateurs aux menaces réelles.
*   **Audit de Sécurité Continu (DevSecOps) :** Mettre en place des pipelines DevSecOps pour intégrer des outils d'analyse de code statique (SAST) et dynamique (DAST) directement dans le processus de développement. Cela permettrait de détecter les vulnérabilités dès l'écriture du code et de garantir une sécurité continue de la plateforme, assurant une robustesse constante.
*   **Gestion des Identités Décentralisée (DID) :** Explorer l'utilisation de la blockchain pour la gestion des identités décentralisées. Les utilisateurs pourraient contrôler leurs propres identités numériques et leurs données d'authentification, réduisant ainsi la dépendance aux systèmes centralisés et améliorant la confidentialité, pour une souveraineté numérique accrue.

### 5.2. Améliorations Techniques Envisagées : Vers une Performance Optimale

*   **Contrats Intelligents Auditables et Formellement Vérifiés :** Pour le module blockchain, il serait crucial de soumettre les smart contracts à des audits de sécurité approfondis par des tiers indépendants et d'explorer la vérification formelle. Cela permettrait de prouver mathématiquement l'absence de bugs et de vulnérabilités, un niveau de sécurité supérieur aux tests traditionnels, garantissant une fiabilité inégalée.
*   **Utilisation de ZK-SNARKs pour la Confidentialité :** Pour le coffre-fort numérique, l'intégration de preuves à divulgation nulle de connaissance (ZK-SNARKs) pourrait permettre aux utilisateurs de prouver la possession de certains documents ou informations sans révéler le contenu réel de ces documents. Cela renforcerait considérablement la confidentialité, offrant une protection maximale des données.
*   **Optimisation des Coûts et Performances Blockchain :** Pour une adoption à grande échelle, il serait nécessaire d'explorer des solutions de couche 2 (Layer 2) pour Ethereum (comme Optimism ou Arbitrum) ou d'autres blockchains plus performantes et moins coûteuses en frais de transaction. Cela rendrait le module blockchain plus accessible et utilisable pour un public plus large, favorisant son adoption.
*   **Renforcement de la Sécurité de l'API OpenAI :** Au-delà du filtrage des prompts, mettre en place des mécanismes de détection d'anomalies dans les requêtes et les réponses du chatbot pour identifier et bloquer les tentatives d'abus ou de contournement des règles de sécurité, assurant l'intégrité et la fiabilité du chatbot.

### 5.3. Idées de Développement Futur en lien avec votre Domaine : Élargir l'Horizon

*   **Plateforme de Bug Bounty Intégrée :** Lancer un programme de bug bounty directement sur la plateforme, invitant la communauté des chercheurs en sécurité à identifier et rapporter les vulnérabilités en échange de récompenses. Cela renforcerait la sécurité de la plateforme tout en engageant la communauté, créant un écosystème de sécurité collaboratif.
*   **Module de Réponse aux Incidents :** Développer un module permettant aux utilisateurs de simuler des réponses à des incidents de sécurité (ex: comment réagir face à un ransomware, comment isoler un système compromis). Cela irait au-delà de la simple sensibilisation pour offrir une formation pratique à la gestion de crise, préparant les utilisateurs aux situations réelles.
*   **Intégration avec des Outils de Threat Intelligence :** Connecter la plateforme à des flux de renseignement sur les menaces (Threat Intelligence) pour fournir des alertes en temps réel sur les nouvelles campagnes de phishing, les vulnérabilités zero-day ou les malwares émergents. Cela permettrait aux utilisateurs de rester informés des dernières menaces, assurant une protection proactive.
*   **Formation Certifiante Blockchain Security :** Proposer des parcours de formation avancés et certifiants sur la sécurité des smart contracts et des applications décentralisées, capitalisant sur notre expertise interne et le module blockchain de la plateforme, pour former les futurs experts en cybersécurité.

Ces perspectives, ancrées dans ma spécialité en cybersécurité, visent à transformer **Cyber Aware** en une référence non seulement pour la sensibilisation, mais aussi pour la formation avancée et la mise en œuvre de solutions de sécurité innovantes. Elles reflètent mon engagement à contribuer à un cyberespace plus sûr et plus résilient.

