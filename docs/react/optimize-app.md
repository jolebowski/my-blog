---
sidebar_position: 11
---

# Optimiser une application React

1. Évitez les attributs de style en ligne : le navigateur investit souvent beaucoup de temps dans le rendu, lorsque les styles sont implicites en ligne. Le script et le rendu prennent du temps car le navigateur doit planifier toutes les règles de style React dans les propriétés CSS. Créer un fichier style.js séparé et l'importer dans le composant est une méthode plus rapide.

2. L'utilisation de fragments de React diminue le nombre. de balises supplémentaires et répond à la nécessité d'avoir un seul élément parent dans le composant.

3. Évitez de regrouper tout le code frontal dans un seul fichier.



