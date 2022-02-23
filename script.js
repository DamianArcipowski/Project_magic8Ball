const input = document.querySelector("input");
const ball = document.getElementById("ball8");
const info = document.getElementById("info");
const section = document.getElementsByTagName("span");

function startAnim(){
    ball.classList.add("runAnim");
}

function restartAnim(){
    ball.classList.remove("runAnim");
}

ball.addEventListener("click",function(){

    startAnim();
    setTimeout(restartAnim,2000);

    var typedText = input.value;

    function findQuestionMark(){

        if(input.value != ""){
            for(let i=0; i< typedText.length; i++){
                var tempArr = [];
                tempArr[i] = typedText[i];
            }
    
            var len = (tempArr.length)-1;
            var markIndex = tempArr.lastIndexOf("?",-1);
    
            if(len == markIndex){
                return true;
            }
            else
                return false;
        }  
    }

    const answers = ['Oczywiście.','Bez wątpienia.','Tak, zdecydowanie.','Nie licz na to.',
                    'Moja odpowiedź brzmi nie.', 'Moje źródła mówią nie.'];

    var randomIndex = Math.floor(Math.random()*answers.length);
    var randomAnswer = answers[randomIndex];

    if(typedText === ""){
        info.classList.add("error");
        info.textContent = "Musisz zadać jakieś pytanie!";
    }
      else if(findQuestionMark() === false){
          info.classList.add("error");
          info.textContent = 'Pytanie musi być zakończone znakiem "?".'
        } 
        else {
            info.classList.remove("error");
            info.classList.add("correct");
            info.innerHTML = '<span>Odpowiedź: </span>' + randomAnswer;
        }
})