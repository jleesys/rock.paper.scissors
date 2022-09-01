# rock.paper.scissors
Last edit: 2022.09.01 13:07PM PDT 

Rock Paper Scissors Game  
Created as part of a project under The Odin Project beginners course.  

Created a simple game of Rock Paper Scissors that is playable via the console.  
Objective: Create individual functions that work as part of a greater function to complete a task.  
  
At the top level, we have function playGame() which initiates the game. This function also has a 'for loop' which makes sure that the length of a game is 5 rounds.  
It then tells you your score.  
  
One level down we have the playRound() function which plays out a single round of rock paper scissors. This function takes two functions in as arguments. Put simply, the playRound() function takes the two moves (one from the player and one from the computer), and checks them against each other. Then determines who wins and who loses. 
  
The two functions getPlayerChoice() and getComputerChoice() are self explanatory.  
getPlayerChoice() prompts the user for their choice.  
getComputerChoice() generates a random number, which corresponds to a random move (rock, paper, or scissors).  


FUTURE DEVELOPMENT: Create a GUI for player to input their choices.  
Possibly via images or by buttons. 