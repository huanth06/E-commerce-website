import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyAvaFk3KeQBhX9DvSHjCsX-0lPWGyQoTd0",
    authDomain: "c05casestudy.firebaseapp.com",
    projectId: "c05casestudy",
    storageBucket: "c05casestudy.appspot.com",
    messagingSenderId: "425353768818",
    appId: "1:425353768818:web:594306969f1c9bd2ef77eb"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;