### CONSIGNES

- Le design doit correspondre au maximum aux représentations Figma: https://www.figma.com/file/xlljd0BFX45cy8pPrnWGPh/Test-Technique-d%C3%A9veloppeur-front-end-(Copy)?node-id=209%3A32921
(LIEN FIGMA)
- L'application doit communiquer avec l'API [json-server](https://github.com/typicode/json-server#table-of-contents) se trouvant dans le répertoire **server/** (http://localhost:3000/)
- Utiliser Vue.js et vue-router
- Coder en Vanilla ou TypeScript
- Utiliser les bonnes pratiques et conventions de Vue.js
- **Coder le moins de lignes possible**


Cela nous permettra d'évaluer ton degré de compréhension de spécifications, ta capacité à lire et interpréter la documentation, et la rigueur et la qualité de ton code. Bien entendu, ton niveau d'expérience sur Vue.js sera pris en compte !

Il n'existe pas de solution unique ni de *bonne* réponse, ta capacité à trouver des solutions et à interpréter les consignes fait partie de l'exercice.

### Général
- Les tableaux de données doivent être limités à 5 résultats par page.

### La page des bars
- La recherche permet de filtrer les comptoirs par leur nom.
- Un bouton permettra de filtrer seulement sur les bars ayant une référence avec un stock vide

### La page des références
- La recherche permet de filtrer une référence par ses attributs.

*Optionnel:*
- Afficher les résultats en infinite scrolling

### La page des stocks
- La page de listing de Stock permet d'afficher soit les stock des Bars en fonction d'une Référence, sinon des Références en fonction d'un Bar.
- Un bouton permettra de filtrer la liste seulement sur les stocks vides

*Optionnel:*
- Paginer les résultats

### Bonus

Nous avons configuré le serveur d'API de manière à pouvoir avoir de l'authentification via le protocole OIDC.
En ajoutant un jeton d'authentification à chacune de vos requetes vous aurez la possibilité d'avoir de l'authentification sur l'API.

Pour cela nous avons configuré un client sur notre applicatif d'authentification (Keycloak).

Si vous le souhaitez, vous pouvez authentifié votre application web avec les paramêtres suivant:

- Client ID: `test-bar-front-webapp`
- Server URL: `https://accounts.unyc.io/realms/technical-tests`
- User: `user-technical-test-frontend`
- Password: `user-technical-test-frontend`
