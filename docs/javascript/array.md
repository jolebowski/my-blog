---
sidebar_position: 7
---

# Array

Un tableau est une structure de données que nous pouvons utiliser pour stocker plusieurs valeurs. 

Imbriquer des tableau dans d'autres tableau c'est `un tableau multidimensionnel.` 

## Push 

La méthode [push](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) permet d'ajouter des données à la fin d'un tableau. 
Push prend un ou plusieurs paramètres et les 'push' à la fin du tableau. 

```javascript 
const array = [1,2,3]
array.push(4)
console.log(array) // [1,2,3,4]
```

## Pop

La méthode [pop](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) est utilisé pour supprimer le dernier élément d'un tableau. ON peut stocker la valeur supprimé en l'affectant à une constante. 

```javascript
const array = [1,2,3]
const oneDown = array.pop()
console.log(array) // [1,2]
console.log(oneDown) // 3
```

## Shift

La méthode [shift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) permet de supprimer le premier élément d'un tableau. On peut stocker la valeur supprimé en l'affectant à une constante. 

```javascript
const array = [1,2,3]
const firstElementDeleted = array.shift() // 1
console.log(array) // [2,3]
console.log(firstElementDeleted) // 1
```

## Unshift

La méthode [unshift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) permet d'ajouter un élément au début du tableau. 

```javascript
const array = [1,2,3,4]
array.unshift(0)
console.log(array) // [0,1,2,3,4]
```

## Map

La méthode [map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

Une fonction est passé à l'intérieur de map qui est appelé sur chaque élément du tableau dans l'ordre dans lequel ils apparaissent. 

``arr((e) => )`` le premier params est l'élément du tableau. 
Tout ce que la fonction renverra sera la valeur d'un nouveau tableau à l'endroit ou l'élément se trouvait dans son tableau d'origine. 

```javascript
const arr = [1,2,3,4]
console.log(arr.map((e) => e)) // [1, 2, 3, 4]
```

```javascript
const arr = [1,2,3,4]
console.log(arr.map((e) => e + 1)) // [2, 3, 4, 5]
```

```javascript
const arr = [1,2,3,4]
console.log(arr.map((e) => 'e')) // ['e', 'e', 'e', 'e']
```

## Filter

La méthode [filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) est assez similaire à map en effet il renvoie un nouveau tableau en itinérant chaque élément du tableau. 
Filter retourne une valeur `true` or `flase`. 
Tout ce qui retourne true sera la chose qui sera conservé dans le tableau.
C'est un nouveau tableau qui est renvoyé et qui n'a pu rien avoir avec le tableau initial. 

```javascript
const array = [1,2,3,4,5,6,7,8]
const arrayFiltred = array.filter((e) => e === 3)
console.log(arrayFiltred) // [3]
```

```javascript
const arrayFiltred = [1,2,3,4,5].filter(() => true) 
console.log(arrayFiltred) // [1,2,3,4,5]
const arrayFiltred2 = [1,2,3,4,5].filter(() => false) // []
console.log(arrayFiltred2) // []
```

## Includes

La méthode [includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) est une méthode qui prend un seul argument. 
Includes() vérifie à l'intérieur du tableau si l'élément existe ou non.

```javascript
const array = [1,2,3,4,5]
array.includes(3) // true
array.includes(9) // false
```

```javascript
'jolebowski'.includes('o') // true
'jolebowski'.includes('a') // false
```