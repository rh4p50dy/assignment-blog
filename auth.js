const auth = ()=>{
    user = document.forms[0].user.value
    pwd = document.forms[0].pwd.value
    check(user,pwd)
    change();
}

const check = (user,pwd)=>{
    var data = fetch('http://localhost:3000/users')
    const result = data.then(data => data.json()).then(res => {
        for(db of res){
            if(db.name == user && db.password == pwd){
                var status = true;
            }
        }
        success(status)
    }
        )

}

const success = (status) => {
    if(status){
        localStorage.setItem('user',user);
        alert("Success")
        change();
    }else{
        alert("False")
    }
}

const logout = ()=>{
    localStorage.clear();
    change();
}

function change(){
    if(!localStorage.getItem('user')){
        document.getElementById("auth").innerText = "Login"
        document.forms[0].btn.setAttribute('onclick','auth()');
    }else{
        document.getElementById("auth").innerText = "Logout"
        document.forms[0].btn.setAttribute('onclick','logout()');
    }
};
change();




