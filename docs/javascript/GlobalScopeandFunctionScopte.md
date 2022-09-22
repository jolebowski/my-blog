# Global Scope et Function Scope

Le global scope signifie que la variable est accessible partout dans le programme.

```js
var a = 10;

function addition(a, b) {
  return a + b;
}

console.log(addition(1, 2)); //3

console.log(a); //10
```

Si une valeur est définie à l’intérieur d’une fonction, il sera visible partout à l’intérieur de cette fonction, même à l’intérieur d’autres fonctions à l’intérieur de cette fonction.

```js
function numberOne() {
  let x = 10;
  return () => {
    console.log(x); // 10
  };
}
numberOne()();
```

Si un identifiant est déclaré dans la portée globale, il est disponible partout.

```js
const b = 2;
let d = 15;

function myFn1(a) {
  let b;
  let d = 10;
  myFn2(b);
}

function myFn2(a) {
  let c = 5;
  console.log(a, b, c, d); // undefined 2 5 15
}

myFn1();
```

La "use strict"directive était nouvelle dans ECMAScript version 5.

Ce n'est pas une déclaration, mais une expression littérale, ignorée par les versions antérieures de JavaScript.

Le but de "use strict"est d'indiquer que le code doit être exécuté en "mode strict".

Avec le mode strict, vous ne pouvez pas, par exemple, utiliser des variables non déclarées.

```js
"use strict";

function myFunction() {
  a = 2;
  return a;
}
myFunction();
//ReferenceError: a is not defined
```
