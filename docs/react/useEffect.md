---
sidebar_position: 6
---

# useEffect

Un `effet secondaire` appelé plus couramment en anglais le `side effect` est tout ce qui affecte quelque chose en dehors de la portée de la fonction en cours d'exécution.

Plus précisément les effets secondaires ne sont pas prévisibles, car ce sont des actions qui sont effectuées avec le "monde extérieur".

Voici quelques exemples d’effets secondaires dans les composants React :

- Effectuez des appels d’API asynchrones aux données.
- Mettez à jour l’élément DOM manuellement.
- Mettre à jour les variables globales à partir d’une fonction.

Dans cet exemple ci-dessous nous avons l'utilisation d'un effet secondaire :

```javascript
import { useState } from "react";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  console.log("render");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setMonsters(users));

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};
export default App;
```

Fetch récupère à partir d’une API extérieur, une valeur spécifique dans notre cas particulier c’est le tableau d’utilisateur.
Ce tableau, parce qu'il vient de l'extérieur de notre navigateur, va nous donner un tableau différent en mémoire de celui qu'il a enregistré.

Étant donné que le tableau est différent par rapport à celui qui est en mémoire React remarque la différence et va donc à chaque fois que l'ensemble des monstres est appelé re-rendering toute la fonction. Et vu que nous sommes en JavaScript la fonction passera par chaque ligne.  
La fonction va rafraichir à chaque fois ce qui nous entraine dans une boucle infini.

```javascript
import {useState, useEffect } from 'react'

export default const App = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => setMonsters(users))
    }, [])

    return(
        <div>
            <h1>Hello Wordl</h1>
        </div>
    )
}

```

Que fait useEffect ? En utilisant ce crochet, vous dites à React que votre composant doit faire quelque chose après le rendu. React se souvient de la fonction que vous avez passée (nous l’appelons notre « effet ») et l’appelle plus tard après avoir effectué les mises à jour du DOM.

useEffect est un outil qui nous permet d'interagir avec le monde extérieur mais n'affecte pas le rendu ou les performances du composant dans lequel il se trouve

La fonction passée à useEffect est une fonction de rappel. Celui-ci sera appelé après le rendu du composant.

Dans cette fonction, nous pouvons effectuer nos effets secondaires ou plusieurs effets secondaires si nous le voulons.

Le deuxième argument est un tableau, appelé tableau de dépendances. Ce tableau doit inclure toutes les valeurs sur lesquelles repose notre effet secondaire. Lorsque le tableau est vide cela signifie que l'useEffect sera appelé une seule fois quand le composant sera monté.

```javascript
const App = () => {
    const [value, setValue] = useState("");****
    const [monsters, setMonters] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => setMonters(users))
        .catch((e) => console.log(e));
    }, []);

    const handleChange = (e) => {
    setValue(e.target.value.toLocaleUpperCase("fr-FR"));
    };

    const handleChange2 = (e) => {
    setSearchField(e.target.value);
    };

    return (
        <div>
        <h1 className="app-title">Monster rolodex</h1>
        <SearchBox onChangeHandler={handleChange} />
        <SearchBox onChangeHandler={handleChange2} />
        <CardList monsterFilter={monsterFilter} />
        </div>
    );
};
```

Dans notre exemple ci-dessus nous avons ajouté un deuxième composant de barre de recherche pour voir un comportement qui n'est pas approprié? En effet lorsque nous entrons des caractères dans le champs la liste des monstres ainsi que le champs de recherche sont sollicités alors que ca ne devrait pas. Cela coute du temps à notre JavaScript et au fil du temps cela pourrait entraîner de nombreuses inefficacités.

```javascript
const App = () => {
    const [value, setValue] = useState("");****
    const [monsters, setMonters] = useState([]);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => setMonters(users))
        .catch((e) => console.log(e));
    }, []);

    useEffect(() => {
    const newMonstersFilter = monsters.filter((monster) =>
      monster.name.toLocaleUpperCase().includes(value)
    );
    setFilteredMonsters(newMonstersFilter);
    // a travers ce log on peut bien voir que nous déclenchons cet useEffect à chaque fois qu'il y a des modifications
    console.log(newMonstersFilter, "newMonsterFilter");
    // ici il va filtrer à travers tous les monstres lorsque d'autres monstres changent ou lorsque le champ de recherche change.
  }, [value, monsters]);

    const handleChange = (e) => {
    setValue(e.target.value.toLocaleUpperCase("fr-FR"));
    };

    return (
        <div>
        <h1 className="app-title">Monster rolodex</h1>
        <SearchBox onChangeHandler={handleChange} />
        <CardList monsterFilter={monsterFilter} />
        </div>
    );
};
```

Nous pouvons faire c'est que nous ne voulons filtrer les monstres que lorsque les éléments pertinents pour filtrer les montres ont changé , ce qui signifie que si le tableau des montres a changé ou si la valeur du champ de recherche a changé les deux vivent dans notre state. Donc nous ajoutons un deuxième useEffect qui cette fois ci comportera des éléments dans son tableau de dépendances.

## Async et Await

Lorsque vous utilisez une fonction asynchrone à l'intérieur dans useEffect vous ne pouvez pas faire cela :

```js
useEffect(async () => {}, []);
```

mais plutot comme cela:

```js
useEffect(() => {
  const getCategories = async () => {
    const categoryMap = await getCategoriesAndDocument();
    console.log(categoryMap);
  };
  getCategories();
}, []);

useEffect(() => {}, []);
```

La fonction est appelé à l'interieur de notre callback de useEffect.

## UnMounting
