---
sidebar_position: 10
---

# for ...of

Vous écrivez une boucle for...of presque exactement comme vous écririez une boucle for...in , sauf que vous échangez in avec of et que vous pouvez supprimer l ' index .

for of boucle sur les valeurs d'un objet itérable.

Elle permet de boucler sur des structures de données itérables telles que des tableau, des chaîne de caractères etc...

```js
const cars = ["BMW", "Tesla", "Mercedes"];

let text = "";
for (const x of cars) {
  text += x;
}
console.log(text); // BMWTeslaMercedes
```

Les variables peuvent être déclarées avec const let ou var.

**ASTUCE** : Il est recommandé d'utiliser des noms au pluriel pour les objets qui sont des collections de valeurs. De cette façon, lorsque vous bouclez sur la collection, vous pouvez utiliser la version singulière du nom lorsque vous référencez des valeurs individuelles dans la collection. Par exemple, for (const button of buttons) {...}
