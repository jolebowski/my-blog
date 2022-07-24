---
sidebar_position: 3
---

# Classe et composants fonctionnels

## Classe composants

Un composant de classe vous oblige à étendre à partir de `React Component` et crée une fonction de rendu qui renvoie un élément React.

Il doit avoir la méthode `render()` renvoyant du JSX.

Le composant de classe est instancié et différentes méthodes de [cycle de vie](/docs/react/lifecycles-components) sont exécutées et appelées en fonction de la phase du composant de classe.

Les méthodes de cycle de vie de React peuvent être utilisées à l'intérieur des composants de classe.

```javascript
import React, { Component } from 'react'

class App extends Component{
    
    constructor(){
        super()
    }
    
    render(){
        return(
            <h1>jolebowski</h1>
        )
    }
}
```

## Composants fonctionnels

Un composant fonctionnel est juste une simple fonction JavaScript pure qui accepte les props comme argument et renvoie un élément React (JSX).

Les composants fonctionnels à chaque fois qu'ils render ou re-rendering exécutent le code à l'intérieur de la fonction. 

Le composant fonctionnel s'exécute de haut en bas et une fois.

Ils sont principalement responsables du rendu de l'interface utilisateur.

Les méthodes de cycle de vie React ne peuvent pas être utilisées dans les composants fonctionnels.	

```javascript
import React from 'react';

const App = () => {
    return(
        <div>
            <h1>I am jolebowski</h1>
        </div>
    )
}
```