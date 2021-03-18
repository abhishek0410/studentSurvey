import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAXI_T98Y5iYy9IPbpFSv2niZ74ZxJbSXI",
    authDomain: "todo1-2577b.firebaseapp.com",
    projectId: "todo1-2577b",
    storageBucket: "todo1-2577b.appspot.com",
    messagingSenderId: "903871600859",
    appId: "1:903871600859:web:62e87eddc423fffb96d4fe",
    measurementId: "G-EW23Z25SJ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;