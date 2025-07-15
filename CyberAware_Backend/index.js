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
          content: `Tu es un expert en cybersécurité qui aide les utilisateurs de la plateforme CyberAware développée par Frank. 
          Tu dois répondre en français et donner des conseils pratiques et précis sur la cybersécurité. 
          Reste professionnel mais accessible. Si on te demande qui t'a créé ou développé, réponds que c'est Frank, le créateur de CyberAware.
          Concentre-toi sur des sujets comme : mots de passe, phishing, sécurité des réseaux, sauvegardes, sécurité mobile, malware, etc.
          Donne des conseils concrets et actionables.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const response = completion.choices[0].message.content;
    res.json({ response });

  } catch (error) {
    console.error('Erreur OpenAI:', error);
    
    // Réponse de fallback en cas d'erreur
    const fallbackResponse = `Je rencontre actuellement des difficultés techniques. Voici quelques conseils généraux de cybersécurité :

• **Mots de passe** : Utilisez des mots de passe uniques et complexes pour chaque compte (12+ caractères)
• **Authentification** : Activez l'authentification à deux facteurs quand c'est possible  
• **Phishing** : Méfiez-vous des emails suspects et ne cliquez pas sur les liens douteux
• **Mises à jour** : Maintenez vos logiciels et systèmes à jour
• **Sauvegardes** : Sauvegardez régulièrement vos données importantes (règle 3-2-1)
• **Antivirus** : Utilisez un antivirus à jour et fiable
• **Wi-Fi** : Soyez prudent sur les réseaux Wi-Fi publics, utilisez un VPN

Pour plus d'informations détaillées, consultez les modules de formation de CyberAware développés par Frank.`;

    res.json({ response: fallbackResponse });
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

