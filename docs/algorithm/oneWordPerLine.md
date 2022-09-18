Mettre en œuvre la fonction solution de sorte que l'exécution de la ligne suivante :

Donne la sortie suivante (un mot par ligne avec \n)

```js
function solution(input) {
  const arrInput = input.split(" ");
  for (let word of arrInput) {
    console.log(word + "\n");
  }
}
solution("Hello you !");
// Hello

// you

// !
```
