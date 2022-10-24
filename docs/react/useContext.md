# Use Context

Context c'est très similaire un composant qui entoure tous les autres composants qui ont besoin d'accéder au contexte.

Contexte c'est comme un lieu de stockage sauf que c'est un composant qui stocke exclusivement des choses.

```js
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
```

Le provider est le composant qui enveloppera tous les autres composants qui ont besoin d'acceder aux valeurs à l'intérieur.

```js
<UserProvider>
  <App />
</UserProvider>
```

La raison d'utiliser useContext indique au composant ou il est utilisé chaque fois qu'une valeur à l'intérieur du contexte est mis à jour le composant `re-render`

Rappel : Un composant re-render chaque fois que son état st mise à jour ou haque fois ques props changent.

Le context n'est qu'un composant glorifié qui ne fait que tirer parti de votre état.

Lorsque que nous souhaitons faire appel à context précis il suffit de faire de cette manière :

```js
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

export const Component = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
};

export const Component2 = () => {
  const { setCurrentUser } = useContext(UserContext);
  console.log({ user: { name: "jolebowski", age: 30 } });
};
```

## Avantages et inconvenients

Même si vous ne faites aucune modification dans le context lorsque vous le faites appel dans un composant quelquonque le composant va se `re-render`. Mais cela ne signifie pas qu'il restituera quoi que soit au DOM, car il ne le fera que si la valeur est réllement mise à jour.

Si on a des centaines de composants, le fait d'utiliser le même contexte à plusieurs reprises peut etre un problème de perfommances.

Avec le contexte vous êtes en mesure d'envelopper les parties appropriés de l'application et d'isoler l'accessibilité uniquement aux enfants de l'endroit ou est développé le provider contrairement à Redux qui enveloppera toujours l'application entière.
