#!/bin/zsh

# Couleurs pour l'affichage
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "${BLUE}=== Git Commit & Push Script ===${NC}\n"

# Demander le type de commit
echo "Types de commit disponibles:"
echo "  - feat:     Nouvelle fonctionnalité"
echo "  - fix:      Correction de bug"
echo "  - refactor: Refactorisation du code"
echo "  - docs:     Documentation"
echo "  - style:    Formatage, point-virgules manquants, etc."
echo "  - test:     Tests"
echo "  - chore:    Maintenance"
echo ""

read "?Type de commit (feat/fix/refactor/docs/style/test/chore): " commit_type

# Valider le type de commit
valid_types=("feat" "fix" "refactor" "docs" "style" "test" "chore")
if [[ ! " ${valid_types[@]} " =~ " ${commit_type} " ]]; then
    echo "${YELLOW}Avertissement: Type non reconnu, utilisation de 'chore'${NC}"
    commit_type="chore"
fi

# Demander le message
read "?Message de commit: " commit_message

# Demander la branche
read "?Branche pour le push (default: main): " branch
branch=${branch:-main}

# Construire le message de commit complet
full_message="${commit_type}: ${commit_message}"

echo "\n${BLUE}=== Résumé ===${NC}"
echo "Type: ${commit_type}"
echo "Message: ${commit_message}"
echo "Message complet: ${full_message}"
echo "Branche: ${branch}"
echo ""

read "?Confirmer (y/n): " confirm

if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo "${YELLOW}Opération annulée${NC}"
    exit 0
fi

# Exécuter les commandes git
echo "\n${GREEN}Ajout des fichiers...${NC}"
git add .

echo "${GREEN}Création du commit...${NC}"
git commit -m "$full_message"

echo "${GREEN}Push vers origin/${branch}...${NC}"
git push origin "$branch"

echo "\n${GREEN}✅ Terminé avec succès!${NC}"