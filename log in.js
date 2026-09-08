function user_accoun(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "induwara@gmail.com" && password === "induwara"){
        alert("success");
        window.location.href = "Dashboard.html";
    }else{
        alert("log in fail");
    }
}