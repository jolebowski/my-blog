---
sidebar_position: 32
---

# Paramètres par defaut

Afin de nous aider à créer des fonctions plus flexibles, ES6 introduit des paramètres par défaut pour les fonctions.

Le paramètre par défaut entre en jeu lorsque l'argument n'est pas spécifié (il n'est pas défini). 


```js
const greeting = (name = "Jordan") => "Hello " + name;
console.log(greeting()); // Hello Jordan

```

