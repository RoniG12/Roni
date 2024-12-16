let container= document.getElementById('container')
let scoreElement=document.getElementById('score')

let score = 0


console.log(container);
console.log(scoreElement);
console.log(score);

function randomInteger(min,max){
    return Math.floor(Math.random()* (max-min+1))+min
}

function showtipa3(){
    container.innerHTML +=`
    <img
    onclick="handleClick(this)"
   class="tipa3"
   src = "https://smiled.co.il/wp-content/uploads/2022/04/%D7%93%D7%A3-%D7%A6%D7%91%D7%99%D7%A2%D7%94-%D7%98%D7%99%D7%A4%D7%94-%D7%91%D7%92%D7%A9%D7%9D-1.jpg"
   style="
   left: ${randomInteger (0,100)}%;
   top: ${randomInteger (0,100)}%;
   "
     >
      `        
}
for(let i= 0; i < 150; i++){
    showtipa3()
}
function handleClick(tipa3 ){
    score++
    scoreElement.innerHTML=score
   tipa3.remove()
}



