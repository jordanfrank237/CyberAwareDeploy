// ==================== DÉBUT DU CODE FINAL ET ROBUSTE ====================

const express = require('express');
const cors = require('cors');
// On utilise la syntaxe de compatibilité pour node-fetch
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

    const systemPrompt = `
    Tu es CyberBot, un expert en cybersécurité et un assistant pour la plateforme CyberAware.
    Ta mission est d'aider les utilisateurs en français.
    Réponds de manière claire et factuelle aux questions sur la cybersécurité.
    Si une question est hors du champ de la cybersécurité, décline poliment.
    Question de l'utilisateur : "${message}"
    Ta réponse :
    `;

    try {
        const apiResponse = await fetch(
            "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
            {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    "inputs": systemPrompt,
                    "parameters": { "max_new_tokens": 250 }
                } ),
            }
        );

        const result = await apiResponse.json();

        // ==================== LA CORRECTION EST ICI ====================
        // On vérifie si la réponse contient bien le texte généré AVANT de l'utiliser
        if (result && result[0] && result[0].generated_text) {
            const botResponse = result[0].generated_text.split("Ta réponse :")[1] || "J'ai reçu une réponse mais je n'ai pas pu l'interpréter. Essayez de reformuler.";
            res.json({ reply: botResponse.trim() });
        } else {
            // Si l'API renvoie une erreur (ex: modèle en chargement), on gère le cas
            console.error("Réponse inattendue de l'API:", result);
            res.status(503).json({ reply: "Le service de chatbot est actuellement en cours de démarrage ou de maintenance. Veuillez patienter une minute et réessayer." });
        }
        // ==================== FIN DE LA CORRECTION ====================

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API gratuite:", error);
        res.status(500).json({ reply: "Désolé, une erreur technique est survenue. Le service de chatbot est peut-être indisponible." });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ==================== FIN DU CODE FINAL ET ROBUSTE ====================
