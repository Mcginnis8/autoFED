import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMukKGDlQeJspjbdDvmZmXYGQivAckNIg",
    authDomain: "automatedfed.firebaseapp.com",
    projectId: "automatedfed",
    storageBucket: "automatedfed.appspot.com",
    messagingSenderId: "570540351539",
    appId: "570540351539:web:588499ed3c69d3c8ce4346",
    measurementId: ":G-M2TKXESLXW"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };