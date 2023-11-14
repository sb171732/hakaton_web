import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIEFmPlF4vIrtJ901tA0SxfWVzkiyQDxI",
  authDomain: "hackaton-4f772.firebaseapp.com",
  projectId: "hackaton-4f772",
  storageBucket: "hackaton-4f772.appspot.com",
  messagingSenderId: "12414139549",
  appId: "1:12414139549:web:255d0a1e8e4063c9fda874",
  measurementId: "G-TCZZQXYEB8"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }