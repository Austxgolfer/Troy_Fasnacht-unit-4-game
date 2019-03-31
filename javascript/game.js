
var jewelVal =[];
var targetNum;
var runningTot = 0;


$(`#jewel0`).on(`click`,function() {totalUpdate(jewelVal[0])});
$(`#jewel1`).on(`click`,function() {totalUpdate(jewelVal[1])});
$(`#jewel2`).on(`click`,function() {totalUpdate(jewelVal[2])});
$(`#jewel3`).on(`click`,function() {totalUpdate(jewelVal[3])});


//function to check on player total when jewel is clicked and check if click total equal random player total
function totalUpdate(jewel) {
    runningTot = runningTot + jewel;
    if (runningTot != targetNum && runningTot < targetNum) {
        document.getElementById(`displayVal`).innerHTML = jewel;
        document.getElementById(`totalVal`).innerHTML = runningTot;
        setTimeout(function(){document.getElementById(`displayVal`).innerHTML = " "},1000);
        setTimeout(function(){document.getElementById(`totalVal`).innerHTML = " "},1000);
        document.getElementById(`number`).innerHTML = "Make another selection";
    } else { if (runningTot > targetNum) {
        document.getElementById(`number`).innerHTML = "You lose!  You exceeded the target number.";
        setTimeout(function(){gameReset();},5000);
    } else {document.getElementById(`number`).innerHTML = "You Win!  Game will Restart Automatically";
        setTimeout(function(){gameReset();},5000);
};   
};
};

//assign random values to the 4 jewels and verifies no duplicates in jewel values
function randJewel() {
    for (i = 0; i < 4; i++) {
         var newVal = Math.floor((Math.random()*12)+1);
        if (jewelVal.includes(newVal)){
            i = i - 1;
        } else {jewelVal[i] = newVal;}
        console.log(jewelVal[i]);
    };
    console.log("length",jewelVal.length)
    console.log(jewelVal);
};


//assign random number total for the player
function target() {
    targetNum = Math.floor((Math.random()*100)+19);
    console.log("target ",targetNum);
};




//function to reset the game when total is met
function gameReset() {
    randJewel();
    target();
    runningTot = 0;
    document.getElementById(`number`).innerHTML = ("Your Target Value is " + targetNum);
};

randJewel();
target();
document.getElementById(`number`).innerHTML = ("Your Target Value is " + targetNum);

