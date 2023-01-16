# React Native Login w/ Firebase

Reference: https://www.freecodecamp.org/news/react-native-firebase-tutorial/

## Firebase Setup
1. Clone this repository to a new project
2. Set up firebase project
3. Enable Email & Password authorization in the Firebase Console
4. Create a new iOS, Android and Web app (Or just pick 1)

## Firebase Config
1. Edit the firebaseConfigs in the ```src/firebase/config.js``` file.
2. You can find the config properties with the Firebase Console > Project Settings
    - Alternatively - you can find the config for your app when you set up the SDK for each platform.

## Adding Users to the DB (Firestore)
1. Make sure that you have firestore collections enabled ([here](https://console.cloud.google.com/firestore))
2. Start a collection to record users (or any other collection)
3. Use ```js firebase.firestore().collection('collectionName')``` 
4. Enable read and write by going to the console (Firestore > Rules) and changing ```allow read, write: if``` from false to true (ONLY FOR DEVELOPMENT. CHANGE THIS FOR PRODUCTION)

## Adding users to DB (PostgreSQL & API)
