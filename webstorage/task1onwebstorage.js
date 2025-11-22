function registraion() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

        if(!username || !password || !email){
   alert("Fill the Fields..");
   return;
  }
    localStorage.setItem("name",username.trim());
    localStorage.setItem("email",email.trim());
    localStorage.setItem("password",password.trim());
    alert("Registered Successfully");
}

function login() {
  let username = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  if (username === localStorage.getItem("name") && password === localStorage.getItem("password")) {
    alert("LogIn Successfully..");
    document.getElementById("fast").submit()
  }

  else {
    alert("Invalid username or Password !");
  }
};