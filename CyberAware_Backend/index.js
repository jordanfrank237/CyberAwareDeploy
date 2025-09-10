const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = process.env.PORT || 3001;

// Configuration OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key-here',
  baseURL: process.env.OPENAI_API_BASE || 'https://api.openai.com/v1'
});

// Middleware CORS
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({ 
    message: 'Frank CyberAware Chatbot API is running!',
    version: '1.0',
    developer: 'Frank',
    timestamp: new Date().toISOString()
  });
});

// Route pour le chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `  Tu es CyberBot, un expert en cybersécurité et un assistant pédagogique pour la plateforme CyberAware.
        Ta mission est d'aider les utilisateurs avec bienveillance et précision.
        - Réponds de manière claire, simple et encourageante.
        - Tes connaissances couvrent tous les domaines de la cybersécurité : mots de passe, phishing, malwares, sécurité des réseaux, protection des données, ingénierie sociale, etc.
        - Donne des exemples concrets pour illustrer tes propos.
        - Si une question est hors du champ de la cybersécurité, décline poliment en rappelant ton rôle d'expert en cybersécurité.
        - Si tu ne connais pas la réponse, dis-le honnêtement et conseille de consulter des sources fiables.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const botResponse = `C'est une excellente question sur "${message}". En tant qu'expert, je peux vous dire que la cybersécurité est cruciale pour se protéger en ligne. Par exemple, pour les mots de passe, utilisez toujours des combinaisons longues avec des majuscules, des chiffres et des symboles.`;
     res.json({ reply: botResponse });

  } catch (error) {
    console.error('Erreur du chatbot:', error);
    
    // Réponse de fallback en cas d'erreur
    res.status(500).json({ reply: "Désolé, une erreur interne m'empêche de répondre. Veuillez réessayer plus tard." });
  }
});

// Route de santé du serveur
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'CyberAware Backend',
    developer: 'Frank',
    version: '1.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Démarrage du serveur
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Frank CyberAware Chatbot backend listening at http://localhost:${port}`);
  console.log(`👨‍💻 Développé par Frank - Version 1.0`);
  console.log(`📅 Démarré le ${new Date().toLocaleString('fr-FR')}`);
  console.log(`🔗 Routes disponibles:`);
  console.log(`   GET  / - Page d'accueil API`);
  console.log(`   POST /api/chat - Chatbot IA`);
  console.log(`   GET  /api/health - Santé du serveur`);
});

