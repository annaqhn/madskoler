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
    hidden = false;
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
