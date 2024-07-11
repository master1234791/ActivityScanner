var result=[];
var Act_date;
var Act_name;
var Activity=[];
var count;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc,doc,setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyAvQn9IkErYX3PorQfMRRB-j0hCejvBi3Q",
    authDomain: "teacheraid-e1bbb.firebaseapp.com",
    projectId: "teacheraid-e1bbb",
    storageBucket: "teacheraid-e1bbb.appspot.com",
    messagingSenderId: "580467772497",
    appId: "1:580467772497:web:624094a44c6f14cd913c70"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
        
    ) {
        count+=1;
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


domReady(function () {
 
    // If found you qr code
    function onScanSuccess (decodeText, decodeResult) {
      //  for (var i=1; i<3;i=i+1){
        alert("You Qr is : " + decodeText, decodeResult);
        result=decodeText;
        Act_date=document.getElementById("Activity_Date").value;
        Act_name=document.getElementById("Activity_Name").value;
        console.log(Act_name);

        console.log(Act_date);
      
       
       
        setDoc(doc(firestore, "Activities",result), {
            Activity:Act_date,
            ActName:Act_name
         });
      //  Timestamp.fromDate(new Date(Act_date)),}
      alert("Scanned");
    }
 
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

   

  
