import app from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "./config/config";
import FirebaseContext from "./context";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database();
  }
}

export default Firebase;
export { FirebaseContext };
