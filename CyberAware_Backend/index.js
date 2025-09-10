const express = require('express');
const cors = require('cors');
const OpenAI = require('openai'); 

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
});

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
app.post('/api/chat', async (req, res) => 
  {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
// ==================== DÉBUT DU CODE À COPIER ====================

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    // Vérifie si l'utilisateur a envoyé un message
    if (!message) {
        return res.status(400).json({ reply: "Veuillez entrer une question." });
    }

    // 1. Définir le rôle et les instructions pour l'IA (le prompt système)
    const systemMessage = {
        role: 'system',
        content: `
        Tu es CyberBot, un expert en cybersécurité et un assistant pédagogique pour la plateforme CyberAware.
        Ta mission est d'aider les utilisateurs avec bienveillance et précision.
        - Réponds de manière claire, simple et encourageante en français.
        - Tes connaissances couvrent tous les domaines de la cybersécurité : mots de passe, phishing, malwares, sécurité des réseaux, protection des données, ingénierie sociale, etc.
        - Donne des exemples concrets pour illustrer tes propos.
        - Si une question est hors du champ de la cybersécurité, décline poliment en rappelant ton rôle d'expert en cybersécurité.
        - Si tu ne connais pas la réponse, dis-le honnêtement et conseille de consulter des sources fiables.
        `
    };

    // 2. Préparer la question de l'utilisateur
    const userMessage = { role: 'user', content: message };

    try {
        // 3. FAIRE L'APPEL À L'API OPENAI
        // Assure-toi d'avoir configuré ta clé API dans les variables d'environnement de Render
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [systemMessage, userMessage], // On envoie les instructions ET la question
            temperature: 0.7, // Un peu de créativité mais pas trop
        });

        // 4. RÉCUPÉRER LA VRAIE RÉPONSE DE L'IA
        const botResponse = completion.choices[0].message.content;

        // 5. ENVOYER LA VRAIE RÉPONSE AU FRONTEND
        res.json({ reply: botResponse });

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API OpenAI:", error);
        res.status(500).json({ reply: "Désolé, je rencontre des difficultés techniques pour me connecter à mon intelligence. Veuillez vérifier que la clé API est correctement configurée et réessayer." });
    }
});

// ==================== FIN DU CODE À COPIER ====================

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

