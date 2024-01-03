# AMBY - Application Android pour Jeunes Entrepreneurs

## Description

AMBY est une application Android dédiée aux jeunes entrepreneurs et étudiants, fournissant une plateforme sociale innovante pour faciliter le réseautage, le partage de connaissances et la croissance professionnelle. Cette application met l'accent sur une expérience utilisateur moderne et attrayante tout en intégrant des fonctionnalités spécifiques aux besoins des utilisateurs cibles (âgés de 18 à 27 ans).

## Fonctionnalités Principales

1. **Réseautage et Profil Utilisateur :** Créez et gérez votre profil utilisateur, explorez des profils d'autres jeunes entrepreneurs, et établissez des connexions professionnelles.

2. **Partage Multimédia :** Partagez des photos, vidéos et autres contenus multimédias pour mettre en valeur vos projets et expériences.

3. **Actualités Business Mondiale :** Restez informé(e) des dernières actualités mondiales liées aux affaires et entrepreneuriat.

4. **Éducation Financière :** Accédez à des ressources éducatives pour améliorer vos compétences financières et votre compréhension du monde des affaires.

5. **Accompagnement Administratif :** Recevez des conseils et informations sur les procédures administratives liées à l'entrepreneuriat.

## Guide de Développement

### Organisation du Projet

L'organisation du projet suit une structure classique pour une application Android Studio. Voici les principaux répertoires et fichiers :

```plaintext
app/
|-- src/
|   |-- main/
|       |-- java/
|       |   |-- com/example/amby/
|       |       |-- activities/
|       |           |-- MainActivity.java
|       |-- res/
|       |   |-- drawable/
|       |   |-- layout/
|       |       |-- activity_main.xml
|       |   |-- mipmap/
|       |   |-- values/
|       |       |-- strings.xml
|       |       |-- styles.xml
|       |-- assets/
|       |   |-- external/
|       |       |-- pprslogo1923-v3ot-200w.png
|       |-- web/
|           |-- index.html
|           |-- css/
|               |-- style.css
|           |-- js/
|               |-- script.js
|-- build.gradle
|-- craco.config.js
|-- package.json
|-- settings.gradle
```

### Développement et Intégration Web

- L'activité principale (`MainActivity.java`) utilise une WebView pour afficher la page web principale (`index.html`) qui comprend du CSS (`style.css`) et du JavaScript (`script.js`).
- Les ressources (images, icônes) sont stockées dans les répertoires appropriés (`drawable`, `mipmap`, `assets`).

### Configuration du Projet

- Le fichier `build.gradle` contient les configurations du projet Android.
- Les dépendances nécessaires sont spécifiées dans `dependencies`.

### Scripts et Configurations Additionnels

- Le fichier `craco.config.js` est utilisé pour les configurations spécifiques à CRACO (Create React App Configuration Override), si nécessaire.
- Le fichier `package.json` contient les dépendances et scripts pour le développement.

### Guide d'Exécution

1. Ouvrez le projet dans Android Studio.
2. Compilez et exécutez l'application sur un émulateur ou un périphérique Android.

### Contributions

Les contributions sont les bienvenues! N'hésitez pas à ouvrir des problèmes pour signaler des bugs ou suggérer des améliorations.
