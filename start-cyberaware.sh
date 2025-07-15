#!/bin/bash

echo "=========================================="
echo "    Démarrage de CyberAware v1.0"
echo "    Développé par Frank"
echo "=========================================="

# Vérifier que les dossiers existent
if [ ! -d "CyberAware_Backend" ]; then
    echo "❌ Erreur: Le dossier CyberAware_Backend n'existe pas"
    exit 1
fi

if [ ! -d "cyber-aware-app" ]; then
    echo "❌ Erreur: Le dossier cyber-aware-app n'existe pas"
    exit 1
fi

# Fonction pour arrêter les processus existants
cleanup() {
    echo "🛑 Arrêt des services CyberAware..."
    pkill -f "node index.js" 2>/dev/null
    pkill -f "vite" 2>/dev/null
    echo "✅ Services arrêtés"
    exit 0
}

# Capturer Ctrl+C pour arrêter proprement
trap cleanup SIGINT SIGTERM

# Arrêter les processus existants
echo "🔄 Arrêt des processus existants..."
pkill -f "node index.js" 2>/dev/null
pkill -f "vite" 2>/dev/null
sleep 2

# Démarrer le backend
echo "🚀 Démarrage du backend CyberAware..."
cd CyberAware_Backend
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé dans CyberAware_Backend"
    exit 1
fi

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances backend..."
    npm install
fi

node index.js &
BACKEND_PID=$!
echo "✅ Backend démarré (PID: $BACKEND_PID) sur http://localhost:3001"

# Attendre que le backend soit prêt
sleep 3

# Démarrer le frontend
echo "🎨 Démarrage du frontend CyberAware..."
cd ../cyber-aware-app
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé dans cyber-aware-app"
    kill $BACKEND_PID
    exit 1
fi

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances frontend..."
    npm install
fi

npm run dev &
FRONTEND_PID=$!
echo "✅ Frontend démarré (PID: $FRONTEND_PID) sur http://localhost:5173"

echo ""
echo "🎉 CyberAware démarré avec succès!"
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend: http://localhost:3001"
echo ""
echo "💡 Conseils:"
echo "   - Utilisez Ctrl+C pour arrêter les services"
echo "   - Consultez PACKAGE_TECHNIQUE_CYBERAWARE.md pour la documentation"
echo "   - Les logs s'affichent ci-dessous"
echo ""
echo "=========================================="

# Attendre que les processus se terminent
wait $BACKEND_PID $FRONTEND_PID

