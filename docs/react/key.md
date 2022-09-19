Une `key` est un attribut de chaîne spécial que vous devez inclure lors de la création de listes d'éléments dans React. Les clés sont utilisées pour réagir pour identifier les éléments de la liste qui sont modifiés, mis à jour ou supprimés. En d'autres termes, on peut dire que les clés sont utilisées pour donner une identité aux éléments des listes. La prochaine chose qui vient à l'esprit est que ce qui devrait être bon doit être choisi comme clé pour les éléments des listes. Il est recommandé d'utiliser une chaîne comme clé qui identifie de manière unique les éléments de la liste.

Vous pouvez également affecter les index de tableau en tant que clés aux éléments de la liste.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.map((number, index) => <div key={index}>{number}</div>);
```
