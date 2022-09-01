Firebase est une plat-forme google qui vous permet de créer une base de données.

L'utilisation principale est qu'elle nous aide à tirer parti d'une sorte de base de données sans que nous n'ayons pas à créer la nôtre.

Les deux base de données qui existent dans firebase sont :

- firestore s'agit de la plus récente instance.
- realtime est leur ancienne base de données.

Concept du CRUD :

- C (Create) = créer des données
- R (Read) = obtenir des données, en gros récuperer les données.
- U (Update) = la mise à jour des données
- D (Delete) = supprimer les données

## L'utilité

La majorité des données d'une application ne vivraient pas que sur la parti front end. Les utilisateurs ont leur données spécifiqiues qui leur sont propres et qu'ils veulent.

C'est la que nous demandons des données à firebase et il va renvoyer les données demandées.
Firebase doit être en mesure de confirmer que je suis la personne qui devrait pouvoir accéeder aux données sensibles.Une fois que je suis capable de le faire Firebase devrait me rendre mes données comme par exemple celui du profile qui contient les donées tel que mon age, mon nom etc.

<!-- ## Schéma

Oui que Google a vérifié que l'utilisateur a bien entré les informations demandées il lui généré un token.
Auth TOken est un jeton un chaine hachée unique
UNe chaine qui est vraiment difficile à briser

Google renvoie le auth token au site web pour que le site web le renvoie à firebase (back-end ou serveur) afin qu'il vérifie si je peux ou non accéder a cetaines données

Firebase demande a google si le jeton que le site web lui a transmit est bien valid
si jeton valid google renverra alors un jeton de vérification qui confirme que le jeton que nous avons obtenu était bien valid

Firebase va autorisé le jeton de confirmation_token de la part de Google et nous renvoie les données
Si l'utilistaeur veut faire différentes demandes à firebase il le demande avec le jeton d'acces token

Googlenous aide à nous authentifier auprès des d'autres applications afin que que nous n'ayons pas à créer un compte pour ces applications

toutes les choses dites au dessus vous se déroulez en utilisant
const app = initializeApp(firebaseConfig);

ApiKey présent dans firebaseconfig n'est pas une clé API super secrète donc pas la peine de l'externiliser, cela est expliqué dans la documentation gogole FIrebase

Nous installons énormement de packages lorque nous utilisons firebase

voir l'utilisation de ces packages dans la documentation :
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,

Chaque fois que vous appelez une base de données, cela va être asynchrone.

Les données enregistrés dans la partie liste utilistaeur n'ont rien avoir avec les autres basses de dooneés que ca soit realtime firestore
De ce fait pour pour pouvoir enregistré les users en bdd dans firestore par exemple nous devons les enregistré nous memme ce qui va permettre

firestore
comprends en réalité des données de trois choses
donnée, document, collection

Les régles présents dans le firstore servent à définir qui est autorisé à modifier quels documetns à l'intérieur

en passant allow a true va permettre d'apporter touts les modifications que nous voulons à n'importe quel document

snapshot est un peu comme les données, c'est un objet spécifique

console.log(userSnapshot.exists());
permet de vérifier s'il existe ou non une instance de celui-ci dans une base de données et nous permet également d'accéder aux données -->
