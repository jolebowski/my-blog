---
sidebar_position: 9
---

# Réconciliation

Le processus de réconciliation permet à React de fonctionner plus rapidement. La réconciliation est le processus par lequel React met à jour le DOM du navigateur.

Les concepts importants qui sous-tendent le fonctionnement du processus de réconciliation sont :

- [DOM virtuel](/docs/react/realDom-and-virtualDom#virtual-dom)
- Algorithme Différent

Les actions suivantes ont lieu dans React : 

- React stocke une copie du Browser DOM qui s'appelle Virtual DOM.
- Lorsque nous apportons des modifications ou ajoutons des données , React crée un nouveau DOM virtuel et le compare avec le précédent .
- La comparaison est effectuée par Diffing Algorithm . Le fait intéressant est que toutes ces comparaisons ont lieu dans la mémoire et que rien n'est encore modifié dans le navigateur.
- Après avoir comparé, React continue et crée un nouveau DOM virtuel avec les modifications . Il est à noter que jusqu'à 200 000 nœuds DOM virtuels peuvent être produits en une seconde.
- Ensuite, il met à jour le DOM du navigateur avec le moins de modifications possible sans rendre à nouveau le DOM entier. Cela change énormément l'efficacité d'une application

Le DOM virtuel se compare à la compare à sa version précédent grâce à l' algorithme Diffing. Certains concepts utilisés par cet algorithme sont :

- Deux éléments de types différents produiront des arbres différents .
- La recherche en largeur d'abord est appliquée car si un nœud est trouvé comme modifié, il restituera l'intégralité du sous-arbre , d'où l'approche en profondeur d'abord n'est pas exactement optimale.
- Lorsque vous comparez deux éléments du même type , conservez le nœud sous-jacent identique et ne mettez à jour que les modifications apportées aux attributs ou aux styles.
- React utilise des optimisations afin qu'une différence minimale puisse être calculée efficacement en O(N) en utilisant cet algorithme.