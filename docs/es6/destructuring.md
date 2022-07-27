---
sidebar_position: 6
---

# Destructuring

Vous pouvez extraire des données de tableaux et d'objets dans des variables distinctes à l'aide du destructuring.

Le destructuring s'inspire de langages permet de spécifier les éléments que vous souhaitez extraire d'un tableau ou d'un objet sur le côté gauche d'une affectation.

## Destructuring des valeurs d'un tableau

```js
const names = ["Jordan", "Jordy", "Kévin"];
const [j, jy, k] = names;

console.log(j, jy, k); // Jordan, Jordy, Kévin
```

Dans cet exemple, les crochets `[]` représentent le tableau en cours de déstructuration et `j`, `jy` et `k` représentent les variables dans lesquelles vous souhaitez stocker les valeurs du tableau.

## Destructuring des valeurs d'un objet

```js
const me = {
  userName: "jolebowski",
  job: "front end developer",
};
const { userName, job } = me;
console.log(userName, job); // jolebowski front end developer
```

Dans cet exemple, les accolades `{}` représentent l'objet déstructuré et `userName`, `job` représentent les variables où vous souhaitez stocker les propriétés de l'objet. Remarquez que vous n'avez pas à spécifier la propriété d'où extraire les valeurs. Comme `me` une propriété nommée `userName`, la valeur est automatiquement stockée dans la `userName` variable. Et c'est pareil avec `job`.

## This

```js
const circle = {
  radius: 10,
  color: "red",
  getArea: () => Math.PI * this.radius * this.radius,
  getCircumference: () => 2 * Math.PI * 10,
};

const { radius, getArea, getCircumference } = circle;
console.log(radius, getArea(), getCircumference()); // 10, NaN, 62.83185307179586
```

Lorsque vous déstructurez l'objet et que vous stockez la méthode getArea() dans la variable getArea, elle n'a plus accès à `this` dans l'objet circle, ce qui donne NaN.

On peut également également destructuré un objet lorsqu'il est passé en paramètre dans une fonction.

```js
const me = {
  name: "jordan",
  addres: {
    city: "Le Mans",
  },
};

const whereILive = ({ name, addres: { city } }) =>
  `${name} is living in ${city}`;

console.log(whereILive(me));
```
