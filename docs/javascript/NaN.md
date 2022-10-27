---
sidebar_position: 3
---

# NaN (Not a Number)

La propriété globale NaN est une valeur utilisé pour représenter une quantité qui n'est pas un nombre.

```javascript
console.log("hello" / 5); // NaN
```

## isNaN()

La fonction isNaN() permet de déterminer si une valeur est NaN.

```js
const isNumber = (number) => {
  if (isNaN(number)) {
    return `${number} is not a number`;
  }

  return number * 10;
};
console.log(isNumber("20A")); // 20A is not a number
console.log(isNumber("20")); // 200
```
