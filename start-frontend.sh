#!/bin/bash

echo "🚀 Démarrage du frontend Cyber Aware par Frank..."
echo "📁 Répertoire de travail: $(pwd)"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Aller dans le répertoire frontend
cd cyber-aware-app || {
    echo "❌ Répertoire cyber-aware-app introuvable"
    exit 1
}

echo "📦 Installation des dépendances..."
npm install --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo "✅ Dépendances installées avec succès"
else
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi

echo "🌐 Démarrage du serveur de développement..."
echo "📍 L'application sera accessible sur: http://localhost:5173"
echo "🔄 Pour arrêter le serveur, utilisez Ctrl+C"

npm run dev

