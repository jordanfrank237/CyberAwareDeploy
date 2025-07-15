#!/bin/bash

echo "=========================================="
echo "     Arrêt de CyberAware v1.0"
echo "     Développé par Frank"
echo "=========================================="

echo "🛑 Arrêt des services CyberAware en cours..."

# Arrêter le backend
echo "🔧 Arrêt du backend..."
pkill -f "node index.js"
if [ $? -eq 0 ]; then
    echo "✅ Backend arrêté"
else
    echo "ℹ️  Aucun processus backend trouvé"
fi

# Arrêter le frontend
echo "🎨 Arrêt du frontend..."
pkill -f "vite"
if [ $? -eq 0 ]; then
    echo "✅ Frontend arrêté"
else
    echo "ℹ️  Aucun processus frontend trouvé"
fi

# Vérifier qu'aucun processus ne reste
sleep 2
REMAINING=$(ps aux | grep -E "(node index.js|vite)" | grep -v grep | wc -l)

if [ $REMAINING -eq 0 ]; then
    echo "✅ Tous les services CyberAware ont été arrêtés avec succès"
else
    echo "⚠️  Certains processus peuvent encore être actifs"
    echo "   Utilisez 'ps aux | grep -E \"(node|vite)\"' pour vérifier"
fi

echo "=========================================="

