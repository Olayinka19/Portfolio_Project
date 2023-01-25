import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz9j-aVlpLlh3cTyQpHBGR6wnxYpsSncg",
  authDomain: "portfolio-project-5213d.firebaseapp.com",
  projectId: "portfolio-project-5213d",
  storageBucket: "portfolio-project-5213d.appspot.com",
  messagingSenderId: "844459565669",
  appId: "1:844459565669:web:97357cc77778f206db9c8c",
  measurementId: "G-4L16X7YTJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);