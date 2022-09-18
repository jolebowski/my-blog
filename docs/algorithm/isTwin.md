Le jumeau (twin) d'un mot est un mot écrit avec exactement les mêmes lettres (indépendamment de la casse), mais
pas nécessairement dans le même ordre.
Par exemple Marion est le jumeau de Romain
La fonction (istwin(a, b) retourne true si b est le jumeau de a ou false si ce n'est pas le cas. a et b sont deux
chaînes de caractères non null.

```js
function isTwin(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

console.log(isTwin("hello", "world")); //false
console.log(isTwin("acb", "bca")); //true
console.log(isTwin("acb", "ba")); //false
console.log(isTwin("Lookout", "Outlook")); //true
```
