var randomNumber = 0;
var score = 0;


const button = document.getElementById('roll');
const placeholder = document.getElementById('placeholder');
const dice = document.getElementById('diceImg');
const newGame = document.getElementById('newgame')
const refresh = document.getElementById('new')

document.getElementById("roll").addEventListener('click', () => {

   randomNumber = Math.floor(Math.random() *6) +1;
   console.log(randomNumber);

   dice.style.visibility = 'visible';
   dice.src = 'img/dice' + randomNumber + '.png';
   refresh.style.visibility = 'hidden';

   if(randomNumber !== 1) {
       score = score + randomNumber;
       placeholder.innerHTML = score;
       checkWin();
   }

       if (randomNumber == 1) {
           score = 0;
           placeholder.innerHTML = 'you lose';
           refresh.style.visibility = 'visible';


       }
})

const checkWin = () =>{
   if(score >= 20) {
       placeholder.innerHTML = 'You Won';
       dice.style.visibility = 'hidden';
       refresh.style.visibility = 'visible';
   }
}