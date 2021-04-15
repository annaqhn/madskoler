// input object
var fname = document.forms["vform"]["fname"];
var postnr = document.forms["vform"]["postnr"];
var city = document.forms["vform"]["city"];
var phone = document.forms["vform"]["phone"];
var email = document.forms["vform"]["email"];
var birth = document.forms["vform"]["birth"];
var cpr = document.forms["vform"]["cpr"];
var kommune = document.forms["vform"]["kommune"];

//getting error display
var name_error = document.getElementById("name_error");
var post_error = document.getElementById("post_error");
var city_error = document.getElementById("city_error");
var phone_error = document.getElementById("phone_error");
var email_error = document.getElementById("email_error");
var birth_error = document.getElementById("birth_error");
var cpr_error = document.getElementById("cpr_error");
var kommune_error = document.getElementById("kommune_error");

// setting event addEventListener
fname.addEventListener("blur", nameVerify, true);
postnr.addEventListener("blur", postVerify, true);
city.addEventListener("blur", cityVerify, true);
phone.addEventListener("blur", phoneVerify, true);
email.addEventListener("blur", emailVerify, true);
birth.addEventListener("blur", birthVerify, true);
cpr.addEventListener("blur", cprVerify, true);
kommune.addEventListener("blur", kommuneVerify, true);

//function
function validate(){
  if (fname.value == ""){
    fname.style.border = "1px solid red";
    name_error.textContent = "Skal have Fuldenavn";
    fname.focus();
    return false;
  }

  if (postnr.value == ""){
    postnr.style.border = "1px solid red";
    post_error.textContent = "Skal have postnr";
    postnr.focus();
    return false;
  }

  if (city.value == ""){
    city.style.border = "1px solid red";
    city_error.textContent = "Skal have By";
    city.focus();
    return false;
  }

  if (phone.value == ""){
    phone.style.border = "1px solid red";
    phone_error.textContent = "Skal have telefon nummer";
    phone.focus();
    return false;
  }

  if (email.value == ""){
    email.style.border = "1px solid red";
    email_error.textContent = "Skal have email";
    email.focus();
    return false;
  }

  if (birth.value == ""){
    birth.style.border = "1px solid red";
    birth_error.textContent = "Skal have fødsels dato";
    birth.focus();
    return false;
  }

  if (cpr.value == ""){
    cpr.style.border = "1px solid red";
    name_error.textContent = "Skal have cpr";
    cpr.focus();
    return false;
  }

  if (kommune.value == ""){
    kommune.style.border = "1px solid red";
    kommune_error.textContent = "Skal have kommune";
    kommune.focus();
    return false;
  }
}

function nameVerify(){
  if (fname.value !=""){
    fname.style.border = "1px solid #5E6E66";
    name_error.innerHTML = "";
    return true;
  }

  if (post.value !=""){
    post.style.border = "1px solid #5E6E66";
    post_error.innerHTML = "";
    return true;
  }

  if (city.value !=""){
    city.style.border = "1px solid #5E6E66";
    city_error.innerHTML = "";
    return true;
  }

  if (phone.value !=""){
    phone.style.border = "1px solid #5E6E66";
    phone_error.innerHTML = "";
    return true;
  }

  if (email.value !=""){
    email.style.border = "1px solid #5E6E66";
    email_error.innerHTML = "";
    return true;
  }

  if (birth.value !=""){
    birth.style.border = "1px solid #5E6E66";
    birth_error.innerHTML = "";
    return true;
  }

  if (cpr.value !=""){
    cpr.style.border = "1px solid #5E6E66";
    cpr_error.innerHTML = "";
    return true;
  }

  if (kommune.value !=""){
    kommune.style.border = "1px solid #5E6E66";
    kommune_error.innerHTML = "";
    return true;
  }
}
