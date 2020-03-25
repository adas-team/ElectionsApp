// Path to list and name of collection on Firebase
const fileSelected = {
  mail: {
    path: "./mailingList/filteredMailingList.json",
    collectionKey: "filteredMailingList"
  },
  candidates: {
    path: "./candidateList/candidateList.json",
    collectionKey: "candidateList"
  }
};

// Read command-line argument to determine which list to upload to Firebase
const fileType = process.argv.slice(2)[0];
let file;
if (fileType === "mail" || fileType === "candidates") {
  file = fileSelected[fileType];
} else {
  console.log(
    "ERROR: Invalid list type inputted.\nExpected input: node importToFirestore.js <mail/candidates>"
  );
  return 1;
}

// Upload to Firebase's Cloud Firestore
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const data = require(file.path);
const collectionKey = file.collectionKey; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://election-6f2a7.firebaseio.com"
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

if (data && typeof data === "object") {
  Object.keys(data[0]).forEach(docKey => {
    firestore
      .collection(collectionKey)
      .doc(docKey)
      .set(data[0][docKey])
      .then(res => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  });
}
