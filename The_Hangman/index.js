function startthegame() {
    document.getElementById('secondpage').style.display = "block";
    document.getElementById('mainpage').style.display = "none";
  }


  var pname = document.getElementById("playername");

  window.onload = function () {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;
    var chosenCategory;
    var getHint;
    var word;
    var guess;
    var geusses = [];
    var lives;
    var counter;
    var space;


    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");


    // created by Lord Priyanshu 

    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');

      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }


    //  Theme here
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Theme: Dishes";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Theme: Films";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "Theme: Cities";
      }
      else if (chosenCategory === categories[3]) {
        catagoryName.innerHTML = "Random [*Click hint for question]";
      }
    }


    result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');

      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "-";
        }

        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }

    comments = function () {


      if ((pname.value === 'Nikita') || (pname.value === 'nikita') || (pname.value === 'NIKITA') || (pname.value === 'nikita ')) {
        pname.value = 'Chinu';
      }
      else if ((pname.value === 'Niki') || (pname.value === 'niki') || (pname.value === 'nikki') || (pname.value === 'Nikki') || (pname.value === 'Niki ')) {
        pname.value = 'Chinu';
      }

      lose = [' you Pathetic piece of crap!', ' You bloody looser!', ', you are such a waste of life', ', Muderer!', ', look how you killed my boy!']

      win = [', my boy! Congratulations!', ', you did it. OMG!', ', right? Well it was easy.', ', good job there!']

      loser = lose[Math.floor(Math.random() * lose.length)];
      console.log(loser);

      winner = win[Math.floor(Math.random() * win.length)];
      console.log(winner);


      showLives.style.backgroundColor = "#ff6a3d";
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = pname.value + loser;
        showLives.style.backgroundColor = "rgb(255,0,0)";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = pname.value + winner;
          showLives.style.backgroundColor = '#1db131';
          // created by Lord Priyanshu 
        }
      }
    }


    var animate = function () {
      var drawMe = lives;
      drawArray[drawMe]();
    }


    canvas = function () {

      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#1a2238";
      context.lineWidth = 2;
    };

    head = function () {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI * 2, true);
      context.stroke();
    }

    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke();
    }

    frame1 = function () {
      draw(0, 150, 150, 150);
    };

    frame2 = function () {
      draw(10, 0, 10, 600);
    };

    frame3 = function () {
      draw(0, 5, 70, 5);
    };

    frame4 = function () {
      draw(60, 5, 60, 15);
    };

    torso = function () {
      draw(60, 36, 60, 70);
    };

    rightArm = function () {
      draw(60, 46, 100, 70);
    };

    leftArm = function () {
      draw(60, 46, 20, 70);
    };

    rightLeg = function () {
      draw(60, 70, 100, 100);
    };

    leftLeg = function () {
      draw(60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


    /* // OnClick Function */
    check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          }
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }



    play = function () {
      categories = [
        ["curry", "paneer", "butter-chicken", "chicken-tikka", "chow-mein", "pizza", "idli","dhokla"],

        ["evildead", "mother-india", "gladiator", "finding-nemo", "hera-pheri", "aliceinwonderland","forrest-gump", "toystory", "the-matrix"],

        ["indraprastha", "detroit", "seoul", "chelsea", "tokyo", "dehradun", "muzaffarnagar","dubai","london", "islamabad"],

        ["tomorrow","towel","promise","incorrectly","fire","cold"]
      ];

      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);

      buttons();
      geusses = [];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();


    }

    play();

    hint.onclick = function () {

      hints = [
        ["What makes you a North Indian", "Palak---, shahi---, kadai---", "no more kook do koo", "tikka, lol", "earthworms?", "Definately not with Pineapple", "Without Sambar?", "gujjus' mithai"],

        ["popular series of horror films", "1957 Historical drama. Nargis Dutt aka Radha", "Maximus Decimus Meridius", "Anamated Fish", "Utha le re baba","Teaparty, Cards, Cat", "Chocolate, Vietnam, Leg Braces", "A Cowboy, An Astronaut", "White Rabbit, Zion, Sentinel"],

        ["An ancient city of Kuru Kingdom", "Home of marshall Mathers", "KPOP", "Ends with sea", "Konichiwa", "Indian Militry Academy", "Laxminagar","land of materialism, rich tourists, khalifa","big-ben","terrorists and isi"],

        ['What is always coming but never arrives?',"What gets wetter the more it dries? ","What can be broken but never held?", "What word is spelled incorrectly in every single dictionary?", "What is it that lives if it is fed, and dies if you give it a drink?", "What can one catch that is not thrown?"]
      ];

      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Hint: " + hints[catagoryIndex][hintIndex];
    };



    document.getElementById('reset').onclick = function () {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }


