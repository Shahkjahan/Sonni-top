let secret = Math.floor(Math.random() * 20 + 1)
let number = document.querySelector('.number')
let btn = document.querySelector('.btn')
let massage = document.querySelector('.massage')
let score = document.querySelector('.score')
number.innerHTML='*'
console.log(secret);
number.innerHTML='*'
let scorenum=10
score.innerHTML=scorenum;
btn.addEventListener('click', function(){
const guess= +document.querySelector('.guess').value;
if(!guess) {
  massage.innerHTML = 'Bu son emas';
} else if (guess==secret) {
  massage.innerHTML="To`g`ri topding";
  document.querySelector('body').style.background='green'
  document.querySelector('main').style.display='none'
} else if(guess>secret){
  if(scorenum>1){
    massage.innerHTML='Katta'
    scorenum--;
    score.innerHTML= scorenum;
  } else{
    massage.innerHTML='O`yin tugadi';
  }
} else if(guess<secret){
  if(scorenum>1){
    massage.innerHTML='Kichik'
    scorenum--;
    score.innerHTML= scorenum;
  } else{
    massage.innerHTML='O`yin tugadi';
    let res=confirm('Boshidan boshlasangiz res qiling');
    if (res == true){
      document.querySelector('body').style.display='none'
    } else {
    
  }
}}});