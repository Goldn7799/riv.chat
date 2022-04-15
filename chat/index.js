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

function lot() {
    localStorage.clear()
    open('..')
    let time;
        function wt() {
            time = setTimeout(waitt, 2000);
        }
        function waitt() {
            close();
        }
};
function acci() {
    alert('Username : ' + localStorage.getItem('username') + '                                                                              UID : ' + localStorage.getItem('userid') + '                                                       Email : ' + localStorage.getItem('useremail')
    )
};
function cs() {
    const oldname = prompt('masukkan username lama ');
    if (oldname == localStorage.getItem('username')) {
        var newname = prompt('masukkan nama baru ');
        const confirm1 = confirm('yakin ingin mengganti nama? ');
        if (confirm1 == true) {
            var updates = {
                username : newname
            }
            database.ref('users/' + localStorage.getItem('userid')).update(updates)
            alert('username updated')

            var user_ref = database.ref('users/' + localStorage.getItem('userid'))
    user_ref.on('value', function(snapshot) {
        var data = snapshot.val()
        var username;
        localStorage.setItem('username', data.username);
        })}
    }else {
        alert('nama salah')
    }
}