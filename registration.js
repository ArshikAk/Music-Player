function validation(event)
{
    // event.preventDefault();

    document.getElementById("nameError").style.display = 'none';
    document.getElementById("emailError").style.display = 'none';
    document.getElementById("passwordError").style.display = 'none';
    document.getElementById("confirmPasswordError").style.display = 'none';


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword= document.getElementById("confirmPassword").value;


    if(name.trim() === "")
    {
        document.getElementById("nameError").innerHTML = "Name is required";
        document.getElementById("nameError").style.display = 'block';
        return false;
    }

    if(name.length < 3)
    {
        document.getElementById("nameError").innerHTML = "Name should be atleast 3 leaters";
        document.getElementById("nameError").style.display = 'block';
        return false;
    }

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
        document.getElementById("passwordError").innerHTML = "Password should be atleast 8 letters";
        document.getElementById("passwordError").style.display = 'block';
        return false;
    }

    if(confirmPassword.trim() === "")
    {
        document.getElementById("confirmPasswordError").innerHTML = "Confirm Password is required";
        document.getElementById("confirmPasswordError").style.display = 'block';
        return false;
    }

    if(password != confirmPassword)
    {
        document.getElementById("confirmPasswordError").innerHTML = "Password does'nt match";
        document.getElementById("confirmPasswordError").style.display = 'block';
        return false;
    }

    return true;
}