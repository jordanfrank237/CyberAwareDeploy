import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ onNavigate }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Bonjour ! Je suis votre assistant cybersécurité. Je peux vous aider à comprendre les menaces numériques et vous donner des conseils pour vous protéger. Que souhaitez-vous savoir ?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    // Ajouter le message de l'utilisateur
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { type: 'bot', content: data.response }]);
      } else {
        throw new Error('Erreur de communication avec le serveur');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Désolé, je rencontre des difficultés techniques. Voici quelques conseils généraux de cybersécurité :\n\n• Utilisez des mots de passe uniques et complexes\n• Activez l\'authentification à deux facteurs\n• Méfiez-vous des emails suspects\n• Maintenez vos logiciels à jour\n• Sauvegardez régulièrement vos données importantes'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Comment créer un mot de passe sécurisé ?",
    "Qu'est-ce que le phishing ?",
    "Comment sécuriser mon Wi-Fi ?",
    "Que faire en cas de piratage ?",
    "Comment protéger mes données personnelles ?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 className="chatbot-title">🤖 Assistant Cybersécurité</h1>
            <button 
              className="nav-button"
              onClick={() => onNavigate('dashboard')}
              style={{ fontSize: '0.9rem' }}
            >
              ← Retour
            </button>
          </div>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '0.9rem',
            textAlign: 'center',
            marginTop: '0.5rem'
          }}>
            Posez-moi vos questions sur la cybersécurité
          </p>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.content.split('\n').map((line, lineIndex) => (
                <div key={lineIndex}>
                  {line}
                  {lineIndex < message.content.split('\n').length - 1 && <br />}
                </div>
              ))}
            </div>
          ))}
          
          {isLoading && (
            <div className="message bot">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  background: '#3b82f6',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s infinite'
                }}></div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  background: '#3b82f6',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s infinite 0.2s'
                }}></div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  background: '#3b82f6',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s infinite 0.4s'
                }}></div>
                <span style={{ marginLeft: '0.5rem', color: '#94a3b8' }}>
                  Je réfléchis...
                </span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <div style={{ 
            padding: '1rem',
            borderTop: '1px solid rgba(59, 130, 246, 0.2)',
            background: 'rgba(15, 23, 42, 0.6)'
          }}>
            <div style={{ 
              color: '#94a3b8',
              fontSize: '0.9rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Questions fréquentes :
            </div>
            <div style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#3b82f6',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="chat-input-container">
          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <textarea
              className="chat-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tapez votre question sur la cybersécurité..."
              rows="1"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              style={{
                resize: 'none',
                overflow: 'hidden'
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
              }}
            />
            <button 
              type="submit" 
              className="chat-send-button"
              disabled={!inputValue.trim() || isLoading}
            >
              {isLoading ? '⏳' : '📤'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

