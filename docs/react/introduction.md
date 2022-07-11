---
sidebar_position: 1
---

# Introduction

React a été par Facebook en 2013 pour répondre aux besoins des développeurs qui travaillaient sur des grosses application 
React une bibliothèque JavaScript. 

Concept de React : 

- Ne touche pas le DOM, c'est React qui s'en occupe
- Construits des sites web à base de block comme des légo
- Flux de données unidirectionnel 
- Interface utilisateur

L'idée de créer des sites web tels que des blocs, met en évidence l'utilisation des composants réutilisables. React a l'idée de petits composants pour les assembler par la suite pour former des composants plus gros. 
Qu'importe la taille du composant qu'il soit gros ou petit ils peuvent être utilisés à différents endroits de l'application. 

Les données ne circulent que dans une sens afin qu'il soit plus facile de débugger le code. 
Contrairement aux autres langages de programmation qui utilisent le mvc par exemple React va seulement créer une interface utilisateur en utilisant seulemnt la vue. 

Pour mettre en place un projet react la documentation de React est très bien documenté voici le [lien](https://fr.reactjs.org/docs/create-a-new-react-app.html).

## A savoir 

`npm i -g create-react-app`

Le fait de pourvoir rajouter -g va permettre d'installer creat-react-app dans l'ensemble d'un ordinateur pour ensuite la commande creat-react-app abondamment.

Les différents fichiers/dossiers dans un projet react : 

- package json contient tous les packages qui sont installés pour le bon fonctionnement de l'application 
- react script build
- react script test
- react script start 

create-react met en place le webpack ce qui va permettre de rendre le code un peu plus efficace.
Le webpack va optimiser tous les fichiers afin d'avoir un rendu correct lorsque l'application devient lourde en terme de fichiers.

En ce qui concerne Babel, il permet de convertir du JavaScript en du ... JavaScript. Pour être plus précis, il permet de convertir du code JavaScript récent (syntaxe ES2015+) en du code JavaScript capable d'être interprété par des vieux navigateurs. 

Un composant est un morceau de code autonome qui renvoie une représentation visuelle de l'interface utilisateur. 
C'est la partie que nous pouvons voir et avec laquelle nous pouvoins interagir. 
Cela nous permet donc de créer des site web et des interfaces utilisateurs de manière très efficace, les composants étant les représentations autonomes de html, css et js.

```javascript 
function App(){
    return(
        <div>
            <h1>Hello world</h1>
        </div>
    )
}
```

## Single-page Application

Une single-page application (SPA) est une application qui charge une unique page HTML et toutes les ressources nécessaires (telles que du JavaScript et des CSS) requises pour le fonctionnement de l’application. Aucune interaction sur la page ou les pages ultérieures ne nécessitera un nouvel aller-retour avec le serveur, ce qui signifie que la page n’a pas besoin d’être rafraîchie.