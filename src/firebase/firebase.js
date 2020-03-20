import app from "firebase/app";
import "firebase/database";
import FirebaseContext from "./context";
import * as firebaseConfig from "./config/config";
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database();
  }
}

export default Firebase;
export { FirebaseContext };
