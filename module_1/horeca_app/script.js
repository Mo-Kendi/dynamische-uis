
let menu = {
    "fris": { name: "fris", prijs: 10, hoeveelheid: 0 },        //dit zijn js object
    "bier": { name: "bier", prijs: 15, hoeveelheid: 0 },
    "wijn": { name: "wijn", prijs: 20, hoeveelheid: 0 },
};
loop = true
while (loop){
    let bestelling = prompt("wat wilt u bestellen");
    if (bestelling in menu) {
        inputAantal = parseInt(prompt("Hoeveel " + bestelling + " wilt u?"));
        menu[bestelling].hoeveelheid += inputAantal
    }

    else if (bestelling == "stop") {
        alert("u heeft besteld")
        loop = false
    }
    else{
        alert("Dit staat niet op onze menu")
    }
}


function bonnetje(){
    let fris1 = menu.fris.hoeveelheid + " x" + (" Fris") + " = " + (menu.fris.hoeveelheid * menu.fris.prijs).toFixed(2) + '\u20AC'
    let bier1 = menu.bier.hoeveelheid + " x" + (" bier") + " = " + (menu.bier.hoeveelheid * menu.bier.prijs).toFixed(2) + '\u20AC'
    let wijn1 = menu.wijn.hoeveelheid + " x" + (" wijn") + " = " + (menu.wijn.hoeveelheid * menu.wijn.prijs).toFixed(2) + '\u20AC'
    let totaal1 = ("Uw totaal is : ") + (menu.fris.hoeveelheid * menu.fris.prijs + menu.bier.hoeveelheid * menu.bier.prijs + menu.wijn.hoeveelheid * menu.wijn.prijs ).toFixed(2) + ('\u20AC')
    document.getElementById("fris1").innerHTML=fris1;
    document.getElementById("bier1").innerHTML=bier1;
    document.getElementById("wijn1").innerHTML=wijn1;
    document.getElementById("result").innerHTML=totaal1;






}
