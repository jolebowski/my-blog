---
sidebar_position: 8
---

# Rest parameter

Le paramètre rest , également écrit avec trois points de suspension ( ...) , permet de représenter un nombre indéfini d'éléments sous forme de tableau.

```js
const order = [20.17, 18.67, 1.5, "chocolat", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

Ce code prend les valeurs du tableau order et les affecte à des variables individuelles à l'aide de la déstructuration. `total`, `subtotal`, et `tax` se voient attribuer les trois premières valeurs du tableau, cependant, items est affecté le reste des valeurs dans le tableau (sous forme de tableau).

## Fonctions variadiques

Les fonctions variadiques sont des fonctions qui prennent un nombre indéfini d'arguments.

```js
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); //36
```
