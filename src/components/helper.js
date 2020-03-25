import firebase from "firebase/app";
import "firebase/firestore";

const getCandidateList = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("candidateList")
    .get();

  let candidates = {};
  snapshot.forEach(function(doc) {
    const position = doc.id;
    const candidatesForPosition = doc.data();
    // for testing: console.log(position, " => ", candidatesForPosition);
    candidates = { ...candidates, [position]: candidatesForPosition };
  });

  return candidates;
};

const getPositions = async () => {
  const candidates = await getCandidateList();
  return Object.keys(candidates);
};

export { getCandidateList, getPositions };
