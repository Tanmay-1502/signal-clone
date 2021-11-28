import { firebase } from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
