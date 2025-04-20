const displayPrimeContainer = document.getElementById('displayPrimeContainer');
const scoreContainer = document.getElementById('score');
primeNumberArr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

let score = 0;
let counter = 0;
randomIntegerNumGenerator1To100();

function randomIntegerNumGenerator1To100(){
    displayPrimeContainer.innerHTML = Math.floor(Math.random() * 100) + 1;
    counter = counter+1;
    if(counter == 3){
        displayPrimeContainer.innerHTML = primeNumberArr[ Math.floor(Math.random() * 25)];
        counter = 0;
    }
}

function yesCheckPrime(){
    score = isPrimeNumber() ? score+1 : score;
    console.log(`Score: ${score}`);
    scoreContainer.innerHTML = 'Score: '+score;
    if(isPrimeNumber()){
        showFeedbackMessage(true);
    }
    else{
        showFeedbackMessage(false);
    }
    randomIntegerNumGenerator1To100();
}

function noCheckPrime(){
    score = isPrimeNumber() ? score : score+1;
    console.log(`Score: ${score}`);
    scoreContainer.innerHTML = 'Score: '+score;
    if(!isPrimeNumber()){
        showFeedbackMessage(true);
    }
    else{
        showFeedbackMessage(false);
    }
    randomIntegerNumGenerator1To100();
}

function isPrimeNumber(){
    num = displayPrimeContainer.innerHTML;
    console.log(`Numebr to be checked: ${displayPrimeContainer.innerHTML}`);
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is the only even prime
    if (num % 2 === 0) return false; // eliminate even numbers

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function showFeedbackMessage(isCorrect) {
    const messageEl = document.getElementById("feedbackMessage");
    messageEl.textContent = isCorrect ? "Woohoo!🎉 You're awesome!!🤩" : "Oh! Incorrect!😒";
    messageEl.style.backgroundColor = isCorrect ? "green" : "red";
    messageEl.classList.add("show");
  
    // Remove the class after animation to allow repeat display
    setTimeout(() => {
      messageEl.classList.remove("show");
    }, 1000);
  }
  
