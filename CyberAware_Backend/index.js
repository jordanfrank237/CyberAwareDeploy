// ==================== DÉBUT DU CODE COMPLET À COPIER ====================

const express = require('express');
const cors = require('cors');
const OpenAI = require('openai'); // On déclare l'outil OpenAI

const app = express();
app.use(cors());
app.use(express.json());

// On initialise le client OpenAI UNE SEULE FOIS avec la clé API
// Il va automatiquement chercher la variable d'environnement OPENAI_API_KEY
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Route pour vérifier que le serveur est en ligne
app.get('/api/health', (req, res) => {
  res.send('CyberAware Backend is running!');
});

// Route pour le chatbot
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ reply: "Veuillez entrer une question." });
    }

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

    const userMessage = { role: 'user', content: message };

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [systemMessage, userMessage],
            temperature: 0.7,
        });

        const botResponse = completion.choices[0].message.content;
        res.json({ reply: botResponse });

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API OpenAI:", error);
        res.status(500).json({ reply: "Désolé, je rencontre des difficultés techniques pour me connecter à mon intelligence. Veuillez vérifier que la clé API est correctement configurée et réessayer." });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ==================== FIN DU CODE COMPLET À COPIER ====================
