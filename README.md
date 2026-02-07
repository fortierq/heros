# ⚔️ Le Livre Dont Vous Êtes le Héros

Un site web interactif proposant des aventures "dont vous êtes le héros" — avec combats, objets, sorts, progression de niveau et choix multiples qui influencent l'histoire.

## 🌍 Trois aventures dans des mondes différents

| Aventure | Thème | Description |
|----------|-------|-------------|
| 🌲 **La Forêt des Ombres** | Fantasy médiévale | Explorez une forêt maudite et affrontez le Chevalier Noir |
| 🚀 **Odyssée Stellaire** | Science-fiction | Perdu dans l'espace, découvrez une civilisation alien disparue |
| ⚡ **Le Temple de l'Éternel** | Mythologie grecque | Demi-dieu d'Athéna, affrontez Cronos et ses Titans |

## ✨ Fonctionnalités

- **Narration interactive** : Chaque choix influence la suite de l'histoire avec des embranchements multiples
- **Système de combat** : Affrontez des ennemis avec attaque, sorts et objets
- **Progression** : Gagnez de l'XP, montez de niveau, améliorez vos stats
- **Inventaire** : Collectez des armes, armures, potions et objets de quête
- **Sorts magiques** : Apprenez des sorts au fil de l'aventure
- **Conditions** : Certains choix ne sont accessibles qu'avec le bon objet, sort ou niveau
- **Fins multiples** : Chaque aventure a plusieurs fins possibles (victorieuse, héroïque, par la ruse...)
- **Images immersives** : Chaque scène est illustrée
- **Responsive** : Fonctionne sur PC, tablette et mobile

## 🛠️ Stack technique

- **React 18** + **TypeScript**
- **Vite** (bundler rapide)
- **Tailwind CSS** (styling)
- **Zustand** (gestion d'état)
- **Lucide React** (icônes)
- **Framer Motion** (prêt pour animations)

## 🚀 Démarrage rapide

### GitHub Codespace (recommandé)

1. Cliquez sur **Code** → **Codespaces** → **Create codespace on main**
2. Attendez que le conteneur se construise (~1 min)
3. Le serveur de dev démarre automatiquement

### En local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

Le site sera accessible sur `http://localhost:5173`

## 📁 Structure du projet

```
src/
├── components/          # Composants UI réutilisables
│   ├── AdventureCard    # Carte de sélection d'aventure
│   ├── CharacterSheet   # Fiche de personnage (PV, stats, XP)
│   ├── ChoicePanel      # Affichage des choix narratifs
│   ├── CombatPanel      # Interface de combat
│   ├── EndingScreen     # Écran de fin d'aventure
│   ├── InventoryPanel   # Inventaire et sorts
│   ├── Notifications    # Notifications toast
│   └── StoryPanel       # Affichage du texte narratif
├── data/                # Données des aventures
│   ├── foretSombre.ts   # Aventure Fantasy
│   ├── odysseeStelaire.ts # Aventure Sci-Fi
│   └── templeOublie.ts  # Aventure Mythologie
├── pages/               # Pages principales
│   ├── HomePage         # Sélection d'aventure
│   └── GamePage         # Interface de jeu
├── store/               # État global (Zustand)
│   └── gameStore.ts     # Moteur de jeu
├── types.ts             # Types TypeScript
├── App.tsx              # Composant racine
└── main.tsx             # Point d'entrée
```

## 🎮 Comment jouer

1. **Choisissez** une des trois aventures sur la page d'accueil
2. **Lisez** le texte narratif de chaque scène
3. **Faites un choix** parmi les options proposées (certaines nécessitent des objets ou un niveau minimum)
4. **Combattez** les ennemis avec vos armes et sorts
5. **Récoltez** des objets et apprenez de nouveaux sorts
6. **Atteignez** l'une des fins multiples !

## 📝 Ajouter une aventure

Créez un fichier dans `src/data/` en suivant le type `Adventure` défini dans `src/types.ts`. Chaque aventure comprend :

- Des statistiques de départ
- Un inventaire initial
- Un arbre de scènes avec texte, image, choix et effets
- Des combats optionnels
- Des conditions pour débloquer certains choix
- Plusieurs fins possibles
