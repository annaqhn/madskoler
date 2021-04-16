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
