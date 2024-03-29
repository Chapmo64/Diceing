
function rolldice(){

    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const imgs = [];

    for(let i=0; i<numofdice;i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        imgs.push(`<img scr="dice_images/${value}.png">`);
    }

    diceresult.textContent = `Dice: ${values.join(", ")}`;
}