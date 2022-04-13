function reg() {
    const username = document.getElementById('user.name').value;
    const email = document.getElementById('user.email').value;
    const emch = email.includes('@');
    const chk1 = document.getElementById('user.passwd').value;
    const  chk2 = document.getElementById('user.confirm').value;

    if (username == ''){
        document.getElementById('output').innerHTML = "User Name Kosong";
    }
    else if (email == ''){
        document.getElementById('output1').innerHTML = "Username Tidak Boleh Memiliki Spasi";
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
    }
}