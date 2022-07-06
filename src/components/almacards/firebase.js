

import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBFls1AI6OpZsMk0vwFORC585vFQpO1TgM",
    authDomain: "alma-38eb5.firebaseapp.com",
    projectId: "alma-38eb5",
    storageBucket: "alma-38eb5.appspot.com",
    messagingSenderId: "2963463079",
    appId: "1:2963463079:web:ea768ef45dbba2939e7482",
    measurementId: "G-5W75HTWZ0S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database