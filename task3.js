
    function random() { 
      let random = Math.floor((Math.random() * 2));
      let userInput = document.getElementById("input").value;
        if (random == userInput) {
          document.write("<br>Excellent.. You guessed Correct ");
        }
        else {
          document.write("<br> Wron Guess.., The Answer is: "+random);
        }
    }