---
sidebar_position: 8
---

# Functions

En javascript on utilise notre code en partie réutilisable appelé fonction.

Les valeurs réelles entrées dans une fonction lorsqu'elle est appelé sont appelés arguments.

Les valeurs qui sont définies lors de la création de la fonction sont appelée paramètres

L'instruction return permet de renvoyer une valeur d'une fonction et qui stoppera l'exécution de la fonction.

Les variables déclarés dans une fonction, ainsi que les paramètres de la fonction ont une portée locale. Cela signifie qu'ils sont visibles que dans la fonction.

Il est possible d'avoir des variables local et global avec le même nom. Lorsque cela se produit, la variable locale à priorité sur la variable globale c'est ce qu'on appelle `le dépassement de porté`.

```javascript
let userName = "jordan";

function showUserName1() {
  console.log(userName);
}
console.log(showUserName1()); // jordan

function showUserName() {
  userName = "jordy";
  console.log(userName);
}
console.log(showUserName()); // jordy

function showUserName2() {
  console.log(userName);
}
console.log(showUserName2()); // jordy
```

La valeur de retour d'une fonction peut être stockée dans une variable ou réutilisée dans le programme en tant qu'argument de fonction, on appelle ça une fonction expression.

```javascript
function add(x, y) {
  return x + y;
}
function divideByTwo(num) {
  return num / 2;
}
let sum = add(5, 2);
console.log(sum); // 7
let average = divideByTwo(4);
console.log(average); // 2

function addNumber(num) {
  return 10 + num;
}
console.log(addNumber(sum)); // 17
```

Une fonction qui renvoie une autre fonction, de ce fait la fonction renvoyée est appelée immédiatement:

```js
const sum = (a, b) => {
  if (b === undefined) {
    return (b) => {
      console.log(a + b);
    };
  } else {
    console.log(a + b);
  }
};
sum(1, 2);
sum(1)(4);
```
