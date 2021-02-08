import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCTiaqK78ujybqhA09AiEh2Lcoa-qzUOlM",
    authDomain: "netflix-clone-96f50.firebaseapp.com",
    projectId: "netflix-clone-96f50",
    storageBucket: "netflix-clone-96f50.appspot.com",
    messagingSenderId: "340137778396",
    appId: "1:340137778396:web:a1215875e2548554e56819",
    measurementId: "G-H0X5SM0Q0Q"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth}
export default db;