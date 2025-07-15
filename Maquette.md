**Maquette et Méthodologie -- Projet Cybersécurité**

**[1. Maquette fonctionnelle (UX/UI)]{.underline}**

**Objectif :**

Créer une expérience utilisateur claire, pédagogique et sécurisée,
adaptée aux différents profils d'utilisateurs : étudiants, employés ou
grand public.

**Outils utilisés :**

Figma

\-\--

🖥️ **Écrans clés + Explications UX/UI**

1.  ***Page d'accueil***

> ![](media/image1.jpeg){width="6.3in" height="4.679861111111111in"}

*Contenu :*

\- Titre percutant sur la sensibilisation à la cybersécurité

\- Présentation rapide des modules

\- Boutons \"Login\" / \"Se connecter\"

\- Section FAQ \"Pourquoi utiliser cette plateforme ?\"

\- CTA \"Commencer mon parcours\"

*Décisions UX :*

\- Simple navigation : on incite l'utilisateur à s'engager dès
l'arrivée.

\- Utilisation de couleurs associées à la sécurité et notre logo (bleu
sombre, violet, blanc) pour renforcer la confiance.

\- Responsive design pour mobile/tablette.

2.  ***Interface de connexion / inscription***

> ![](media/image2.jpeg){width="6.3in" height="4.574305555555555in"}

*Contenu :*

\- Formulaire de connexion

\- Lien vers l'inscription

\- Rappel des bénéfices de l'application

\- Option de connexion via compte Google (facultatif)

*Décisions UX :*

\- Sécurité au cœur de l'expérience = affichage de mentions comme "vos
données sont protégées".

\- Simplicité des formulaires pour éviter les abandons.

3.  ***Dashboard principal***

> ![](media/image3.jpeg){width="6.3in" height="4.585416666666666in"}

*Contenu :*

\- Des formations comportant plusieurs modules

\- Des quiz interactifs

\- Des certificats et badges

\- Un suivie de progression

\-

*Décisions UX :*

\- Apprentissage par immersion = mise en situation réaliste.

\- Feedback instantané = meilleure mémorisation.

\- Design ludique, didactique et proche de situations réelles.

🧭 **[2. Choix d'une méthodologie de gestion de projet]{.underline}**

***Étude des méthodes agiles :***

  Méthode    Avantages                                                 Inconvénients
  ---------- --------------------------------------------------------- -----------------------------------------------
  Scrum      Itérations courtes, équipe autonome, livraison continue   Nécessite un bon encadrement et rôles définis
  Kanban     Visibilité totale du workflow, flexibilité                Moins structuré, pas de cadence fixe
  Scrumban   Mix entre les deux, adapté aux projets hybrides           Peut être complexe sans expérience

🔑 ***Choix : Méthode SCRUM***

Justification :

\- Projet web avec plusieurs composantes (front, back, blockchain).

\- Permet de structurer le développement en itérations rapides (sprints
de 2 semaines).

\- Favorise la collaboration et la transparence dans l'équipe.

***Organisation d'équipe :***

  Membre     Rôle               Responsabilité
  ---------- ------------------ -------------------------------------------------------
  Jerold     Product Owner      Définit les besoins, priorise les user stories
  Walter     Scrum Master       Veille au respect du processus, supprime les blocages
  Oscar      Dev Front / Back   Implémente les fonctionnalités
  Jordan     QA Tester          Teste les fonctionnalités livrées
  Marshall   Designer UI/UX     Conception visuelle et expérience utilisateur

***Planning de suivi :***

\- Daily stand-up : 10 min chaque matin

\- Sprint planning : 1h en début de sprint

\- Rétrospective & review: Fin de chaque sprint (2 semaines)

***Outils de suivi :***

\- Jira pour visualiser les tâches

\- Teams pour communication interne

\- Office 365 Notion pour documentation

🧩 **[3. Définition du MVP (Minimum Viable Product)]{.underline}**

***Fonctionnalités essentielles :***

\- Authentification basique (email/mot de passe)

\- Accès à un module de formation interactif (ex : phishing)

\- Quiz simple avec résultats affichés

\- Enregistrement des résultats dans MongoDB

\- Intégration basique de la blockchain pour traçabilité
(lecture/écriture)

***Priorisation : Matrice MoSCoW***

  Fonctionnalités                       Type          Justificatif
  ------------------------------------- ------------- --------------------------------------------------
  Connexion / Inscription               Must have     Accès personnalisé aux parcours
  Module introductif de cybersécurité   Must have     Base pédagogique du projet
  Quiz interactif                       Must have     Mesure de l'acquisition des connaissances
  Blockchain (lecture/écriture)         Must have     Démonstration concrète de la valeur ajoutée tech
  Tableau de bord utilisateur           Should have   Suivi de progression important mais non vital
  Certificats de fin de module          Could have    Bonus motivant pour les utilisateurs
  Forum communautaire                   Won't do      Complexité additionnelle, faible impact initial

📅 **[4. Planification et organisation]{.underline}**

📊 ***Diagramme de Gantt simplifié (sur 8 semaines)***

![](media/image4.png){width="6.9375in" height="8.083333333333334in"}
