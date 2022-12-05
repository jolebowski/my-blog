# stockage local && stockage de session && cookies

stockage local, stockage de session et les cookies sont tous des solutions de stockage client. Les données de session sont conservées sur le serveur où elles restent sous votre contrôle direct.

## stockage local et stockage de session

Le stockage local et le stockage de session sont des API relativement nouvelles et sont presque identiques. le stockage de session n'est disponible que pendant la durée de la session du navigateur et est supprimé lorsque l'onglet ou la fenêtre est fermé. Il survit cependant aux rechargements de page.

De toute évidence, si les données que vous stockez doivent être disponibles en permanence, Le stockage local est préférable à le stockage de session - bien que vous devez noter que les deux peuvent être effacés par l'utilisateur, vous ne devez donc pas compter sur l'existence continue des données dans les deux cas.

Le stockage local et le stockage de session sont parfaits pour conserver les données non sensibles nécessaires dans les scripts clients entre les pages. Les données stockées dans Le stockage local et le stockage de session peuvent facilement être lues ou modifiées depuis le client/navigateur et ne doivent donc pas être utilisées pour le stockage de données sensibles.

## Cookies

Les cookies de navigateur sont des fichiers de petite taille enregistrés sur votre ordinateur ou votre appareil mobile lorsque vous visitez un site web. Ils sont utilisés pour stocker des informations sur votre visite, comme les préférences de langue ou les pages que vous avez consultées, afin de faciliter votre navigation sur le site et d'améliorer votre expérience utilisateur. Les cookies de navigateur peuvent également être utilisés pour suivre votre activité en ligne et afficher des publicités ciblées en fonction de vos intérêts.
