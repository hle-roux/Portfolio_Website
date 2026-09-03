# 🚀 Portfolio Website - Hugo Le Roux

Un site portfolio interactif et moderne conçu pour mettre en valeur mes projets, compétences et parcours d'étudiant en développement informatique à l'**École 42**. 

Ce portfolio intègre un système original de **Split-Screen Dual Theme** permettant de basculer en temps réel entre deux identités visuelles (mode Épuré / Glassmorphism et mode Créatif).

---

## 🌟 Aperçu des Fonctionnalités

- **🎛️ Dual-Theme Split-Screen Slider** : Un slider interactif (glissable au curseur ou cliquable) permettant d'explorer deux thèmes graphiques distincts en temps réel.
- **🍱 Bento Grid UI** : Organisation moderne et responsive sous forme de cartes "Bento" pour une navigation claire et esthétique.
- **✨ Micro-Interactions & Animations** :
  - Effet de texte animé "ScrambleText" à l'affichage des titres.
  - Ticker de mise en avant dynamique des compétences toutes les 1.8s.
  - Bouton de copie rapide de l'adresse email dans le presse-papier avec notification Toast animée.
  - Boutons de lien GitHub interactifs ("View repo") au survol.
- **📱 Layout 100% Responsive** : Adapté aux écrans mobiles, tablettes et desktops.

---

## 🛠️ Technologies Utilisées

| Catégorie | Technologies |
| :--- | :--- |
| **Framework & Langage** | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Build & Tooling** | ![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) |
| **Styling & UI** | ![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white) |
| **Graphisme & Effets** | HTML5 Canvas, Glassmorphism, CSS Custom Variables & Dynamic Clip-Path |

---

## 🚀 Installation et Lancement

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- `npm` ou `pnpm` / `yarn`

### Étape 1 : Cloner le dépôt
```bash
git clone https://github.com/hle-roux/Portfolio_Website.git
cd Portfolio_Website
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

### Étape 3 : Lancer le serveur de développement
```bash
npm run dev
```
Rendez-vous sur `http://localhost:5173` dans votre navigateur.

### Scripts disponibles
- `npm run dev` : Démarre le serveur de développement Vite.
- `npm run build` : Compile le projet pour la production dans le dossier `dist/`.
- `npm run preview` : Prévisualise la version de production construite.
- `npm run lint` : Exécute le linter ESLint pour vérifier la qualité du code.

---

## 📋 To-Do List (Avancement du projet)

### 🟢 Réalisé
- [x] Initialisation du projet avec Vite, React 19 et TypeScript
- [x] Configuration de Tailwind CSS v4 et de la charte graphique (Glassmorphism & thèmes HSL)
- [x] Création du layout principal en **Bento Grid** responsive
- [x] Implémentation du système de **Split-Screen Dual Theme Slider** avec gestion du `clip-path` et événements `drag`/`click`
- [x] Développement du composant `ScrambleText` pour les titres animés
- [x] Système de rotation aléatoire et dynamique pour mettre en surbrillance les compétences (`SkillBadge`)
- [x] Ajout de la fonction de copie d'email avec notification Toast rétractable
- [x] Intégration des cartes de projets principaux (*LifeHub*, *Transcendance*, *Red_Tetris*) avec prévisualisation et liens GitHub
- [x] Intégration des cartes de projets secondaires (*Cub3D*, *Piscine C++*)

### 🟡 À faire / Idées d'améliorations
- [ ] Compléter et vérifier l'ensemble des liens sociaux (LinkedIn, profil GitHub) + couleur
- [ ] Mettre à jour le CV dans le répertoire `public/`
- [ ] Supprimer ou Fix le separateur 
- [ ] Mettre a jour la formation 
- [ ] Finaliser les competences et stacks maitrisees
- [ ] Finaliser et paufiner les projets et leurs descriptions
- [ ] Rajouter contact en bas 
- [ ] Verifier tous les paragraphes et fautes
- [ ] Déployer la version finale du site sur Vercel / GitHub Pages avec un domaine personnalisé
- [ ] Optimiser les images et les assets pour améliorer le score Lighthouse / SEO
- [ ] [À compléter] : _______________________________________________

---

## 👨‍💻 Auteur

**Hugo Le Roux**
- Étudiant à l'**École 42**
- GitHub : [@hle-roux](https://github.com/hle-roux)
