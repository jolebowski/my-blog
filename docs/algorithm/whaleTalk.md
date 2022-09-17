Le langage des baleines
Prenez une phrase comme "turpentine and turtles" et traduisez-la en son équivalent "langage baleine" : "UUEEIEEAUUEE".

Il existe quelques règles simples pour traduire un texte en langage baleine :

- Il n'y a pas de consonnes. Seulement des voyelles, à l'exception du "y".
- Les "u" et les "e" sont très longs, nous devons donc les doubler dans notre programme.

Une fois que nous avons converti le texte en langage baleine, le résultat est chanté lentement, comme c'est la coutume dans l'océan.

```js
const input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let y = 0; y < vowels.length; y++) {
    if (input[i] === vowels[y]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);

const resultString = resultArray.join("").toUpperCase();

console.log(resultString); // UUEEIEEAUUEE
```
