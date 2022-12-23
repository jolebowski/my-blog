# React in TypeScript

Dans un projet creat react app on peut ajouter du typescript.

On utilise un type générique généralemnt quand on travail sunr api et qu'on ne sait pas ce qu'on allons récupérer. Lorsqu'on précise ele retour de la fonction par une promesse on rajoute en argument le type générique.

Il s'agit d'une fonction générique.

Un générique c'est essentiellement un paramètre de type qui peut être utilisé dans le reste de la fonction à l'interieur.

T est généralement le type départ, ce sont les noms des paramètres les plus utilisés.

Nous rajoutons un argument T à la ifn de Promise car nous savons pas ce qu'on va retourner à ce stade là.

Le T présent juste avant d'écrire l'argument est l'élément qui va déterminé quel type de données qu'on reçoit.

```ts
const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return await res.json();
};
```

Un type `unknow` est un type qui nous permet de dire quel type nous n'avons pas obtenu.

Le type `never` est très spécial dans TypeScript. C'est un type très spécial. C'est l'opposé du type any, cela signifie que rien ne peut jamais être assigné à `never`. La raison pour laquelle une variable est never c'est pour assurer que vous prenniez l'iniatif de faire en sorte que la variable soit jamais never.

Le fait de definir des types à chaque composant, cela constitue la base TypeScript.

```ts
useEffect(() => {
  const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
  };

  const fetchUser = async () => {
    const data = await getData<Monster[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setMonters(data);
  };

  fetchUser();
}, []);
```

ChangeEventHandler est un type fonctionnel de react
