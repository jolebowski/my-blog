# Objects

Les objets sont utiles pour stocker des données de manière structurée.

Les objets peuvent être considérés comme un stockage clé/valeur comme un dictionnaire : 

- La "clé" (représentant un nom de propriété ou de méthode ) et sa "valeur" sont séparées l'une de l'autre par deux points
- Les key: value paires sont séparées les unes des autres par des virgules
- L'objet entier est enveloppé à l'intérieur d'accolades { }.

Un objet javascript est un moyen de gérer des données flexibles. Ils permettent des combinaisons arbitraires chaînes, de nombres, de booléens, de tableaux, de fonction et d’objets.

```js
const cat = {
	name: 'Toto',
	age: 14
}
//can to use number for property name
const obj = {
	5: 'five'
}
```

## la notation par points et la notation par crochets.

```js
// with point
const me = {
	name : 'jordan'
}
const myName =  me.name

// with hook

const myObjet = {
	name : 'jordan'
}
console.log(myObjet[‘name’]) // jordan

```

## Les sous-propriétés des objets sont accessible en enchainant la notation par point ou crochets 

```js

const cars = {
	peugeot : '206',
	renault : {
		model: 'clio',
	}
}

console.log(cars['renault'].model) // clio
console.log(cars.renault.model) // clio 
```
## Accédez à une propriété qui est stockée en tant que valeur d’une variable

```js
const me = {
	Moreira : 'Jordan'
}
const name = 'Moreira'
const newName = me[name]
console.log(newName) // Jordan
```

## Collectez le nom de la propriété dynamiquement

```js
const obj = {
	propName: 'Jordan'
}

function propPrefix(str){
	const prop = 'prop'
	return prop + str
}

const someProp = propPrefix(’Name’)
console.log(someProp) // prop
console.log(obj[someProp]) // Jordan
```

## Ajoutez de nouvelles propriétés à des objets javascript existants de la même manière que vous les modifieriez

```js
const me = {
  userName: 'Jordan'
}
me['userName'] = 'Jordy' // modifier
me['name'] = 'Moreira' // ajouter
console.log(me) //  {username: 'jordy', name: 'Moreira}
```

## Supprimer des propriétés d’objets

```js
const me = {
	userName : 'Jordan'
}

Delete me.userName
Console.log(me) // {}
```

## Conventions de nommage

N'hésitez pas à utiliser des chiffres et des lettres majuscules et minuscules, mais ne commencez pas le nom de votre propriété par un chiffre. Vous n'avez pas besoin de mettre la chaîne entre guillemets ! S'il s'agit d'une propriété à plusieurs mots, utilisez la casse camel. N'utilisez pas de tirets dans les noms de vos propriétés.

```js 
const richard = {
  "1stSon": true,
  "loves-snow": true,
};

richard.1stSon // error
richard.loves-snow // error
```
## hasOwnProperty 

Méthode des objets pour déterminer si cet objet a le nom de la propriété donné. 

```js 
const nameObject = {
  propname: 'name',
}
console.log(nameObject.hasOwnProperty('propname'))// true
```



