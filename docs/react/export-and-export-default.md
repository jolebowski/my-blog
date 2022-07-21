---
sidebar_position: 7
---

# export et export default


## Named Exports 

Les exportations nommées utilisent le nom de la fonction ou de la classe comme identifiant.

```javascript
export const myFunction = () => {}
```
Les exportations nommées permettent plusieurs exportations dans un seul fichier.

```javascript
import { MyComponent, MyComponent2 } from "./MyComponent" ;

// export from file ./MyComponent.js
export const MyComponent = () => {} 
export const MyComponent2 = () => {}
```
Importez ensuite les exportations spécifiques qu'ils souhaitent entourer d'accolades.
Le nom du module importé doit être le même que le nom du module exporté.

```javascript
import { MyComponent } from "./MyComponent" ;
```

Nous pouvons renommer nos exportations avec un alias si nous avons des collisions dans un fichier.
```javascript
import { MyComponent2 as MyNewComponent } from "./MyComponent" ;

```

## Default Exports

Nous pouvons avoir qu'un seul export par défaut par fichier. Lorsque nous importons, nous devons spécifier un nom et importer comme :

```javascript
// import
import MyDefaultComponent from "./MyDefaultComponent";
// export
const MyComponent = () => {}
export default MyComponent;

```

La nom de l'importation est complètement indépendante de l'exportation par défaut et nous pouvons utiliser n'importe quel nom que nous aimons.

