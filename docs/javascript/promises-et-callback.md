---
sidebar_position: 9
---

# Promises && Callback

Deux méthodes sont utilisées pour réaliser un code asynchrone. 

Le code asynchrone permet à plusieurs choses de se produire en même temps. 

une fonction callback est une fonction passé en argument dans une autre fonction et qui est appelée à l'intérieur de cette dernière. 

```javascript 
const success = (str) => {
    const successed = 'I have successed !' + str
    console.log(successed)
}

const isSuccessed = (callback) => {
    const string = '!!!'
    callback(string) 
}

isSuccessed(success)
```


Les `promises`ont été introduites dans l'ES6 car il devenait pas évident de lire du code qui était illisible et répétitif a cause des fonctions callback . 

Ce sont des objets Javascript. 

```javascript
const promise = new Promise((resolve, reject) => {
    if(1){
        setTimeout(() => {
            resolve('I have successed !')
        }, 1000)
    reject("It's rejected !")
})
promise.then((e) => e + "!!!")
  .then((newValue) => console.log(newValue, "<== newValue")).catch((rejectedValue) => console.log(rejectedValue)); // I have successed !!!! <== newValue

```

Comme son nom l'indique une promise c'est une promesse que eventuellement  cet objet aura une valeur. Ca sera soit une valeur résolue ou soit valeur rejetée.
La promise sera dans un état où elle est en attente jusqu'a ce que le resolve ou le rejet soit appelé. 

L'interêt d'utiliser reject c'est pour nous assurer d'afficher un message d'erreur au cas ou le serveur de l'api est en panne puis cela permet de séparer avec le resolve et l'erreur.


La syntaxe est user-friendly et facile à lire pour les promises contrairement aux callbacks. 
Il est plus facile de gérer les erreurs avec des promises que des callbacks.

```javascript 

//Promises
api()
.then(() => return api2())
.then(() => return api3())
.catch((e) => console.log(e))

//Callback
api(() => {
    api2(() => {
        api3() => {
            if(error){

            }else{
                
            }
        }
    })
})
```