---
sidebar_position: 8
---

# If et Else

## If

If est utilisé pour prendre des décisions dans le code.

```js
let sale = true;
if (sale) {
  console.log("Time to buy!");
}
```

Remarquez que dans l'exemple ci-dessus, nous avons une déclaration `if` . L' if énoncé est composé de :

- Le if mot clé suivi d'un ensemble de parenthèses () suivi d'un bloc de code , ou d'une instruction de bloc , indiqué par un ensemble d'accolades {}.
- À l'intérieur des parenthèses (), une condition est fournie qui évalue à true ou false.
- Si la condition est évaluée à true, le code à l'intérieur des accolades {} s'exécute.
- Si la condition est évaluée à false, le bloc ne s'exécutera pas.

## Else

Avec une instruction else un autre bloc de code peut être exécuté.

```js
if (true) {
  return "true";
} else {
  return "false";
}
```

Dans l'exemple ci-dessus, la déclaration else:

- Utilise le mot-clé else suivant le bloc de code d'un if instruction.
- Possède un bloc de code entouré d'un ensemble d'accolades {}.
- Le code à l'intérieur du bloc else de l'instruction s'exécute lorsque la condition if de l'instruction est évaluée à false.

L’ordre est important dans les instructions if, else.
