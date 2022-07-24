---
sidebar_position: 3
---

# Redux

Redux est une bibliothèque de gestion d'état utilisée dans les applications JavaScript. Il gère simplement l'état de votre application ou en d'autres termes, il sert à gérer les données de l'application. 

Redux permet de gérer l'état de votre application en un seul endroit et de rendre les modifications apportées à votre application plus prévisibles et traçables. Cela facilite le raisonnement sur les changements qui se produisent dans votre application.

Il facilite la gestion de l'état et des données. Au fur et à mesure que la complexité de notre application augmente. Au début, c'est difficile à comprendre mais cela aide vraiment à construire des applications complexes. Au début, cela ressemble à beaucoup de travail, mais c'est vraiment utile

Avant de plonger dans Redux, nous devons connaître certains principes importants de redux. Il y a trois principes de Redux : 

- l'état de l'application est stocké dans une arborescence d'objets appelée store .
- cela signifie que nous ne modifions pas directement l'objet d'état et ses propriétés. Au lieu de cela, créez un nouvel objet, recalculez le nouvel état de l'application et mettez-le à jour avec notre objet nouvellement créé. Et c'est important car tous les changements se produisent au même endroit, donc tout doit être fait dans un ordre strict et un par un.
- les reducers sont des fonctions pures qui prennent l'état et l'action précédents (à discuter plus tard) et renvoient le nouvel état.

 ![action, reduce, store](../static/img/action-reducer-store.png)

## Actions

Les actions sont un objet JavaScript simple qui contient des informations. Ils sont la seule source d'information pour le store.

Les actions ont un champ de type qui indique le type d'action à effectuer et tous les autres champs contiennent des informations ou des données.

```js
const addTask = (task) => {
    return {
        type: 'ADD_TODO',
        task: task
    }
}

const removeTask = (task) => {
    return {
        type: 'REMOVE_TODO',
        task: task
    }
}
```
## Reducers

Les réducteurs sont les fonctions pures qui prennent l'état et l'action actuels et renvoient le nouvel état et indiquent au magasin comment faire.


```js

cons tasks = () => {
    switch(tasks = [], action.type){
        case 'ADD_TODO':
            [...tasks, action.task]
            break;
        case 'REMOVE_TODO':
            tasks.filter((task) => task !== action.task.id)
            break;
        default: 
            tasks
            break;
    }
}
```

Ainsi, dans le réducteur ci-dessus, une fonction créée avec deux arguments est d'abord l'état actuel et ensuite l'action que nous voulons effectuer, initialisons d'abord le tableau vide de l'état actuel car la première liste de tâches sera vide. 
Ensuite, vérifiez le type d'action, différents types d'actions auront des fonctionnalités différentes. Dans le cas ci-dessus, si une tâche est ajoutée, il renvoie le tableau contenant l'ancienne liste de tâches et avec une nouvelle ajoutée, mais l'ancien état ne va pas muter l'ancien. déclarez que nous allons en retourner un nouveau, cela doit être gardé à l'esprit. Idem pour supprimer, si aucun des deux ci-dessus, il suffit de renvoyer la liste. Renvoyer le nouvel état, ne jamais muter l'ancien état. 

## Store

Le store est l'objet qui contient l'état de l'application.
