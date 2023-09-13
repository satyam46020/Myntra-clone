var arr=JSON.parse(localStorage.getItem("userData")) || []

document.querySelector("form").addEventListener("submit",formfn)

function formfn(e){
    e.preventDefault();
    var target=e.target
    var email=target.querySelector("#email").value
    var password=target.querySelector("#password").value
    
    var obj={
        email,
        password
    }
    arr.push(obj)
    
    localStorage.setItem("userData",JSON.stringify(arr))

    var login=document.querySelector(".login").addEventListener("click",loginfn)
    window.location="login.html"

    function loginfn(){
        window.location="login.html"
    }
}