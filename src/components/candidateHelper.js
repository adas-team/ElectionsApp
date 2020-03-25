import firebase from "firebase/app";
import "firebase/firestore";

export const getCandidateList = () => {
  let candidates = {};

  firebase
    .firestore()
    .collection("candidateList")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        const position = doc.id;
        const candidatesForPosition = doc.data();
        console.log(position, " => ", candidatesForPosition);
        candidates = {
          ...candidates,
          [position]: [candidates]
        };
      });
    });

  return candidates;
};
