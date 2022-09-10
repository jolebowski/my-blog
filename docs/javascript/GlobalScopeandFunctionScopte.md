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
