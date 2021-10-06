import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
import "firebase/messaging";
import "firebase/storage"

const firebaseConfig = {apiKey: "AIzaSyDgdU-HlBSLDXqrY4QTUEuzrGKqyWmJpi0",
authDomain: "muizzchats.firebaseapp.com",
databaseURL: "https://muizzchats-default-rtdb.firebaseio.com",
projectId: "muizzchats",
storageBucket: "muizzchats.appspot.com",
messagingSenderId: "1064451626421",
appId: "1:1064451626421:web:140ece914119e96f24f5fc",
measurementId: "G-8CP1V0QKF7"};/*use your own configuration*/

const firebaseApp = firebase.initializeApp(firebaseConfig);
/*you can enable persistence to allow the user to see previous data when he's offline but it will make your queries very slow which leads
to bad user experience so I suggest you implement your own offline support by caching the data and retrieving them when the user is offline*/
//firebaseApp.firestore().enablePersistence();
const db = firebaseApp.firestore();
const db2 = firebaseApp.database();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const createTimestamp2 = firebase.database.ServerValue.TIMESTAMP;
const messaging = "serviceWorker" in navigator && "PushManager" in window ?  firebase.messaging() : null;
const fieldIncrement = firebase.firestore.FieldValue.increment;
const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");

//db.disableNetwork();

export {loadFirebase, auth , provider, createTimestamp, messaging, fieldIncrement, arrayUnion, storage, audioStorage, db2, createTimestamp2};
export default db;
