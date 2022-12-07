---
sidebar_position: 8
---

# Fonctions

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
showUserName1(); // jordan

function showUserName() {
  userName = "jordy";
  console.log(userName);
}
showUserName(); // jordy

function showUserName2() {
  console.log(userName);
}
showUserName2(); // jordy
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

## setTimeout, setInterval, ClearInterval

```js
let i = 1;
const interval = setInterval(() => {
  console.log("here is message number " + i);
  i++;
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 6000);

// "here is message number 1"
// "here is message number 2"
// "here is message number 3"
// "here is message number 4"

console.log("a");
console.log("b");
setTimeout(() => {
  console.log("c");
}, 0);
console.log("d");
// "a"
// "b"
// "d"
// "c"
```

## Fonction génératrice

Une fonction génératrice permet de définir un générateur(un générateur d'objet).

Pour déclarer une une fonctione génératrice il faut ajouter une étoile :

```js
function* gen() {}
```

```js
function* gen() {
  console.log("a");
}
const g = gen();

console.log(g.next()); // a {value: undefined, done: true}
```

La méthode next() renvoie un objet dont la propriété value contient la valeur générée et une propriété done qui indique si le générateur a produit sa dernière valeur ou non.

```js
function* gen(i) {
  yield i;
  yield i + 10;
}
const gObj = gen(5);

console.log(gObj.next()); // {value: 5, done:false}
```

```js
function* gene(i) {
  yield i;
  yield i * 2;
  return 25;
}
const g = gene(5);
g.next(); // {value:5, done:false}
g.next(); // {value:10, done:false}
g.next(); // {value:25, done:true}
```

Le mot-clé yield est utilisé pour suspendre et reprendre une fonction génératrice.

Utilisé une fonction génératrice c'est lorsque vous voulez ranger plusieurs éxecutions, mais vous voulez contrôler quand vous voulez vous déplacez et continuez l'éxecution dans cette fonction.
