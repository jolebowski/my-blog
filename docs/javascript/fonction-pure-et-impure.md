---
sidebar_position: 5
---

# Fonction pure et impure 

## Fonction pure

Une fonction pure est une fonction où la valeur de retour est uniquement déterminée par ses valeurs d'entrée. 

Le retour de la fonction dépend des paramètres qui lui sont transmis. 

```javascript
function pure(a, b){
    return a * b
}
console.log(pure(2, 2)) // 4
```
## Fonction impure

```javascript
let i = 2; 
function impure(a,b){
    return a + b + i
}
console.log(impure(1,2)) // 5
i = 1
console.log(impure(1,2)) // 4
```


