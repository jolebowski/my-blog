# Truthy et Falsy

Parfois, vous voudrez vérifier si une variable existe et vous ne voudrez pas nécessairement qu'elle soit égale à une valeur spécifique comme true par exemple — vous vérifierez seulement si une valeur a été assignée à la variable.

```js
let myVariable = "I Exist!";

if (myVariable) {
  console.log(myVariable);
} else {
  console.log("The variable does not exist.");
}
```

Le bloc de code dans l'`if` instruction s'exécutera car myVariable a une valeur truthy; même si la valeur de `myVariable` n'est pas explicitement la valeur `true`, lorsqu'elle est utilisée dans un contexte booléen ou conditionnel, elle est évaluée à `true` car une valeur `non-falsy` lui a été attribuée.

Quelles valeurs sont fausses - ou évaluées false lorsqu'elles sont vérifiées comme condition ? La liste des valeurs fausses comprend:

- 0
- Chaînes vides comme "" ou ''
- null qui représente quand il n'y a pas de valeur du tout
- undefined qui représentent quand une variable déclarée n'a pas de valeur
- NaN, ou pas un nombre

```js
let numberOfApples = 0;

if (numberOfApples) {
  console.log("Let us eat apples!");
} else {
  console.log("No apples left!");
}
```

La condition prend la valeur false car la valeur de `numberOfApples`est 0. Étant donné 0 est une valeur fausse, le bloc de code de l'instruction `else` s'exécutera.
