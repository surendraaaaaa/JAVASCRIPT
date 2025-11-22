function register(){
    let username=document.getElementById("name").value
    let password=document.getElementById("password").value
    let email=document.getElementById("email").value

    if(!username || !password || !email){
    alert("please fill the fields....")
    return;  
    }

   localStorage.setItem("name",username)
   localStorage.setItem("password",password)
   localStorage.setItem("email",email)
   alert("registered sucessful")
}

function login(){
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value

    let storeduser=localStorage.getItem("name")
    let storedpass=localStorage.getItem("password")

    if(user===storeduser&&pass===storedpass){
        alert("login sucessful");

        document.getElementById("loginform").submit()
    }
    else{
        alert("invalid credentials")
    }
}
