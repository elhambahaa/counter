var doc = document.getElementById("counter");
var counter = 0;

function reset() {
    counter=0;
    doc.innerHTML= (counter);
    doc.style.color="black";
    
}

function increase() {
 counter++;
 doc.innerHTML= (counter);
 doc.style.color="green";
}

function decrease() {
    counter--;
    doc.innerHTML= (counter);
    doc.style.color="red";
}


