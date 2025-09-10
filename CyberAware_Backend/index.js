// ==================== DÉBUT DU NOUVEAU CODE COMPLET ====================

const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const app = express();
app.use(cors());
app.use(express.json());

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

    // Le "prompt système" pour guider l'IA gratuite
    const systemPrompt = `
    Tu es CyberBot, un expert en cybersécurité et un assistant pour la plateforme CyberAware.
    Ta mission est d'aider les utilisateurs en français.
    Réponds de manière claire et factuelle aux questions sur la cybersécurité.
    Si une question est hors du champ de la cybersécurité, décline poliment.
    Question de l'utilisateur : "${message}"
    Ta réponse :
    `;

    try {
        // On appelle l'API gratuite
        const apiResponse = await fetch(
            "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
            {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    "inputs": systemPrompt,
                    "parameters": { "max_new_tokens": 250 } // Limite la longueur de la réponse
                } ),
            }
        );

        const result = await apiResponse.json();

        // On extrait la réponse du résultat
        const botResponse = result[0].generated_text.split("Ta réponse :")[1] || "Je ne suis pas sûr de savoir comment répondre à cela. Peux-tu reformuler ?";
        
        res.json({ reply: botResponse.trim() });

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API gratuite:", error);
        res.status(500).json({ reply: "Désolé, le service de chatbot gratuit est momentanément indisponible. Veuillez réessayer plus tard." });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ==================== FIN DU NOUVEAU CODE COMPLET ====================
