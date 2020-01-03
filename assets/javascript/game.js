$(document).ready(function () {

    // variable n to be used as a counter to grind attack power each turn. 
    var n = 1

    // setting up game state variables to ensure only one character and enemy is chosen to a time. 
    var isRunning = false;
    var enemySelected = false;

    // creating an object to hold all character information to be utilized later, key here is index value.
    var characters = {
        names: ["Baby Yoda", "Baby Jabba", "Baby Ewok", "Baby Jedi"],
        hp: [100, 120, 150, 180],
        counterAttack: [5, 8, 20, 25],
        attackBase: [15, 12, 8, 4],
    }


    // a function to set everything back to start, will be called later at click of reset game button.
    function initializeGame() {
        n = 1
        isRunning = false;
        enemySelected = false;

        // adding clone of div characters back to top of game.
        $(divClone.clone(true)).appendTo(".game-start");


        // clears other divs on the page to return appearance to the same as the start.
        $("div.enemies, div.your-character, div.fight-character, div.fight-stage, div.battle-text").empty();


        // Hides buttons and VS, displays "CHOOSE CHARACTER" message.
        $("button").hide();
        $(".battle-flag").hide();
        $(".start-message").show();


    }

    // creating a click event for user to choose a character.
    $(".image-container-char").on("click", function () {

        if (isRunning) {
            return false;
        }

        else {

            // cloning character div after click listener has been added.
            divClone = $("div.characters").clone(true)


            // setting boolean to true to prevent game from selecting multiple characters as your character.
            isRunning = true;

            // hides the user selected character in the character div.
            $(this).hide();

            // adds words to the 'your character' div.
            $("div.your-character").append("<h3>Your Character:</h3>")

            // adds the user selected character to the your character div.
            $(this).appendTo("div.your-character")

            // hides remaining characters
            $("div.characters").hide()

            // hides choose your character
            $(".start-message").hide();

            // adds words to enemy div
            $("div.enemies").append("<h3 class='enemy-flag'>CHOOSE AN ENEMY:</h3>");

            // adds remaining characters to enemies div
            $(".characters").appendTo("div.enemies");

            // reveals selected character in your character div.
            $(this).show();

            // reveals remaining characters in enemies div
            $("div.characters").show();

            // adds class to characters in enemies div for use later.
            $("div.enemies div.image-container-char").addClass("image-enemies");


            // creating a click event for user to select an enemy
            $(".image-enemies").on("click", function () {

                if (enemySelected) {
                    return false;
                }

                else {

                    // setting boolean to true to ensure only one enemy can be chosen.
                    enemySelected = true;

                    // hiding selected enemy in enemies div
                    $(this).hide();

                    // hiding choose enemy message
                    $(".enemy-flag").hide();

                    // adding words to fight character div
                    $("div.fight-character").append("<h3>Destroy them!</h3>")

                    // adding chosen enemy to fight character div
                    $(this).appendTo("div.fight-character")

                    // adding VS battle flag
                    $("div.your-character").after("<p class=battle-flag>VS</p>")

                    // adding attack and reset buttons to buttons div.
                    $("div.buttons").append("<button class='attack'>ATTACK</button>", "<button class='reset'>RESET GAME</button>");

                    // showing chosen enemy in fight character div.
                    $(this).show()

                    $("div.battle-text").empty();

                    $(".buttons").on("click", ".attack", function () {


                        // Gets the starting HP value for player and enemy, turns to integers, stores as variables.
                        var userHP = parseInt($("div.your-character div.image-container-char div.hp-text span.hp").text());
                        var computerHP = parseInt($("div.fight-character div.image-container-char.image-enemies div.hp-text span.hp").text());

                        if (enemySelected === false) {

                            $("div.battle-text").text("Please select an enemy to continue.");

                        }


                        else if (userHP > 0 && computerHP > 0) {
                            // Pulls the name of the character the user has chosen. 
                            player = $("div.your-character div.image-container-char div.name").text();

                            //  Pulls the index from the names array that matches the name of player.
                            playerIndex = characters.names.indexOf(player);
                            //  Using the index that matches the index of the name of player, pulls the HP for player character.
                            playerHP = characters.hp[playerIndex];
                            //  Using the index that matches the index of the name of player, pulls the attabkBase for Player character.
                            playerAttackBase = characters.attackBase[playerIndex];

                            playerAttack = playerAttackBase * n;

                            // Pulls the name of enemy the user has chosen. 
                            opponent = $("div.fight-character div.image-container-char.image-enemies div.name").text();

                            //  Pulls the index from the names array that matches the name of the enemy.
                            opponentIndex = characters.names.indexOf(opponent);
                            //  Using the index that matches the index of the name of the enemy, pulls the HP for enemy.
                            opponentHP = characters.hp[opponentIndex];
                            //  Using the index that matches the index of the name of enemy, pulls the attack for enemy character. 
                            //  Per directions, this number does not change based on turn, only character.
                            opponentAttack = characters.counterAttack[opponentIndex];

                            //  updating the battle-text message and HP values for both player and opponent.
                            $("div.battle-text").text('You attacked ' + opponent + ' for ' + playerAttack + ' damage. ' + opponent + ' attacked you back for ' + opponentAttack + ' damage.');
                            $("div.your-character div.image-container-char div.hp-text span.hp").text(userHP - opponentAttack);
                            $("div.fight-character div.image-container-char.image-enemies div.hp-text span.hp").text(computerHP - playerAttack);


                            // adding one to n each time attack is clicked. (Allowing attackPower to 'grind')
                            n++;

                        }

                        else if (userHP <= 0 && computerHP > 0) {

                            $("div.your-character div.image-container-character").hide();
                            $("div.battle-text").text('OH NO! You have been defeated. Reset Game to try again.');

                        }

                        else  {

                            if ($('div.enemies').html() == '') {

                                $("div.battle-text").text('CONGRATULATIONS!!!! YOU WIN!! Reset and try again with another character.')

                            }


                            else {

                                
                                enemySelected = false;
                                $("div.fight-character").empty();
                                $("div.battle-text").text('Excellent! You have defeated ' + opponent + ". Please select a new enemy to continue.")
                                $(".enemy-flag").show();
                            }

                        }


                        })

                    }


                }

            )


        }

    })

    // setting up a click event for the reset button.
    $(".buttons").on("click", ".reset", function () {

        // calling the reset function, sets all variables and elements back to starting positions. 
        initializeGame();
    })

})

// 
// 
// 

// PSEUDOCODING
// PSEUDOCODING
// PSEUDOCODING


// Inital screen set up, hard coded in HTML

// Part One.
// When ANY character is chosen, other characters move to the ENEMIES stage and their background turn red.
// The CHOOSE AN ENEMY stage flag is dynamically created when ANY character is chosen. 
// Whichever character is chosen moves down and is labeled "your character"
// The above three lines should happen inside the character click event. 

// Part two.
// Once an enemy is clicked, the enemy moves down into the staging area and the 
// other enemies backgrounds turn back to white.
// The attack button is dynamically created. 

// Part three.
// When the attack button is clicked, text-based attacks are made. 
// The enemies attack amount should always be the same, whereas the player's
// character should gain in attack HP each time. 

// If the enemy reaches 0 HP, the player has won. a message stating "You've won!
// Choose another enemy to fight" should display. Another enemy is selected and the pattern repeats
// until the player has defeated all of the enemies. 

// IF however the player reaches 0 HP before any of the enemies, it is game over. 
// A message alerting the player they have lost should appear, and a reset game button should display. 

// When reset game is selected, initializeGame function should run. 
