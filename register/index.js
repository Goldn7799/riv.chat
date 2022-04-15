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

function reg() {
    const username = document.getElementById('user.name').value;
    const email = document.getElementById('user.email').value;
    const emch = email.includes('@');
    const chk1 = document.getElementById('user.passwd').value;
    const  chk2 = document.getElementById('user.confirm').value;
    accd = '0'
    if (accd == '1'){
        document.getElementById('output1').innerHTML = 'Akun Sukses Di Buat';
      };
      console.log('4');

    if (username == ''){
        document.getElementById('output').innerHTML = "User Name Kosong";
    }
    else if (email == ''){
        document.getElementById('output').innerHTML = "Email Kosong";
    }
    else if (emch == false){
        document.getElementById('output').innerHTML = "Email Tidak Valid";
    }
    else if (chk1 == ''){
        document.getElementById('output').innerHTML = "Password Kosong";
    }
    else if (chk2 == ''){
        document.getElementById('output').innerHTML = "Konfirmasi Password Dulu";
    }
    else if (chk1 != chk2){
        document.getElementById('output').innerHTML = "Password Dan Konfirmasi Password Tidak Benar";
    }
    else {
        document.getElementById('output').innerHTML = "";
        password = chk1
        console.log('2')
        auth.createUserWithEmailAndPassword(email, password).then(function() {
            // Declare user variable
            var user = auth.currentUser
        console.log('3')
            // Add this user to Firebase Database
            var database_ref = database.ref()
        
            // Create User data
            var user_data = {
              email : email,
              username : username,
              last_login : Date.now()
            }
        
            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)
        
            // DOne
            alert('akun sukses dibuat');
            open('..');
            let time;
        function wt() {
          time = setTimeout(waitt, 2000);
        }
        function waitt() {
          close();
        }
          }).catch(function(error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message
            alert(error_message);
          })
          console.log('1');
          
    }
}