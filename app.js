const ask = () => {
    //leer pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !==""){
    //recibir respuesta al preguntar a la bola magica
    let answer = magicBall();
    //imprimir resultado
    
    answerInput.value = answer;
    }else{
        alert("pregunta algo!!")
        answerInput.value = "";
    }
};

//funcion bola magica
const magicBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
};
         
return eightBall;


};