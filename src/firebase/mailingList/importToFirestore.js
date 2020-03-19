const admin = require("firebase-admin");
const firebaseConfig = require("../config/config");
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./mailingList.json");
const collectionKey = "mailingList"; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
if (data && typeof data === "object") {
  Object.keys(data).forEach(docKey => {
    firestore
      .collection(collectionKey)
      .doc(docKey)
      .set(data[docKey])
      .then(res => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  });
}
