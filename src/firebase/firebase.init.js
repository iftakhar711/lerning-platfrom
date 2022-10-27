// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv-FRKM1h8XiamZoBnAMp68FcDaLLPoZg",
    authDomain: "education-website-client.firebaseapp.com",
    projectId: "education-website-client",
    storageBucket: "education-website-client.appspot.com",
    messagingSenderId: "597717198662",
    appId: "1:597717198662:web:c6e4989770b89152e3a747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app