---
sidebar_position: 9
---

# for ...of

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
