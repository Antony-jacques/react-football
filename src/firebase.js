import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/updateProfile'
import 'firebase/firestore';
// import 'firebase/firestore'

// dans la doc, app=firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyB-QytXbDHgrC5LMvOLpBJ7rHCT-77F9K4",
    authDomain: "react-football-41714.firebaseapp.com",
    // databaseURL: "https://react-football-41714-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-football-41714",
    storageBucket: "react-football-41714.appspot.com",
    messagingSenderId: "172086194853",
    appId: "1:172086194853:web:66b06b4de820ffdfe8934c"
})
const db = app.firestore()
export const auth = app.auth()
//  const updateProfile = firebase.updateProfile()
//  export {updateProfile}
export {db}
export default app