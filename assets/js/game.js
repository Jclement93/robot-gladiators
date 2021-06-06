//Game States
//"WIN" - Player robot has defeated all enemy-robots
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//console.log(enemyNames.length);
//for(var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
  // console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
 // }

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked, " + enemyName + " now has " + enemyHealth + " health remaining.");
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    //check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    //check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }  
    }
    //if SKIP
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            //subtract money for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight () again
        else {
            fight();
        }
    } 
    //if invalid entry
    else { alert("You need to choose a valid option. Try again!");
          }

    
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}