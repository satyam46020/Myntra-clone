var arr=JSON.parse(localStorage.getItem("userData")) || []

document.querySelector("form").addEventListener("submit",formfn)

function formfn(e){
    e.preventDefault()
    var target=e.target
    var email=target.querySelector("#email").value
    var password=target.querySelector("#password").value
    var flag=0
    if(email==""||password=="")
    {
        var h5=document.querySelector("h5")
        h5.innerHTML="Email or Password can't be Empty!"
    }
    else
    {
        var flag=0
        arr.forEach(e => {
            if(e.email==email&&e.password==password){
                var login=document.querySelector(".login")
                var h5=document.querySelector("h5")
                h5.innerHTML="Logged in Please start shopping!"
                localStorage.setItem("ProfileName",e.name)
                // window.location="index.html"
                flag=1;
                return
            }
            if(e.email==email&&e.password!=password)
            {
                var h5=document.querySelector("h5")
                h5.innerHTML="Wrong Password!"
                flag=1
                return
            }
        })
        if(flag==0)
        {
            var h5=document.querySelector("h5")
            h5.innerHTML="Not Registered please Sign Up!"
        }
    }
}
    var signup=document.querySelector(".signup").addEventListener("click",signupfn)

    function signupfn(){
        window.location="signup.html"
    }
