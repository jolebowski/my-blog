---
sidebar_position: 11
---

# La boucle for

Les boucles for sont déclarés avec trois expressions facultatives séparés par des points virgules

La boucloe for vous oblige explicitement à définir le point de départ, le point d'arrêt et chaque étape de la boucle. En fait, vous obtiendrez un Uncaught `SyntaxError: Unexpected token` si vous omettez l'une des trois pièces requises.

```js
for(instruction 1; instruction 2; instruction 3){
    // code block to be executed
}
```

**instruction 1** est l'instruction d'initialisation.
Il est exécutée une seule fois avant le débararage de la boucle. Il est généralement utilisé pour définir et configurer votre variable de boucle.

**instruction 2** est l'instruction de condition.
Il est évaluée au début de chaque itération de boucle et continuera tant qu'elle aura la valeur true. Lorsque la condition est false au début de l'itération, la boucle s'arrête. Cela signifie que si la condition commence est fausse votre boucle ne s'exécutera jamais.

**instruction 3** est l'expression final.
Il est exécutée à la fin de chaque itération de boucle, avant la prochaine vérification de la condition et est généralement utilisée pour incrémenter ou décrémenter votre compteur de boucle.

```js
const array = [];

for (let i = 0; i < 5; i++) {
  array.push(i);
}
console.log(array); //(5)[0, 1, 2, 3, 4]
```

Dans cette exemple le comptage se fait à partir de 4 et non 5 car c’est moins si on aurait voulu que ça soit le contraire il aurait fallu mettre `<=`.

`i` est initialisé à 0 et itéré tant que la condition `i < 5` est vraie. Nous allons incrémenter `i` par 1 dans chaque itération de boucle avec `i++` comme expression finale.

Nous pouvons compter par nombres pairs :

```js
const array = [];

for (let i = 0; i <= 6; i += 2) {
  array.push(i);
}
console.log(array); //[0, 2, 4, 6]
```

Une tâche courante en JavaScript consiste à parcourir le contenu d'un tableau. Une façon de le faire est d'utiliser une boucle for. Ce code affichera chaque élément du tableau arr dans la console :

```js
const array = [1, 2, 65, 9, 8, 4];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

Affecter une variable pour lui ajouter la valeur de chaque élément d’un tableau :

```js
const array = [2, 4, 6, 9];
let total = 0;
for (let i = 0; i < array.length; i++) {
  total += array[i];
}
Console.log(total); // 21
```

Pour parcourir un tableau multidimensionnel :

```js
const array = [[1, 2, 3, 4, 5]];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(j);
  }
}
```

## break et continue

`continue` va continuer à boucler.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9
}
```

`break` dans un for permet de mettre fin à une boucle.

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5
  if (i === 5) {
    break;
  }
}
```
