let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);

let gewenste_aantal_autos = parseInt(prompt("Hoeveel autos wilt u kwijt in de parkeergarage?"));
let aantal_auto_per_verdiepingen = 120
let aantal_verdiepingen = Math.ceil ((gewenste_aantal_autos -80) / aantal_auto_per_verdiepingen )

// let antwoord = "Ik heb nog geen idee hoeveel verdiepingen er moeten komen :-( ";
let antwoord = "Om het gewenste aantal autos kwijt te kunnen heb ik " + aantal_verdiepingen + " verdiepingen nodig.";
document.getElementById("antwoord").innerText = antwoord;
window.alert("Om het gewenste aantal autos kwijt te kunnen heb ik " + aantal_verdiepingen +  " verdiepingen nodig.")
console.log(`Om het gewenste aantal autos kwijt te kunnen heb ik ${aantal_verdiepingen} verdiepingen nodig. `)
