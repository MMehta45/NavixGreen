// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, getDoc, updateDoc, arrayUnion, doc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
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

//Pull comments, pass into local variables
window.addEventListener("load", function() {
    getDoc(doc(db, "blog", "plastic")).then(docSnap => {
        if (docSnap.exists()) {
            const comment_data = docSnap.data();
            localStorage.removeItem("pulled_comments")
            localStorage.removeItem("pulled_commentnames")
            localStorage.removeItem("pulled_commenttimes")
            localStorage.setItem("pulled_comments",JSON.stringify(comment_data.comments))
            localStorage.setItem("pulled_commentnames",JSON.stringify(comment_data.names))
            localStorage.setItem("pulled_commenttimes",JSON.stringify(comment_data.times))
        }
        else {
            //pass
        }
    });
});

document.getElementById("add").addEventListener("click", function() {
    document.getElementById("new_comment").style.display = "none";
    document.getElementById("comment_form").style.display = "block";
});

document.getElementById("submit").addEventListener("click", function() {
    const comment = document.getElementById('commentField').value;
    const email = document.getElementById('emailField').value;
    const name = document.getElementById('nameField').value;
    const date_today = new Date();
    const time = toString(date_today.getMonth())+"/"+toString(date_today.getDay())+"/"+toString(date_today.getFullYear())+" at "+toString(date_today.getHours())+":"+toString(date_today.getMinutes())
    updateDoc(doc(db, "blog", "plastic"), {
        comments: arrayUnion(comment),
        names: arrayUnion(name),
        emails: arrayUnion(email),
        times: arrayUnion(time)
    })
    window.location.reload()
});