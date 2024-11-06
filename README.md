# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




Installation et Lancement de l'Application
Cette application permet de rechercher des artisans et de les contacter via un formulaire. Pour tester l'envoi d'e-mails, nous utilisons MailDev en tant que serveur de messagerie local.

Prérequis
Node.js installé (https://nodejs.org)
MailDev installé globalement via npm :

npm install -g maildev
Étapes pour Lancer l'Application
1. Installation des Dépendances
Installez les dépendances pour le frontend et le backend.

Backend : Accédez au dossier backend et installez les dépendances.


cd backend
npm install
Frontend : Accédez au dossier frontend (ou au dossier racine du projet si le frontend est dans la racine) et installez les dépendances.


cd frontend  # ou simplement "cd .." si le frontend est dans la racine
npm install
2. Lancer MailDev
MailDev intercepte les e-mails envoyés par l'application pour les tester localement. Démarrez MailDev en utilisant la commande suivante dans un terminal :


maildev
MailDev écoute les e-mails sur le port SMTP 1025 et offre une interface Web sur http://localhost:1080.
3. Lancer le Serveur Backend
Dans un nouveau terminal, accédez au dossier backend (si vous n'y êtes pas déjà) et démarrez le serveur :


cd backend
node server.js
Le serveur backend écoutera les requêtes sur http://localhost:5000. Il est configuré pour envoyer des e-mails via MailDev.

4. Lancer le Frontend
Dans un troisième terminal, accédez au dossier frontend (ou au dossier racine du frontend) et lancez l'application React :


cd frontend  # ou "cd .." si le frontend est dans la racine
npm start
L'application devrait maintenant s'ouvrir dans votre navigateur à l'adresse http://localhost:3000.

5. Tester l'Envoi d'un E-mail
Dans l'application, accédez à la page de détails d’un artisan (ArtisanDetail).
Remplissez le formulaire de contact avec un nom, un objet et un message, puis cliquez sur "Envoyer".
Ouvrez http://localhost:1080 pour voir l’e-mail intercepté par MailDev.
En suivant ces étapes, vous pourrez tester l'envoi d'e-mails via le formulaire de contact sans envoyer de véritables e-mails, tout en vérifiant l'interception des e-mails dans MailDev.