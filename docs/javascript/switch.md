---
sidebar_position: 10
---

# Switch

Si vous vous retrouvez à répéter des if, else dans votre code, où chaque condition est basée sur la même valeur, il est peut-être temps d'utiliser l'instruction switch.

```js
switch(condition a true){
	case ‘A’ :
	console.log(‘A’)
	break;
	case ‘B’:
	console.log(‘B’)
	break;
}
```

Avec `case` les valeurs sont testées avec une égalité stricte. 
Le `break` indique à javascript d’arrêter l’exécution des instructions sinon sans ça va continuer à s’exécuter donc a affiché le reste des cases. 
Techniquement il n’est pas nécessaire d’ajouter break à la dernière case étant donné que c’est le dernier cas dans le switch.

```js
switch(num){
	case 1 : 
	console.log(‘1’)
	break; 
	case 2 :
	console.log(‘2’)
	break 
	default : 
	console.log(‘3’)
	break 
}
```

`Default` instruction qui sera exécuter si aucune case instruction correspondante n’est trouvée ! 
Pensez y comme la else déclaration finale d’un if/else. 
Default est le dernier cas. 

Si plusieurs entrées avec la même sortie, vous pouvez les représenter dans une switch déclaration 
```js
let result = ‘’
Switch(){
	case 1:
	case 2:
	result = ‘1 and 2’
	break
	case 3: 
	result = ‘3’
	break  
}
```
Un switch peut être plus facile à écrire que plusieurs instructions if enchainés de else if.