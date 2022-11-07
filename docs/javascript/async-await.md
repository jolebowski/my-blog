# Async Await

C'est un moyen d'écrire des fonctions qui contiennent du code orienté promesse asynchrone qui semble synchrone

Pour créer une fonction asynchrome nous utilisons `async` fonction :

```js
const myAsyncFunction = async () => {};
```

```js
const myAsyncFunction = async () => {
  // mtn que nous sommes à l'intérieur nous pouvons utilisé await
  // ce qu'il fait await c'est quil interrompt l'éxécution des fonctions jusquà ce que ca soit terminé et revienne avec une valeur
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ); // il va attendre jusqu'a quil y est une valeur

  const users = await usersResponse.json(); // on convertit en json
  const firstUser = users[0];
  console.log(firstUser);
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
  );
  const posts = await postResponse.json();
  console.log(posts);
};
```

Lorsque nous souhaitons gérer les erreurs
Nous utilisons try et catch en effet le try va excuté tous le code et lorsqu'une erreur est détécté il va s'arreter et exécuté ce qu'il y a entre le bloc catch.

```js
try {
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await usersResponse.json();
  const firstUser = users[0];
  console.log(firstUser);
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
  );
  const posts = await postResponse.json();
  console.log(posts);
} catch (err) {
  console.log("The was error");
}
```

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((users) => {
    const firstUser = users[0];
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    )
      .then((res) => res.json())
      .then((posts) => console.log(posts))
      .catch((e) => console.log(e));
  });
```
