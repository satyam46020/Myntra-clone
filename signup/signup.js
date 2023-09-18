
document.querySelector("form").addEventListener("submit", formfn)

var arr = JSON.parse(localStorage.getItem("userData")) || []

function formfn(e) {
    e.preventDefault();
    var target = e.target
    var name = target.querySelector("#name").value
    var email = target.querySelector("#email").value
    var password = target.querySelector("#password").value

    var obj = {
        name,
        email,
        password
    }
    var temp = 0
    arr.forEach(ele => {
        if (obj.email == ele.email) {
            temp = 1;
        }

    });
    var h5 = document.querySelector("h5")
    if (obj.email == "" || obj.password == "") {
        h5.innerHTML = "Email or Password can't be Empty!"
    }
    else if (temp == 0) {
        arr.push(obj)

        localStorage.setItem("userData", JSON.stringify(arr))
        h5.innerHTML = "Signed up please Log in!"
    }
    else {
        h5.innerHTML = "Already Registered Please Log in!"
    }
}
var login = document.querySelector(".login").addEventListener("click", loginfn)

function loginfn() {
    window.location = "../login/login.html"
}
