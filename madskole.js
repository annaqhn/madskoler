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
