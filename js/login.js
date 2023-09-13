var arr=JSON.parse(localStorage.getItem("userData")) || []

document.querySelector("form").addEventListener("submit",formfn)

function formfn(e){
    e.preventDefault()
    var target=e.target
    var email=target.querySelector("#email").value
    var password=target.querySelector("#password").value

    arr.forEach(e => {
        if(e.email==email&&e.password==password){
            // window.location="index.html"
            var login=document.querySelector(".login")
            login.innerHTML="logged in"
        }
    })
    
    var signup=document.querySelector(".signup").addEventListener("click",signupfn)

    function signupfn(){
        window.location="signup.html"
    }
}