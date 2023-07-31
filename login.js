function validate()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(username=="admin" && password=="1231"){
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}