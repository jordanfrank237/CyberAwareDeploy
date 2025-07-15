import React, { useState } from 'react';

const Quiz = ({ progress, onNavigate, onUpdateProgress }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const quizzes = [
    {
      id: 1,
      title: "Quiz Mots de passe",
      description: "Testez vos connaissances sur la sécurité des mots de passe",
      questions: [
        {
          question: "Quelle est la longueur minimale recommandée pour un mot de passe sécurisé ?",
          options: ["6 caractères", "8 caractères", "12 caractères", "16 caractères"],
          correct: 2
        },
        {
          question: "Que signifie 2FA ?",
          options: ["Two Factor Authentication", "Two File Access", "Total File Authentication", "Two Factor Access"],
          correct: 0
        },
        {
          question: "Quelle est la meilleure pratique pour les mots de passe ?",
          options: ["Utiliser le même mot de passe partout", "Utiliser un mot de passe unique par compte", "Écrire ses mots de passe sur papier", "Utiliser seulement des chiffres"],
          correct: 1
        }
      ]
    },
    {
      id: 2,
      title: "Quiz Phishing",
      description: "Évaluez votre capacité à détecter les tentatives de phishing",
      questions: [
        {
          question: "Quel est le principal objectif du phishing ?",
          options: ["Vendre des produits", "Voler des informations personnelles", "Faire de la publicité", "Améliorer la sécurité"],
          correct: 1
        },
        {
          question: "Comment reconnaître un email de phishing ?",
          options: ["Il vient d'une adresse connue", "Il demande des informations urgentes", "Il a une belle mise en forme", "Il contient des images"],
          correct: 1
        },
        {
          question: "Que faire si vous recevez un email suspect ?",
          options: ["Cliquer sur le lien pour vérifier", "Répondre pour demander des clarifications", "Le supprimer immédiatement", "Le transférer à vos contacts"],
          correct: 2
        }
      ]
    },
    {
      id: 3,
      title: "Quiz Réseaux Wi-Fi",
      description: "Testez vos connaissances sur la sécurité des réseaux sans fil",
      questions: [
        {
          question: "Quel protocole de sécurité Wi-Fi est le plus sûr ?",
          options: ["WEP", "WPA", "WPA2", "WPA3"],
          correct: 3
        },
        {
          question: "Que devez-vous éviter sur un Wi-Fi public ?",
          options: ["Naviguer sur des sites web", "Consulter ses emails", "Effectuer des transactions bancaires", "Regarder des vidéos"],
          correct: 2
        },
        {
          question: "Qu'est-ce qu'un VPN ?",
          options: ["Very Private Network", "Virtual Private Network", "Verified Public Network", "Virtual Public Network"],
          correct: 1
        }
      ]
    },
    {
      id: 4,
      title: "Quiz Sauvegardes",
      description: "Vérifiez vos connaissances sur les stratégies de sauvegarde",
      questions: [
        {
          question: "Que signifie la règle 3-2-1 pour les sauvegardes ?",
          options: ["3 copies, 2 supports, 1 hors site", "3 fichiers, 2 dossiers, 1 disque", "3 jours, 2 semaines, 1 mois", "3 ordinateurs, 2 serveurs, 1 cloud"],
          correct: 0
        },
        {
          question: "À quelle fréquence devriez-vous faire des sauvegardes ?",
          options: ["Une fois par an", "Une fois par mois", "Une fois par semaine", "Régulièrement selon l'importance des données"],
          correct: 3
        },
        {
          question: "Quel est l'avantage du stockage cloud pour les sauvegardes ?",
          options: ["C'est gratuit", "C'est plus rapide", "C'est accessible de partout", "C'est automatique"],
          correct: 2
        }
      ]
    },
    {
      id: 5,
      title: "Quiz Général Cybersécurité",
      description: "Test complet sur tous les aspects de la cybersécurité",
      questions: [
        {
          question: "Qu'est-ce qu'un malware ?",
          options: ["Un logiciel de sécurité", "Un logiciel malveillant", "Un type de mot de passe", "Un protocole réseau"],
          correct: 1
        },
        {
          question: "Que faire en cas de suspicion de compromission de compte ?",
          options: ["Attendre et voir", "Changer immédiatement le mot de passe", "Supprimer le compte", "Ignorer"],
          correct: 1
        },
        {
          question: "Quel est le meilleur moyen de se tenir informé des menaces ?",
          options: ["Lire les journaux", "Suivre les actualités cybersécurité", "Demander à ses amis", "Attendre les alertes"],
          correct: 1
        }
      ]
    }
  ];

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < currentQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      // Marquer le quiz comme terminé si score >= 60%
      if ((score + (selectedAnswer === currentQuiz.questions[currentQuestion].correct ? 1 : 0)) >= Math.ceil(currentQuiz.questions.length * 0.6)) {
        onUpdateProgress('quiz', currentQuiz.id);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  if (currentQuiz && showResult) {
    const finalScore = score + (selectedAnswer === currentQuiz.questions[currentQuestion].correct ? 1 : 0);
    const percentage = Math.round((finalScore / currentQuiz.questions.length) * 100);
    const passed = percentage >= 60;

    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="quiz-header">
            <h1 className="quiz-title">Résultats du Quiz</h1>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              color: passed ? '#10b981' : '#ef4444'
            }}>
              {passed ? '🎉' : '😔'}
            </div>
            
            <h2 style={{ 
              fontSize: '2rem',
              marginBottom: '1rem',
              color: passed ? '#10b981' : '#ef4444'
            }}>
              {passed ? 'Félicitations !' : 'Continuez vos efforts !'}
            </h2>
            
            <div style={{ 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#e2e8f0'
            }}>
              Score: {finalScore}/{currentQuiz.questions.length} ({percentage}%)
            </div>
            
            <div style={{ 
              color: '#94a3b8',
              marginBottom: '2rem'
            }}>
              {passed ? 
                'Vous maîtrisez bien ce sujet !' : 
                'Révisez le cours et réessayez pour améliorer votre score.'
              }
            </div>
          </div>

          <div className="quiz-actions">
            <button 
              className="quiz-button"
              onClick={resetQuiz}
            >
              Retour aux quiz
            </button>
            <button 
              className="quiz-button"
              onClick={() => startQuiz(currentQuiz)}
            >
              Recommencer
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentQuiz) {
    const question = currentQuiz.questions[currentQuestion];
    const progressPercentage = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;

    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="quiz-header">
            <h1 className="quiz-title">{currentQuiz.title}</h1>
            <div style={{ color: '#94a3b8' }}>
              Question {currentQuestion + 1} sur {currentQuiz.questions.length}
            </div>
          </div>

          <div className="quiz-progress">
            <div 
              className="quiz-progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="question-card">
            <h2 className="question-text">{question.question}</h2>
            
            <div className="options-list">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-actions">
            <button 
              className="quiz-button"
              onClick={resetQuiz}
            >
              Abandonner
            </button>
            <button 
              className="quiz-button"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              {currentQuestion + 1 === currentQuiz.questions.length ? 'Terminer' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="formation-header">
        <h1 className="formation-title">Quiz Cybersécurité</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Testez vos connaissances avec nos quiz spécialisés
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
        {quizzes.map((quiz) => {
          const isCompleted = progress.completedQuizzes.includes(quiz.id);
          
          return (
            <div 
              key={quiz.id}
              className="lesson-card"
              onClick={() => startQuiz(quiz)}
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
                {isCompleted ? '✓' : quiz.id}
              </div>
              <h3 className="lesson-title">{quiz.title}</h3>
              <p className="lesson-description">{quiz.description}</p>
              <div className="lesson-duration">
                📝 {quiz.questions.length} questions
                {isCompleted && <span style={{ marginLeft: '1rem', color: '#10b981' }}>✅ Réussi</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;

