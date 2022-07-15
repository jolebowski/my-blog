---
sidebar_position: 5
---

# useState

Un useState nous renvoie un tableau de 2 valeurs. 
Ca nous permet d’attribuer des variables à des valeurs à l’intérieur d’un tableau.

```javascript
import { useState } from 'react'

const App = () => {
    const [string, setString] = useState('jolebowski')
    return (
        <div>
            {console.log(string)} 
        </div>
    )

}

export default App;
```
Si l'utilité d'utiliser plusieurs useState à la fois il ne faut pas hésiter. 

Chaque fois qu’un état change il re-rendering également l’intégralité  du composant fonctionnel. De ce fait ça permet à React de savoir qu’il y a probablement une nouvelle interface utilisateur. Mais aussi de mettre à jour les derniers variables de la fonction  et les derniers props afin de voir à quoi ressemble la nouvelle interface utilisateur. 

React arrive à reconnaitre lorsque la value correspond à celle qui a été mise à jour. 

```javascript
import { useState } from 'react'

const App = () => {
    const [string, setString] = useState('jolebowski')
    return (
        <div>
            <input 
                type='text' 
                name="userName" 
                placeholder='Enter Name' 
                onChange={(e) => setString(string)} 
            />
            {console.log(string) /*jolebowski*/} 
        </div>
    )

}

export default App;
```
Pour l'exemple ci-dessus rien va se passer car en React reconnait que la valeur n’est pas une valeur différente.

Lorsqu’on initialise le useState par une valeur et que la valeur correspond à celle de l'initial cela va pas se modiifer car c’est la meme valeur. 

```javascript 
import { useState } from 'react'

const App = () => {
const [string, setString ] = (‘a’) // on modifie le champs temps par a ca value sera toujours a par contre si c’est autre chose value deviendra cette nouvelle valeur 
    return (
        <div>
            <input 
                type='text' 
                name="userName" 
                placeholder='Enter Name' 
                onChange={(e) => setString(e.target.value)} 
            />
            {console.log(string)} 
        </div>
    )

}

export default App;

```

