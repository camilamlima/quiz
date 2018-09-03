function validacao(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    if(!question1 || !question2 || !question3){
        alert("Por favor selecione a alternativa")
        return false;
    }else{
        check();
    }
}



function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "B. Hyper Text Markup Language") {
        correct++;
}
    if (question2 == "B. Cascading Style Sheets") {
        correct++;
}
    if (question3 == "A. script") {
        correct++;
    }

    var image = ["img/parabens.gif", "img/tente.gif", "img/quase.gif","img/estudar.gif"];
    var message = ["Parabens!", "Tente outra vez","Chegou Perto","Vamos revisar?"];
    var score;

    if (correct == 0) {
        score = 3;
    }

    if (correct > 0 && correct < 3) {
        score = 2;
    }

    if (correct > 0 && correct < 2) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[score];
    document.getElementById("pontuacao").innerHTML = "Você acertou " + correct + " questões!";
    document.getElementById("image").src = image[score];
    }
