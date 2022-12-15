import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAh_u034WwU5VELlJMOsDr_AnH7iawiSzw",
  authDomain: "authen-e2dd3.firebaseapp.com",
  projectId: "authen-e2dd3",
  storageBucket: "authen-e2dd3.appspot.com",
  messagingSenderId: "1013357987515",
  appId: "1:1013357987515:web:6dd485357eb19e5bbd4b9e",
  measurementId: "G-VHXD34VVFH"
})

export const auth = app.auth()
export default app
