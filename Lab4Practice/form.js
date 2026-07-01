console.log("Form script loaded");

function checkLogin() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if (!name)
{
    document.getElementById("nameError").innerHTML = "Name is required";
}
else if (/\d/.test(name)) 
{
    document.getElementById("nameError").innerHTML = "Name must not contain numbers";
} 
else if (!/^[A-Za-z\s]+$/.test(name)) 
{
    document.getElementById("nameError").innerHTML = "Name must contain only letters and spaces";
}
else if (name.length <= 5) 
{
    document.getElementById("nameError").innerHTML = "Name must be more than 5 characters";
} 
else 
{
    document.getElementById("nameError").innerHTML = "";
}

if(!email)
{
    document.getElementById("emailError").innerHTML = "Email is required";
}
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
{
    document.getElementById("emailError").innerHTML = "Email must be a valid email address";
}
else
{
    document.getElementById("emailError").innerHTML = "";
}

if(!password)
{
    document.getElementById("passwordError").innerHTML = "Password is required";
}
else if (password.length < 4)
{
    document.getElementById("passwordError").innerHTML = "Password must be at least 4 characters long";
}
else
{
    document.getElementById("passwordError").innerHTML = "";
}

return false;
}