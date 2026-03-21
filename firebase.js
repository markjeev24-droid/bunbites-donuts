// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// YOUR CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyAnIBTl_WwH4QwCq0CtjtCEU3mqGFOf-bI",
  authDomain: "bunbites-donuts.firebaseapp.com",
  projectId: "bunbites-donuts",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);