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
getDoc(doc(db, "blog", "plastic")).then(docSnap => {
    if (docSnap.exists()) {
        const comment_data = docSnap.data();
        localStorage.removeItem("pulled_commentsplastic")
        localStorage.removeItem("pulled_commentnamesplastic")
        localStorage.removeItem("pulled_commenttimesplastic")
        localStorage.setItem("pulled_commentsplastic",JSON.stringify(comment_data.comments))
        localStorage.setItem("pulled_commentnamesplastic",JSON.stringify(comment_data.names))
        localStorage.setItem("pulled_commenttimesplastic",JSON.stringify(comment_data.times))
        console.log("Pulled data!!!!")
    }
    else {
        console.log("NO DATA")
    }
});

const pulled_commentsplastic = JSON.parse(localStorage.getItem("pulled_commentsplastic"));
const pulled_commentnamesplastic = JSON.parse(localStorage.getItem("pulled_commentnamesplastic"));
const pulled_commenttimesplastic = JSON.parse(localStorage.getItem("pulled_commenttimesplastic"));
for (let key in pulled_commentsplastic) {
    const comment_line = document.createElement("hr")
    const comment_div = document.createElement("div")
    const comment_nametime = document.createElement("div")
    comment_nametime.classList.add("row")
    const comment_comment = document.createElement("div")
    comment_comment.classList.add("row")
    const nametext = document.createElement("p")
    nametext.classList.add("d-block")
    nametext.classList.add("col-4")
    nametext.style.fontWeight = "600"
    nametext.style.fontSize = "24px"
    nametext.innerHTML = pulled_commentsplastic[key]
    const timetext = document.createElement("p")
    timetext.classList.add("d-block")
    timetext.classList.add("col-8")
    timetext.style.fontWeight = "lighter"
    timetext.style.fontSize = "24px"
    timetext.style.textAlign = "right"
    timetext.innerHTML = pulled_commenttimesplastic[key]
    const commenttext = document.createElement("p")
    commenttext.classList.add("d-block")
    commenttext.classList.add("col-12")
    commenttext.style.fontWeight = "light"
    commenttext.style.fontSize = "18px"
    commenttext.innerHTML = pulled_commentnamesplastic[key]
    comment_nametime.appendChild(nametext)
    comment_nametime.appendChild(timetext)
    comment_comment.appendChild(commenttext)
    comment_div.appendChild(comment_nametime)
    comment_div.appendChild(comment_comment)
    document.getElementById("comment_holder").appendChild(comment_div)
    document.getElementById("comment_holder").appendChild(comment_line)
    console.log("WRITING")
}

document.getElementById("new_comment").addEventListener("click", function() {
    document.getElementById("new_comment").style.display = "none";
    document.getElementById("comment_form").style.display = "block";
});

document.getElementById("submit").addEventListener("click", function() {
    const comment = document.getElementById('commentField').value;
    const email = document.getElementById('emailField').value;
    const name = document.getElementById('nameField').value;
    const date_today = new Date();
    const differentiated_time = Date.now()
    const time = date_today.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
    
    let name_filled = false;
    let email_filled = false;
    let comment_filled = false;
    
    if (name != "") {
        name_filled = true;
    };
    if (email != "") {
        email_filled = true;
    };
    if (comment != "") {
        comment_filled = true;
    };

    if (name_filled && email_filled && comment_filled) {
        document.getElementById("fields_required").innerHTML = "";
        document.getElementById("new_comment").style.display = "block";
        document.getElementById("comment_form").style.display = "none";
        updateDoc(doc(db, "blog", "plastic"), {
            [`comments.${differentiated_time}`]: comment,
            [`names.${differentiated_time}`]: name, 
            [`emails.${differentiated_time}`]: email,
            [`times.${differentiated_time}`]: time
        })
    } else {
        document.getElementById("fields_required").innerHTML = "You must fill out all fields to continue.<br>"
    }
});