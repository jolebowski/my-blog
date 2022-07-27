---
sidebar_position: 4
---

# Spread operator

Le spread Operator permet de copier rapidement tout ou une partie d'un tableau ou d'un objet existant dans un autre tableau ou objet.

```js
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2] console.log(arr3) //[1,2,3,4,5,6]
```

Le spread operator est souvent utilisé en alliance avec le destructuring.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const [, , , ...rest] = numbers;
console.log(rest); ///[4,5,6]
```

Nous pouvons utiliser le spread operator pour les objets :

```js
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
```
