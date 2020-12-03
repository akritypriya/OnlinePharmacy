function checkFirstName(form){
    console.log(form.name.value)
    var regex = /^[a-zA-Z ]+$/;
    if(!form.name.value){
        alert("First Name Field cannot be left empty");
        form.name.focus();
        return false;
      }
    if(regex.test(form.name.value) == false){
    alert("First Name must be in alphabets only");
    form.name.focus();
    return false;
}
    return form.name.value;
  }
  

  function checkLastName(form){
    console.log(form.lname.value)
    var regex = /^[a-zA-Z ]+$/;
    if(!form.lname.value){
        alert("Last Name Field cannot be left empty");
        form.lname.focus();
        return false;
      }
    if(regex.test(form.lname.value) == false){
    alert("Last Name must be in alphabets only");
    form.lname.focus();
    return false;
}
    return form.lname.value;
  }

function checkEmail(form){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(regex.test(form.email.value)){
        return form.email.value;
    }
    else{
        alert("This is not a valid email address");
        return false;
    }
}


function checkMobileNumber(form){
    console.log(form.number.value)
    var regex = /^[0-9+]{7,15}$/;
    if(!form.number.value){
        alert("Mobile Number Field cannot be left empty");
        form.number.focus();
        return false;
      }
    if(regex.test(form.number.value) == false){
    alert("Not a valid mobile number!");
    form.number.focus();
    return false;
}
    return form.number.value;
  }

function checkPostalCode(form){
    console.log(form.postalcode.value)
    var regex = /^[0-9+]{4,10}$/;
    if(!form.postalcode.value){
        alert("postalcode  Field cannot be left empty");
        form.postalcode.focus();
        return false;
      }
    if(regex.test(form.postalcode.value) == false){
    alert("Not a valid postalcode number!");
    form.postalcode.focus();
    return false;
}
    return form.postalcode.value;
  }
async function getDetail(username, password){
    await axios.get("http://localhost:1337/Addusers")
    .then(function(response){
        var data = response.data
        var check = 1
        data.forEach(d => {
            console.log(d.email, d.password, username, password)
            if(username===d.email && password===d.password)
            {
                check = 0
                document.getElementById("auth").innerHTML = 
            "Login Success!"
        window.location.href = "http://127.0.0.1:5500/product.html"
        window.localStorage.setItem("auth", "success")
            }
            else if(check === 1){
                document.getElementById("auth").innerHTML = 
            "Invalid Credentials!"
            }
        })
    })
    return false
}

async function validateLogin(){
    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    username = form.username.value
    password = form.password.value
    if(!username || !password){
        document.getElementById("auth").innerHTML = 
            "Enter Credentials!"
    }
    getDetail(username, password)
}


function checkAddress(form){
    var address = /^[a-zA-Z0-9,. ]{5,150}$/;
    if(address.test(form.address.value)){
        return form.address.value;
    }
    else{
        alert("This is not a valid address");
        return false;
    }
}

function checkGender(form){
    gender = form.gender.value
    if(!gender){
        alert("select gender")
        return false;
    }
    return form.gender.value;
}

function checkPassword(form){
    pwd1 = form.pwd1.value;
    pwd2 = form.pwd2.value;
    console.log('pwd1:', pwd1)
    console.log('pwd1:', pwd2)
    var passw=   /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(pwd1.match(passw)) {
        if (pwd1 === pwd2)
            return form.pwd1.value;
        else{
        alert("Password doesnt match")
        return false;
        }
    }
    else{
    alert("Weak Password! Try another password")
    return false;
    }
}

function checkAgree(form){
    agree = form.agree.checked
    if(!agree){
        document.getElementById("agreearea").innerHTML = "Please Agree!"
        return false
    }
    else{
        document.getElementById("agreearea").innerHTML = ""
        return true
    }
}
 
function postRequest(firstName, lastName,password, gender, email, mobileNumber, address, postalCode){
    axios.post("http://localhost:1337/registrations" ,{
        "FirstName":firstName,
        "LastName":lastName,
        "Password":password,
        "Gender":gender,
        "Email":email,
        "Phone":mobileNumber,
        "Address":address,
        "PostalCode":postalCode
    })
    .then( function(respose){
        console.log(respose.data)
    })
}

function createLogin(email,password){
    console.log(email, password)
    axios.post("http://localhost:1337/Addusers",{
        "email":email,
        "password":password
    })
    .then(function(response){
        console.log(response.data)
    })
}





function validateRegistration(){
    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    firstName = checkFirstName(form)
    lastName=checkLastName(form)
    password=checkPassword(form)
    gender=checkGender(form)
    email=checkEmail(form)
    mobileNumber=checkMobileNumber(form)
    address=checkAddress(form)
    postalCode=checkPostalCode(form)
    if(firstName&& lastName&& password&& gender&& email&& mobileNumber&& address&& postalCode) 
    {
        console.log(firstName, lastName,password, gender, email, mobileNumber, address, postalCode)
        postRequest(firstName, lastName,password, gender, email, mobileNumber, address, postalCode)
        createLogin(email,password)
    }
}
  
//             document.getElementById("regsuccess").innerHTML = "Registration Success"
//             window.location.href = "http://127.0.0.1:5500/userlogin.html"
//             sendInfoToServer()
//         }
//     else{
//         document.getElementById("regsuccess").innerHTML = "Invalid Entries"
//     }
    
// }