// console.log('hello world');

function button_click(event){
    // console.log('Button is clicked');
    var name = prompt("whats your name? ");
    var divElement = document.getElementById('result');
    divElement.innerHTML = "good afternoon, " +name;
}

button = document.getElementById('start');
button.onclick = button_click;


// console.dir(button)

// array