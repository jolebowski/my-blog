---
sidebar_position: 8
---

# Portal

Les `portals React` proposent un moyen de rendre les enfants dans un nœud DOM qui se produit en dehors de la hiérarchie DOM du composant parent.

Les `portals` ont été introduits dans la version `React 16.0`.

Mais les `portals React` nous offrent la possibilité de sortir de l'arbre dom basique que nous connaissons tous (<div id="root"></div>) et de rendre un composant sur un nœud dom qui ne se trouve pas sous cet élément racine. Cela rompt la convention selon laquelle un composant doit être rendu en tant que nouvel élément et suivre une hiérarchie parent-enfant.

```javascript 
import { createPortal } from 'ract-dom'

createPortal(
    <button type="button">Click Me !</button>,
    document.getElementById("portal")
);

```

Nous notons le code suivant dans le fichier App.js : 

```javascript
import { createPortal } from "react-dom";
import "./App.css";

function App() {
  return createPortal(<h1>Portal demo</h1>, document.getElementById("portal"));
}
export default App;
```
Nous ajoutons dans le fichier index.html : 

```html
    <div id="portal"></div>
```

Nous pouvons voir que notre balise `<h1> Portal demo</h1>` se trouve sous le nœud DOM du portail nouvellement créé , et non sous le nœud DOM racine traditionnel (<div id="root"></div>). 

Il nous indique clairement comment React Portal offre la possibilité de sortir de l'arborescence DOM racine et de rendre un composant/élément en dehors de l'élément DOM parent.

