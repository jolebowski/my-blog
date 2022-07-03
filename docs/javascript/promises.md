---
sidebar_position: 9
---

# Promises

Les `promises`ont été introduites dans l'ES6 car il devenait pas évident de lire du code qui était illisible et répétitif a cause des fonctions callback . 

```javascript
const promise = new Promise((resolve, reject) => {
    if(1){
        setTimeout(() => {
            resolve('I have successed !')
        }, 1000)
    }else{
        reject("It's rejected !")
    }
})
promise.then((e) => e + "!!!")
  .then((newValue) => console.log(newValue, "<== newValue")).catch((rejectedValue) => console.log(rejectedValue)); // I have successed !!!! <== newValue
```

Comme son nom l'indique une promise c'est une promesse que eventuellement  cet objet aura une valeur. Ca sera soit une valeur résolue ou valeur rejetée.
La promise sera dans un état où elle est en attente jusqu'a ce que le resolve ou le rejet soit appelé. 
L'interêt d'utiliser reject c'est pour nous assurer d'afficher un message d'erreur au cas ou le serveur de l'api est en panne puis cela permet de séparer avec le resolve et l'erreur.
