---
sidebar_position: 10
---

# for ...in

`for in` boucle sur les propriétés d'un objet.

Il parcourt en boucle les propriétés d'un objet.

Le bloc de code à l'intérieur de la boucle est exécuté une fois pour chaque propriété.

```js
const person = { name: "john", lastName: "Doe", age: 25 };

let text = "";

for (let x in person) {
  console.log(x); // name lastName age
  text += `${person[x]} `;
}

console.log(text); // john Doe 25
```

`for in` itère sur l'objet `person`.

La variable `x` est pour itérer sur les propriétés.

La variable `x` est utilisée pour accéder à la valeur de la clé.

La valeur de la clé est `person[x]`.
