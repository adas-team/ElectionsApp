import app from 'firebase/app';
const config = {
  apiKey: "AIzaSyATCLnWTkGsmqS1dyC5vdCWfdpk55qnvjw",
  authDomain: "election-6f2a7.firebaseapp.com",
  databaseURL: "https://election-6f2a7.firebaseio.com",
  projectId: "election-6f2a7",
  storageBucket: "election-6f2a7.appspot.com",
  messagingSenderId: "751584572617",
  appId: "1:751584572617:web:d7ad368cacee6d24b4c918",
  measurementId: "G-Q4G2KRTW5F"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
