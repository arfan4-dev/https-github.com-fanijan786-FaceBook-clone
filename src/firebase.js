import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiDAVjYYn6zpoa3apSOFIc2uS_wylFCrA",
  authDomain: "facebook-clone-90efb.firebaseapp.com",
  projectId: "facebook-clone-90efb",
  storageBucket: "facebook-clone-90efb.appspot.com",
  messagingSenderId: "265725324901",
  appId: "1:265725324901:web:be58b7ef5aadd22c37a08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage();
export const db=getFirestore(app)
