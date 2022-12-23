# type && interface

## Interface

Les types et les interfaces sont très similaires.

La règle d'or clé a retenir sur les types par rapport aux interfaces est que les interfaces sont extansibles très similaire aux composants de classe.

Le nom de l'interface doit commencer par un `I` pour désigner qu'il sagit d'une interface.

L'interface est une sorte d'objet mais sans égale contrairement au type.

Si une clé dans une interface est une propriété optionnelle, vous pouvez mettre un point d'interrogation.
Cela indiquera à TypeScript que ce que vous pouvez obtenir peut être une valeur ou une valeur nulle.

```ts
interface IsearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}
const App = ({
  classname,
  placeholder,
  onChangeHandler,
}: IsearchBoxProps) => {};
```

On a la possiblité de surchargé une interface mais aussi de l'étendre.

## type

Vous devez utiliser un signe égal lorsque vous utilisez type et à l'intérieur vous définissez un objet.

```ts
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: string) => void;
};
```

Les types nous permettent de faire ce qu'on appelle une union type.
Un type union est un type formé à partir de deux ou plusieurs autres types, représentant des valeurs qui peuvent être n'importe lesquelles de ces types.

```ts
type FranceAddress = {
  street: string;
  province: string;
};

type UsaAddress = {
  street: string;
  region: string;
};

type NorthAmericaAddress = UsaAddress | FranceAddress;

const Adress: NorthAmericaAddress = {
  province: "ada",
  region: "ad",
  street: "add",
};
```

Vous pouvez ajouter des union types suplémentaires en plus de ceux déjà ajouter.

## type generic

Lorsque des changement proviennt indirectement de l'api et que nous avons pas la main directement dessus le mieux est de trouver un moyen de nous défendre du mieux possible contre ces changements.

Le deux points après l'argument permet de définir le type de retour.

Nous retournons une promise avec les deux crochets car nous savons pas encore ce que nous récupérons.

Juste avant l'argument nous passons un paramètre afin de de permettre dêtre utilisé seuelemnbt à l'intérieur de la fonction.
T est généralement le type de départ, c'est le nom le plus fréquement utilisé.

En gros la fonction va recevoir un type T ce type T st ce que vous allez renvoyer e cette fponction à l'intérieur d'une promise.

```ts
const getData = async <T>(url): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};
```

```ts
type Monster = {
  id: number;
  name: string;
  email: string;
};

const data = await getData<Monster[]>("url");
```

En faisant cela nous savons avec certitude que les utilisateurs sont un tableau de monstres nous avons en quelque sort sécurisé le type.
