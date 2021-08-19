import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB-QytXbDHgrC5LMvOLpBJ7rHCT-77F9K4",
    authDomain: "react-football-41714.firebaseapp.com",
    projectId: "react-football-41714",
    storageBucket: "react-football-41714.appspot.com",
    messagingSenderId: "172086194853",
    appId: "1:172086194853:web:66b06b4de820ffdfe8934c"
})

export const auth = app.auth()
export default app