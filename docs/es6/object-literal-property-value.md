---
sidebar_position: 7
---

# Raccourci littéral d'objet

Nous utilisons souvent les mêmes noms de clé d'objet que les variables existantes que nous utilisons comme valeurs.

```js
const name = "Jordan";
const city = "Le mans";
const age = 28;

const me = {
  name: name,
  city: city,
  age: age,
};
console.log(me); // {name: 'Jordan', city: 'Le mans', age: 28}
```

Comme vous pouvez le voir ci-dessus, les propriétés ont les mêmes noms que les variables. Le raccourci de valeur de propriété littérale d'objet a été introduit dans ES6 pour raccourcir l'initialisation de l'objet.

Elle permet de définir un objet dont les clés ont les mêmes noms que les variables passées en propriétés, en passant simplement les variables :

```js
const name = "Jordan";
const city = "Le mans";
const age = 28;

const me = { name, city, age };

console.log(me); // {name: 'Jordan', city: 'Le mans', age: 28}
```
