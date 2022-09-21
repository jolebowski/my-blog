# Regex (expressions regulieres)

Les `regex` va permettre de vérifier le format d'un mot.

`^Jordan` `^` Va me permettre de détecter s'il est au début de ma chaîne de caractère

ex :
`Jordan` "Je m'appelle Jordan"

`$Jordan` `$` ca va détecter à la fin de ma chaîne de caractère

ex : Je m'appelle Jordan `Jordan`

`Jordan | jolebowski` `|` ca va détecter si l'un ou l'autre existe dans ma chaîne de caractère
ex : Je m'appelle `Jordan` ou `jolebowski`

`(foot|basket)ball)` `()` les parenthèses permettent de choisir entre plusieurs élément en concordant avec ce qu'il y 'a juste après la dernière parenthèse.

ex : ` foot` `ball ` ou `basket` `ball`

`[tl]itre` `[]` ca va chercher soit `t` ou soit `l` puis `itre`

ex : `titre` `litre` mitre

`[a-z]oudre` ca va me chercher un caractère entre a et z.

ex : `poudre` `coudre `

`Faire?` le `?` singifie que le caractère juste avant est optionel.

ex : `faire`eeee

`[ragde]{6}` si on veut que ca apparait à la suite on rajoute le nombre d'occurence + 1.

ex : `garder` `regard`

`[a-z]+` le `+` permette de faire en sort de détécter après un caractère.

ex : `salutatous`

`[0-9]` pour prendre en compte des décimaux.

ex: `123`ddd`456`

`[a-z .!]` le fait d'ajouter un point puis un espace et point d'interrogation permette de tenir compte de tout les caractères demandés dans une phrase.

ex : `Hyper passionnant !` `Je m'appelle Jordan`

`\` permet de gérer les caractères spéciaux

ex : https:`\`/`\`/youtube.com

`https?:\/\/(www\.)?[a-zA-Z0-9\.\-\/]+` le point après le www est important de le mettre de le mettre comme ca pour pas pourvoir mettre n'importe quoi. En ajoutant des parenthèses avec le point d'interrogation permette de précisier que ce qu'il y a à l'intérieur sera optionnel.

ex : `https://www.google.fr/` `http://google.fr/`

`(0|\+33)[0-6]([ |-]?[0-9]{2}){4}` le fait d'englombé plusieurs régles pour ensuite finir par 4 permettre à ce que les régles se répètent 4 fois.

ex: `0647808596` `06 07 08 09 10` `06-07-08-09-10` `+33607080910`

`he[a-z]*o` l'`*` permet de commencer à 0 contrairement au `+` qui commence à 1.
