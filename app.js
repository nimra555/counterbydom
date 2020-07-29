let count = 0;


function Add(){
   let counter = document.querySelector("h3");
   counter.innerHTML = ++count;
}

function Minus(){
   let counter = document.querySelector("h3");
   counter.innerHTML = --count;
}

function reset(){
   let counter = document.querySelector("h3");
   counter.innerHTML = 0;
   let countValue = document.querySelector("h4");
   countValue.innerHTML = "Count: " + count;
}
