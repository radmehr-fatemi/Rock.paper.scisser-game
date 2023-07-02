const words = ["rock" ,"paper" ,"scissers"];

const selectUser = document.querySelector("input");
const randonWord = words[Math.floor(Math.random() * words.length)];
const textP = document.querySelector("p");

document.querySelector("button").addEventListener("click" ,check);

console.log(randonWord)
function check() {
    console.log(selectUser.value)
switch(randonWord) {
    case "rock":
        if (selectUser.value == "rock") {

            textP.innerText = `You win`
            selectUser.value = `Computer choice is: ${randonWord}`
        } else {
            textP.innerText = `You lose`
            selectUser.value = `Computer choice is: ${randonWord}`
        }
        break;

        case "paper":
            if (selectUser.value == "paper") {
                
            textP.innerText = `You win`
            selectUser.value = `Computer choice is: ${randonWord}`
        } else {
            textP.innerText = `You lose`
            selectUser.value = `Computer choice is: ${randonWord}`
        }
        break;

        case "scissers":
            if (selectUser.value == "scissers") {
         
                textP.innerText = `You win`
                selectUser.value = `Computer choice is: ${randonWord}`
            } else {
                textP.innerText = `You lose`
                selectUser.value = `Computer choice is: ${randonWord}`
            }       
            }

            }
