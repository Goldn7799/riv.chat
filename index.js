function login(){
    const email = document.getElementById('user.email').value;
    const emc = email.includes('@')
    const passwd = document.getElementById('user.passwd').value;

    if (email == ''){
        document.getElementById('output').innerHTML = "Email Kosong";
    }
    else if (passwd == ''){
        document.getElementById('output').innerHTML = "Password Kosong";
    }
    else if (emc == false){
        document.getElementById('output').innerHTML = "Email Tidak Valid";
    } 
    else {
        document.getElementById('output').innerHTML = "";
        if (email == '@admin'){
            if (passwd == 'admin'){
                open('chat');
            }else{
                document.getElementById('output').innerHTML = "Email atau kata sandi salah";
            }
        }else{
            document.getElementById('output').innerHTML = "Email atau kata sandi salah";
        }
    }
}