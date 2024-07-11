 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAvQn9IkErYX3PorQfMRRB-j0hCejvBi3Q",
    authDomain: "teacheraid-e1bbb.firebaseapp.com",
    projectId: "teacheraid-e1bbb",
    storageBucket: "teacheraid-e1bbb.appspot.com",
    messagingSenderId: "580467772497",
    appId: "1:580467772497:web:624094a44c6f14cd913c70"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export{app,analytics}

 console.log("Conexión a Firebase establecida correctamente.");
