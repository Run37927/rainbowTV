import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkMoaW21uzok_Im_CNNHaSkx56COf1pQg",
    authDomain: "rainbow-tv-5ce1e.firebaseapp.com",
    projectId: "rainbow-tv-5ce1e",
    storageBucket: "rainbow-tv-5ce1e.appspot.com",
    messagingSenderId: "804018644143",
    appId: "1:804018644143:web:108d592f13d6615c57a05a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth } //you can have many explicity exports
  export default db; //you can have only one default export