// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAL7mqwOiCME-_WB670N1pLJmiNoCMQluM",
    authDomain: "navix-energy-39903.firebaseapp.com",
    projectId: "navix-energy-39903",
    storageBucket: "navix-energy-39903.appspot.com",
    messagingSenderId: "1010785463871",
    appId: "1:1010785463871:web:9420cfe22d1938adad528a",
    measurementId: "G-XYLSK6C6T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("submit").addEventListener("click", function() {
    const email = document.getElementById('emailField').value;
    const name = document.getElementById('nameField').value;
    const subject = document.getElementById('subjectField').value;
    const message = document.getElementById('messageField').value;
    const date_today = new Date();
    const differentiated_time = Date.now()
    const contact_time = date_today.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
    
    let name_filled = false;
    let email_filled = false;
    let subject_filled = false;
    let message_filled = false;
    
    if (name != "") {
        name_filled = true;
    };
    if (email != "") {
        email_filled = true;
    };
    if (subject != "") {
        subject_filled = true;
    };
    if (message != "") {
        message_filled = true;
    };

    if (name_filled && email_filled && subject_filled && message_filled && document.getElementById("agreeField").checked) {
        addDoc(collection(db, "contactrequests"), {
            name: name, 
            email: email,
            subject: subject, 
            message: message,
            contact_time: contact_time
        })
    }
});