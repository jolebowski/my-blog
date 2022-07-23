---
sidebar_position: 2
---

# Arrow Function

Les fonctions fléchées nous permettent d'écrire une syntaxe de fonction plus courte :

```js
const addition = (a, b) => a + b 
```

Lorsqu'il n'y a pas de corps de fonction, et seulement une valeur de retour, la syntaxe de la fonction fléchée vous permet d'omettre le mot-clé return ainsi que les crochets entourant le code. Cela permet de simplifier les fonctions plus petites en instructions d'une ligne :

```js
const myFunc = () => "value";
```
Si une fonction fléchée a un seul paramètre, les parenthèses entourant le paramètre peuvent être omises.

```js
const doubler = item => item * 2;
```