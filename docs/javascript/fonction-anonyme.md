---
sidebar_position: 6
---

# Fonction anonyme

Les fonctions anonymes sont comme leur nom l'indique, des fonctions qui ne vont pas posséder de nom. En effet, lorsqu'on crée une fonction, nous ne sommes pas obligés de lui donner un nom à proprement parler.

```javascript
function(){
    alert('hellow world !!!')
}
const sayHello = function(){
    console.log('Hi there !')
}
sayHello()
```

## Pair ou impair

Vérifier qu'un nomnre est pair ou impair en y ajoutant % 2.

```javascript
if (48 % 2 === 0) {
  console.log("pair");
} else if (49 % 2 === 1) {
  console.log("impair");
}
```
