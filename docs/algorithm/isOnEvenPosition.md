Ecrivez le corps de la fonction isonEvenPosition(table, value) afin qu'elle renvoie true si la valeur value est
contenue dans le tableau table à un index pair, et false sinon.

```js
function isOnEvenPosition(table, value) {
  for (let i = 0; i < table.length; i++) {
    if (table[i] === value) {
      if (i % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}
const t = [4, 23, 36, 7, 40, 8, 3, 2, 101, 0];
console.log(isOnEvenPosition(t, 7)); //false
console.log(isOnEvenPosition(t, 3)); // true
```
