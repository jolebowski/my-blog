## Les primitives : `string`,`number`, et `boolean`

Si vous utilisiez le `typeof` opérateur JavaScript sur une valeur de ces types :

- `string` représente des valeurs de chaîne comme "Hello, world"
- `number` est pour des nombres comme 42. JavaScript n'a pas de valeur d'exécution spéciale pour les entiers, il n'y a donc pas d'équivalent à int ou float - tout est simplement number
- `boolean` est pour les deux valeurs true et false

## Tableaux

Pour spécifier le type d'un tableau comme `[1, 2, 3]`, vous pouvez utiliser la syntaxe `number[]`; cette syntaxe fonctionne pour n'importe quel type (par exemple `string[]` est un tableau de chaînes, etc.).

Vous pouvez également voir ceci écrit comme `Array<number>`, ce qui signifie la même chose.

## Any

Any est un mot spécial à l'intérieur de TypeScript cela signifie que cela peut être n'importe quoi concernant tout type passé en argument. Cela n'est pas bon du tout car, si n'importe que type d'arguement peut être passé, cela va automatiquement à l'encontre du but de l'utilisation de TypeScript parce que nous voulons savoir quels types sont passés en tant que argument.

> :warning: **N'utilisez jamais le mot-clé any.**

## void

Par moment nous avons des fonctions qui n'ont pas de retour. Parfois nojus exécutons simplement une fonction et elle ne renvoie rien. Si tel est le cas alors nous pouvons utiliser void.
C'est un peu comme le undefined en JavaScript.

une manière de déclarer une fonction TypeScript :

```ts
const func: (a: string, b: string, c: boolean) => void = (a, b, c) => {};
// in JS const func = (a, b, c) => { };
```

## TypeScript dans un projet react

Une fois que c'est fait il faut ajouter un fichier tsconfig.json qui définir toutes les règles qu concernent les fichiers typeScript.

`jsx` => `tsx`

React a fait beaucoup de type par default à l'intérieur de tous ces composants qu'ils nous ont données.
Le ChangeEvent est essentiellement un type de fonction que nous recevons de React.
Avec ChangeEvent vous pouvez définir votre propre définition de fonction.

```ts
import { ChangeEvent } from "react";
type ISeacrBoxProps = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
```

De nombreuses de librairies contienent désormais TypeScript par défaut, du coup vous devez importer certains de ces types afin de vous assurer que la librairie lui donne ce qu'elle veut. Par moment vous devez consulter la documentation e chacune de ces libraries pour savoir quels seront les types que vous recevrez.
