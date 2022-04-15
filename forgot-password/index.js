// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBVyTf6V-zkkeJsMNOouC456ff0UdqsgxQ",
    authDomain: "riv-chat-a078f.firebaseapp.com",
    projectId: "riv-chat-a078f",
    storageBucket: "riv-chat-a078f.appspot.com",
    messagingSenderId: "269995268461",
    appId: "1:269995268461:web:07e49439947b12f7646264"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  // Initialize variables
    const auth = firebase.auth()

    //banned user
    if (localStorage.getItem('username') == 'KONTOL MEMEK'){
        close()
        close()
        close()
        open('../banned.html');
        localStorage.clear();
      };

if (email == null){
    alert('Email Kosong')
};

function rst(){
    const email = document.getElementById('user.email').value;

    auth.sendPasswordResetEmail(email)
    .then(function(){
        alert('Password Reset Sent, Check Your Email');
    }).catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message);
    })
}