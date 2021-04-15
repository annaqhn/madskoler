//Jaroslaw kode//
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var state= false;
function toggle() {
  var a = document.getElementById("password");
  var b = document.getElementById("eye");
    if(state, a.type == "password" ){
      document.getElementById("password").setAttribute("type","password");
      state=false;
      a.type = "text";
      b.src = "img/blockeye2.png";
    }
    else {
      document.getElementById("password").setAttribute("type","text");
      state=true;
      a.type = "password";
      b.src = "img/eye3.png";
    }
}
/*function return() {
            document.getElementById('email').value='';
            document.getElementById('password').value='';
}*/
