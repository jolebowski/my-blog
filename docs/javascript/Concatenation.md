---
sidebar_position: 4
---

# Concatenation

En javascript le nombre est converti en chaine de caractère '1' puis est concaténé avec la constance string.

```javascript
const string = "jolebowski";
console.log(string + 1); // jolebowski1
```

```js
console.log("hello" + " " + "world"); // hello world
```

## Opération mathématique et une affectation en une seule étape

```javascript
let myVar = 1;
myVar += 5;
console.log(myVar); // 6

// otherwise

let myVar2 = 1;
myVar2 = myVar2 + 5;
console.log(myVar2); // 6
```
