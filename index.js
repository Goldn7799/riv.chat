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
    const database = firebase.database()

    //banned user
    if (localStorage.getItem('username') == 'KONTOL MEMEK'){
      close()
      close()
      close()
      open('../banned.html');
      localStorage.clear();
    };

    if (localStorage.getItem('login1') != null){
        open('chat');
        let time;
        function wt() {
          time = setTimeout(waitt, 2000);
        }
        function waitt() {
          close();
        }
    };

function login(){
    const email = document.getElementById('user.email').value;
    const emc = email.includes('@')
    const password = document.getElementById('user.passwd').value;

    if (email == ''){
        document.getElementById('output').innerHTML = "Email Kosong";
    }
    else if ( password == ''){
        document.getElementById('output').innerHTML = "Password Kosong";
    }
    else if (emc == false){
        document.getElementById('output').innerHTML = "Email Tidak Valid";
    } 
    else {
        document.getElementById('output').innerHTML = "";
    
        auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)

      //save login session
      var user_ref = database.ref('users/' + user.uid)
      user_ref.on('value', function(snapshot) {
      var datadb = snapshot.val();
      var username;
      localStorage.setItem('username', datadb.username);
      var userid;
      localStorage.setItem('userid', user.uid);
      localStorage.setItem('useremail', datadb.email);
      });
      // DOne
      const cb = document.querySelector('#rm');
      cbf = cb.checked;
      if (cbf == true) {
          localStorage.setItem('login1', '1');
    };
      alert('User Logged In!!')
      open('chat');
      let time;
        function wt() {
          time = setTimeout(waitt, 2000);
        }
        function waitt() {
          close();
        }
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message);
    })
    }
}
