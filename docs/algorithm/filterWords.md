---
sidebar_position: 3
---

# FilterWords

Dans ce problème, vous devrez filtrer des mots en fonction des lettres qu'ils contiennent. Plus précisément, vous avez une liste de mots en entrée (tous en minuscules), ainsi qu'un ensemble de lettres minuscules, et vous devrez
exclure les mots qui ne contiennent aucune lettre de l'ensemble donné.

Par exemple :

- words = ['the','doa','got','a','bone']
- letters = 'ae'

Pour l'exemple ci-dessus, la sortie correcte serait
`['the','a', 'bone']`

```js
function filterWords(words, letters) {
  return words.filter((w) => {
    for (let letter of letters) {
      console.log(w, "w");
      if (w.includes(letter)) return true;
    }
  });
}

console.log(filterWords(words, "ae"));
```
