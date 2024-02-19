function validation(event)
{
    // event.preventDefault();

    document.getElementById("emailError").style.display = 'none';
    document.getElementById("passwordError").style.display = 'none';

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email.trim() === "")
    {
        document.getElementById("emailError").innerHTML = "Email Id is required";
        document.getElementById("emailError").style.display = 'block';
        return false;
    }

    if(email.includes("@gmail.com") == false)
    {
        document.getElementById("emailError").innerHTML = "Enter a Valid Email Id";
        document.getElementById("emailError").style.display = 'block';
        return false;
    }

    if(password.trim() === "")
    {
        document.getElementById("passwordError").innerHTML = "Password is required";
        document.getElementById("passwordError").style.display = 'block';
        return false;
    }
   
    if(password.length < 8)
    {
        document.getElementById("passwordError").innerHTML = "Password should be atleast 8 characters";
        document.getElementById("passwordError").style.display = 'block';
        return false;
    }

    return true;
}