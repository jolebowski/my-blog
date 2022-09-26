# Référence

```js
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello
```

En JavaScript, tous les objets interagissent par référence lorsqu'on les définit égaux les uns aux autres.

Premièrement, la variable `c` contaient une valeur d'objet. Plus tard, nous assignons `d` avec la même référence que `c` à l'objet.

![reference](../../static/img/reference.png)

Quand on modifie un objet, on les modifie donc tous.
