/*SLideshow*/
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);



/*Popup login*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var state= false;
function toggle() {
  var a = document.getElementById("password");
    if(state, a.type == "password" ){
      document.getElementById("password").setAttribute("type","password");
      state=false;
      a.type = "text";
    }
    else {
      document.getElementById("password").setAttribute("type","text");
      state=true;
      a.type = "password";
    }
}






console.log("Hello world!");

// Progressbar start//
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const content = document.getElementById('content');
const bullets = [...document.querySelectorAll('.bullet')];
// Her er brugt en spreadoperator, som gør at den tager alle elementerne//
//og kopiere dem ind i et array
const dismissBtn = document.getElementById('dismissBtn');

const MAX_STEPS = 7;
let currentStep = 1;
//Let bruges her, da currentStep skal opdateres, når der sker fremskridt mellem steps.//

nextBtn.addEventListener('click', ()=>{
  const currentBullet = bullets[currentStep -1];
  currentBullet.classList.add('completed'); //Når man trykker på næste, bliver første bullet completed (grøn).//
  currentStep++;
  previousBtn.disabled = false; //Tilbageknappen bliver tilgængelig//
  if(currentStep == MAX_STEPS){
    nextBtn.disabled = true; //Ved sidste step bliver næste slået fra.//
    finishBtn.disabled = false; //Ved sidste trin, bliver tilmed tilgængelig.//
  }
})

previousBtn.addEventListener('click', () =>{
  const previousBullet = bullets [currentStep -2];
  previousBullet.classList.remove('completed'); //Når man trykker tilbage, vil completed blive fjernet.
  currentStep--;
  nextBtn.disabled = false; //Når man går tilbage, skal man kunne gå fremad igen.//
  finishBtn.disabled = true; // når man trykker en tilbage, ved den at man ikke er ved den sidste, og derfor ikke kan trykke Tilmeld//
  if(currentStep == 1){
    previousBtn.disabled = true; //Hvis man er ved første punkt, vil man ikke kunne trykke tilbage igen.//
  }
})
//Popup start//
finishBtn.addEventListener('click', function(){
  document.getElementsByClassName('popup')
  [0].classList.add('active');
})
//Progressbar slut//
dismissBtn.addEventListener('click', function(){
  document.getElementsByClassName('popup')
  [0].classList.remove('active');
  location.reload();
})
//popup slut//







/*tilmeldingsformularen*/
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
