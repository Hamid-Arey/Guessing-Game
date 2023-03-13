function example1() {
        
    var num, innum1, innum2, innum3, points, answere, image, prize

    var points = 0
    
    num = Math.floor(10 * Math.random() + 1)

    alert("Welcome to the guessing game, you have three guesses to guess the number between 1 and 10. Good Luck")
    innum1 = prompt("Pick your first number.")
    
    if (innum1 > num) {
       innum2 = prompt("That was incorrect, pick a lower number than " + innum1)

       if (innum2 > num) {
         innum3 = prompt("That was incrrect, pick a lower number than " + innum2)

           if (innum3 > num) {
            answere = "Sorry, that was wrong. Better luck next time."
           } else if (innum3 < num) {
            answere = "Sorry, that was wrong. Better luck next time."
           } else if (innum3 == num) {
            answere = "Correct"
            points = 3
           } else {
            answere = "Sorry that number is not in the range of the game, you have lost."
           }
         
       } else if (innum2 < num) {
          innum3 = prompt("That was incorrect, pick a higher number than " + innum2)

            if (innum3 > num) {
              answere = "Sorry, that was wrong. Better luck next time."
            } else if (innum3 < num) {
              answere = "Sorry, that was wrong. Better luck next time."
            } else if (innum3 == num) {
              answere = "Correct"
              points = 3
            } else {
              answere = "Sorry that number is not in the range of the game, you have lost."
            }
       } else if (innum2 == num) {
          answere = "Correct"
          points = 2
       } else {
          answere = "Sorry that number is not in the range of the game, you have lost."
       }
    } else if (innum1 < num) {
         innum2 = prompt("That was incorrect, pick a higher number than " + innum1)

        if (innum2 > num){
           innum3 = prompt("That was incorrect, pick a lower number than " + innum2)

           if (innum3 > num) {
               answere = "Sorry, that was wrong. Better luck next time."
             } else if (innum3 < num) {
               answere = "Sorry, that was wrong. Better luck next time."
             } else if (innum3 == num) {
               answere = "Correct"
               points = 3
             } else {
               answere = "Sorry that number is not in the range of the game, you have lost."
             }
          
        } else if (innum2 < num) {
           innum3 = prompt("That was incorrect, pick a higher number than " + innum2)

           if (innum3 > num) {
              answere = "Sorry, that was wrong. Better luck next time."
            } else if (innum3 < num) {
              answere = "Sorry, that was wrong. Better luck next time."
            } else if (innum3 == num) {
              answere = "Correct"
              points = 3
            } else {
              answere = "Sorry that number is not in the range of the game, you have lost."
            }
        } else if (innum2 == num) {
           answere = "Correct"
           points = 2
        } else {
           answere = "Sorry that number is not in the range of the game."
        }
    } else if (innum1 == num) {
      answere = "Correct"
      points = 3
    } else {
      answere = "Sorry that number is not in the range of the game."}
      

     if (answere === "Correct") {
       image = "<img src=\"Hooray.png\" id=\"image\">"
     } else if (answere === "Sorry, that was wrong. Better luck next time.") {
       image = "<img src=\"ohno.png\" id=\"image\">"
     } else {
       image = "<img src=\"hello.png\" id=\"image\">"}
      

     if (points == 1) {
       points = "100";
       prize = "<img src='1st.png'>"
     } else if (points == 2) {
       points = "50";
       prize = "<img src='2nd.png'>"
     } else if (points == 3) {
       points = "25";
       prize = "<img src='3rd.png'>"
     } else {
       points = "0";
       prize = "Actually nevermind you dont deserve a prize.";}
      

    document.write("<center><h1>" + answere + "</h1><br><center>")
    document.write("<center><h1>You Scored " + points + " Points</h1><br><center>")
    document.write("<center><h1>And the answer was " + num + "</h1><br></center>")
    document.write("<center><p id=\"image\">" + image + "</p></center>")
    document.write("Here is your prize: <br>" + prize)
    }