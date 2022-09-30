# Le strict Mode en React

Le strict mode de React permet de faire en sorte que nous utilisons aucune méthode obsolète de React. Lorsque le code est présent dans le container cela signfie que nous suivons les meilleurs pratiques de React en mode strict et permet de voir les avertissements dans la console.

```js
import { createRoot } from "react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
