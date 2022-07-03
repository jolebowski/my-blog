---
sidebar_position: 8
---

# If

If est utilisé pour prendre des décisions dans le code. le mot-clé if indique à Javascript d'exécuter le code entre les accolades sous certaines conditions définies entre parenthèses. 
Lorsque la condition est à true le programme entre les accolades s'exécute par contre lorsque la condition est à false le programme entre accolades ne s'exécute pas. 

```javascript
if(true){
    console.log("the instruction is executed")
}

function test(bool){
    if(bool){
        return "It's true"
    }else {
        return "It's false"
    }
}
console.log(test(true)) // It's true
console.log(test(false)) // It's false

```