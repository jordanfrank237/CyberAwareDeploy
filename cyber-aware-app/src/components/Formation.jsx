import React, { useState } from 'react';

const Formation = ({ progress, onNavigate, onUpdateProgress }) => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      title: "Introduction à la Cybersécurité",
      description: "Découvrez les concepts fondamentaux de la cybersécurité et pourquoi elle est cruciale dans notre monde numérique.",
      duration: "15 min",
      content: `
        <h3>Qu'est-ce que la cybersécurité ?</h3>
        <p>La cybersécurité est la pratique de protection des systèmes, réseaux et programmes contre les attaques numériques. Ces cyberattaques visent généralement à accéder, modifier ou détruire des informations sensibles, extorquer de l'argent aux utilisateurs ou interrompre les processus commerciaux normaux.</p>
        
        <h3>Pourquoi est-ce important ?</h3>
        <ul>
          <li>Protection des données personnelles</li>
          <li>Sécurité financière</li>
          <li>Continuité des activités</li>
          <li>Réputation et confiance</li>
        </ul>
        
        <h3>Types de menaces courantes</h3>
        <p>• Malware (virus, trojans, ransomware)<br>
        • Phishing et ingénierie sociale<br>
        • Attaques par déni de service (DDoS)<br>
        • Violations de données</p>
      `
    },
    {
      id: 2,
      title: "Mots de passe sécurisés",
      description: "Apprenez à créer et gérer des mots de passe robustes pour protéger vos comptes.",
      duration: "12 min",
      content: `
        <h3>Caractéristiques d'un mot de passe fort</h3>
        <ul>
          <li>Au moins 12 caractères</li>
          <li>Mélange de majuscules, minuscules, chiffres et symboles</li>
          <li>Pas de mots du dictionnaire</li>
          <li>Unique pour chaque compte</li>
        </ul>
        
        <h3>Gestionnaires de mots de passe</h3>
        <p>Utilisez des outils comme LastPass, 1Password ou Bitwarden pour générer et stocker des mots de passe uniques.</p>
        
        <h3>Authentification à deux facteurs (2FA)</h3>
        <p>Ajoutez une couche de sécurité supplémentaire avec des codes SMS, applications d'authentification ou clés de sécurité physiques.</p>
      `
    },
    {
      id: 3,
      title: "Reconnaissance du Phishing",
      description: "Identifiez et évitez les tentatives de phishing et d'ingénierie sociale.",
      duration: "18 min",
      content: `
        <h3>Qu'est-ce que le phishing ?</h3>
        <p>Le phishing est une technique d'escroquerie utilisée pour obtenir des informations sensibles en se faisant passer pour une entité de confiance.</p>
        
        <h3>Signaux d'alarme</h3>
        <ul>
          <li>Urgence artificielle</li>
          <li>Demandes d'informations personnelles</li>
          <li>Liens suspects</li>
          <li>Expéditeurs inconnus</li>
          <li>Fautes d'orthographe</li>
        </ul>
        
        <h3>Comment se protéger</h3>
        <p>• Vérifiez toujours l'expéditeur<br>
        • Ne cliquez pas sur les liens suspects<br>
        • Contactez directement l'organisation<br>
        • Utilisez des signets pour les sites importants</p>
      `
    },
    {
      id: 4,
      title: "Sécurité des réseaux Wi-Fi",
      description: "Protégez-vous sur les réseaux publics et sécurisez votre réseau domestique.",
      duration: "14 min",
      content: `
        <h3>Risques des réseaux publics</h3>
        <p>Les réseaux Wi-Fi publics sont souvent non sécurisés et permettent aux attaquants d'intercepter vos données.</p>
        
        <h3>Bonnes pratiques</h3>
        <ul>
          <li>Utilisez un VPN</li>
          <li>Évitez les transactions sensibles</li>
          <li>Désactivez le partage de fichiers</li>
          <li>Vérifiez les certificats SSL</li>
        </ul>
        
        <h3>Sécurisation du réseau domestique</h3>
        <p>• Changez les mots de passe par défaut<br>
        • Utilisez le chiffrement WPA3<br>
        • Mettez à jour le firmware<br>
        • Créez un réseau invité</p>
      `
    },
    {
      id: 5,
      title: "Sauvegardes et récupération",
      description: "Stratégies de sauvegarde pour protéger vos données importantes.",
      duration: "16 min",
      content: `
        <h3>Règle 3-2-1</h3>
        <p>3 copies de vos données, sur 2 supports différents, avec 1 copie hors site.</p>
        
        <h3>Types de sauvegardes</h3>
        <ul>
          <li>Sauvegarde complète</li>
          <li>Sauvegarde incrémentielle</li>
          <li>Sauvegarde différentielle</li>
        </ul>
        
        <h3>Solutions de sauvegarde</h3>
        <p>• Cloud (Google Drive, Dropbox, OneDrive)<br>
        • Disques externes<br>
        • NAS (Network Attached Storage)<br>
        • Services de sauvegarde automatisés</p>
      `
    },
    {
      id: 6,
      title: "Sécurité mobile",
      description: "Protégez vos appareils mobiles et vos données personnelles.",
      duration: "13 min",
      content: `
        <h3>Menaces mobiles</h3>
        <ul>
          <li>Applications malveillantes</li>
          <li>Réseaux Wi-Fi non sécurisés</li>
          <li>Vol ou perte d'appareil</li>
          <li>Attaques par SMS (smishing)</li>
        </ul>
        
        <h3>Mesures de protection</h3>
        <p>• Verrouillez votre écran<br>
        • Téléchargez uniquement depuis les stores officiels<br>
        • Activez la localisation à distance<br>
        • Chiffrez vos données<br>
        • Mettez à jour régulièrement</p>
      `
    },
    {
      id: 7,
      title: "Navigation sécurisée",
      description: "Naviguez en toute sécurité sur Internet et évitez les sites malveillants.",
      duration: "11 min",
      content: `
        <h3>Indicateurs de sécurité</h3>
        <ul>
          <li>Certificats SSL (HTTPS)</li>
          <li>Cadenas vert dans la barre d'adresse</li>
          <li>Réputation du site</li>
          <li>Avis et commentaires</li>
        </ul>
        
        <h3>Outils de protection</h3>
        <p>• Bloqueurs de publicités<br>
        • Extensions de sécurité<br>
        • Antivirus avec protection web<br>
        • DNS sécurisés</p>
      `
    },
    {
      id: 8,
      title: "Réponse aux incidents",
      description: "Que faire en cas de compromission de sécurité ou d'attaque.",
      duration: "20 min",
      content: `
        <h3>Étapes immédiates</h3>
        <ol>
          <li>Isolez l'appareil compromis</li>
          <li>Changez tous les mots de passe</li>
          <li>Contactez votre banque si nécessaire</li>
          <li>Documentez l'incident</li>
        </ol>
        
        <h3>Récupération</h3>
        <p>• Analysez l'étendue des dégâts<br>
        • Restaurez depuis les sauvegardes<br>
        • Renforcez la sécurité<br>
        • Surveillez les activités suspectes</p>
        
        <h3>Prévention future</h3>
        <p>Tirez des leçons de l'incident pour améliorer votre posture de sécurité.</p>
      `
    }
  ];

  const handleLessonComplete = (lessonId) => {
    onUpdateProgress('lesson', lessonId);
    setSelectedLesson(null);
  };

  if (selectedLesson) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    return (
      <div className="formation-page">
        <div className="formation-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            animation: 'fadeIn 0.8s ease-out'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <button 
                className="nav-button"
                onClick={() => setSelectedLesson(null)}
              >
                ← Retour aux leçons
              </button>
            </div>
            
            <div className="lesson-number" style={{ marginBottom: '1rem' }}>
              {lesson.id}
            </div>
            
            <h1 style={{ 
              fontSize: '2rem', 
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {lesson.title}
            </h1>
            
            <div style={{ 
              color: '#94a3b8', 
              marginBottom: '2rem',
              fontSize: '1.1rem'
            }}>
              Durée estimée: {lesson.duration}
            </div>
            
            <div 
              style={{ 
                color: '#e2e8f0',
                lineHeight: '1.8',
                fontSize: '1rem'
              }}
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button 
                className="quiz-button"
                onClick={() => handleLessonComplete(lesson.id)}
                style={{ 
                  padding: '1rem 2rem',
                  fontSize: '1.1rem'
                }}
              >
                ✅ Marquer comme terminé
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="formation-page">
      <div className="formation-header">
        <h1 className="formation-title">Formation Cybersécurité</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Apprenez à vous protéger contre les cyberattaques
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

      <div className="lessons-grid">
        {lessons.map((lesson) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          
          return (
            <div 
              key={lesson.id}
              className="lesson-card"
              onClick={() => setSelectedLesson(lesson.id)}
              style={{
                opacity: isCompleted ? 0.8 : 1,
                border: isCompleted ? '1px solid #10b981' : '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="lesson-number" style={{
                background: isCompleted ? 
                  'linear-gradient(135deg, #10b981, #059669)' : 
                  'linear-gradient(135deg, #3b82f6, #1d4ed8)'
              }}>
                {isCompleted ? '✓' : lesson.id}
              </div>
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.description}</p>
              <div className="lesson-duration">
                ⏱️ {lesson.duration}
                {isCompleted && <span style={{ marginLeft: '1rem', color: '#10b981' }}>✅ Terminé</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Formation;

