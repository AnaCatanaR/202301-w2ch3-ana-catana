const bingo = () => {
  const user = {
    playerName: "",
    points: 0,
  };
  const rankingList = [
    {
      playerName: "Ioan",
      points: 7500,
    },
    {
      playerName: "Razvan",
      points: 3500,
    },
    {
      playerName: "Bianca",
      points: 800,
    },
    {
      playerName: "Mircea",
      points: 100,
    },
  ];

  const userData = () => {
    user.playerName = prompt("Introduce nombre");
    console.log(user);
    if (user.playerName === "" || user.playerName === " ") {
      alert("Por favor, introduce tu nombre para continuar.");
      userData();
    } else if (user.playerName === null) {
      resetOperations();
    } else {
      mainMenu();
    }
  };
  const mainMenu = () => {
    console.clear();
    const mainOptions = prompt(
      `Bienvenid@ ${
        user.playerName.charAt(0).toUpperCase() + user.playerName.slice(1)
      } !\n\n >>> Menu Principal <<<\n  1 Jugar\n  2 Ver instruciones\n  3 Ver puntos anteriores \n\n[Cancel para salir]`
    );
    if (
      mainOptions > 3 ||
      mainOptions === "" ||
      mainOptions === " " ||
      mainOptions === "0" ||
      isNaN(mainOptions)
    ) {
      alert(
        "Introduce: \n[1] para jugar  \n[2] para consultar intruciones  \n[3] para consultar ranking"
      );
      mainMenu();
    }
    switch (mainOptions) {
      case "1":
        play();
        break;
      case "2":
        bingoRules();
        break;
      case "3":
        ranking();
        break;
      case null:
        resetOperations();
        break;
    }
  };
  const play = () => {
    let card = [[], [], []];
    let bombo = [];

    const cardNumbers = () => {
      let totalNumbers = 0;
      do {
        let numberCard = Math.floor(Math.random() * 91);

        if (
          !card[0].includes(numberCard) &&
          !card[1].includes(numberCard) &&
          !card[2].includes(numberCard) &&
          numberCard !== 0
        ) {
          switch (true) {
            case totalNumbers < 5:
              card[0].push(numberCard);
              break;
            case totalNumbers > 4 && totalNumbers < 10:
              card[1].push(numberCard);
              break;
            case totalNumbers >= 10:
              card[2].push(numberCard);
              break;
          }
          totalNumbers++;
        }
      } while (totalNumbers < 15);
      console.log(`
      |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
      |          CARTON          |
      |                          |
       ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
        ${card[0].slice(0, 5).join(" | ")}   
        ${card[1].slice(0, 5).join(" | ")}  
        ${card[2].slice(0, 5).join(" | ")}  
         
       ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`);
      confirmCard();
    };

    const confirmCard = () => {
      const confirmGame = confirm(
        "Te gusta este cartón?\n\nOK para continuar \nCancel para generar un cartón nuevo"
      );
      if (confirmGame) {
        startGame();
      } else {
        console.clear();
        card = [[], [], []];
        cardNumbers();
      }
    };

    const startGame = () => {
      const lineCounter = [0, 0, 0];
      let line = false;
      let bingo = false;

      const lineControl = () => {
        if (lineCounter.includes(5) && line === false) {
          console.log(
            "\n++++++++++++++++++++   LIIIIIIINEA  +++++++++++++++++++++++"
          );
          line = true;
          return;
        } else if (lineCounter.every((elem) => elem === 5)) {
          console.clear();
          console.log(
            "\n+++++++++++++++++++++++   BINGO   ++++++++++++++++++++++++++"
          );
          bingo = true;
          return;
        }
        console.clear();
      };

      for (i = 0; bombo.length < 90; i++) {
        if (bingo) {
          let turnsNumber = bombo.length;
          user.points = (90 - turnsNumber) * 100;
          console.log(
            `\nFelicidades! Tienes ${user.points} puntos, aconseguido en ${turnsNumber} turnos.\n`
          );
          rankingList.push(user);
          ranking();
          return;
        }

        let numberBombo = Math.floor(Math.random() * 91);
        if (!bombo.includes(numberBombo) && numberBombo !== 0) {
          const getNextNumber = confirm(
            `Ha salido el  * ${numberBombo} *\n[ Presione OK para sacar el siguiente número. ]`
          );
          if (!getNextNumber) {
            resetOperations();
            return;
          }
          bombo.push(numberBombo);

          for (let j = 0; j < card.length; j++) {
            for (let k = 0; k < card[j].length; k++) {
              if (card[j][k] === numberBombo) {
                card[j][k] = " X";
                lineCounter[j]++;
                lineControl();
                console.log(
                  `\nEl número * ${numberBombo} * esta en el cartón !`
                );
                console.log(`
                ║‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾║
                ║          CARTON          ║
                ║                          ║
                 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                 ${card[0].slice(0, 5).join(" | ")}   
                 ${card[1].slice(0, 5).join(" | ")}  
                 ${card[2].slice(0, 5).join(" | ")}  
                   
                 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`);
              }
            }
          }
        }
      }
    };
    cardNumbers();
  };

  const bingoRules = () => {
    console.log(` 
        ║‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾║
        ║              >>>>>>>>   Sistema de puntuación   >>>>>>>>                           ║
        ║ Cuantas menos bolas del bombo necessitas para cantar BINGO, más puntos tendrás.    ║
        ║ Cada bola restante en el bombo sumará 100 puntos.                                  ║
        ║ El jugador que consigue BOINGO con menos bolas, tendrá la puntuación más alta.     ║
        ║                                                                                    ║
        ║ Mucha SUERTE!                                                                      ║
         ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`);
    const userDecision = confirm(
      "Preparad@? Click OK para iniciar el BINGO / Cancel para salir."
    );
    console.clear();
    if (userDecision) {
      play();
    } else {
      resetOperations();
    }
  };

  const ranking = () => {
    rankingList.sort((a, b) => b.points - a.points);
    console.log(
      "\n\n+++++++++++++++++++++++   RANKING   ++++++++++++++++++++++++++"
    );

    rankingList.map((player) => {
      console.log(`\n 
        ${player.playerName} ------------ ${player.points} puntos\n
    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`);
    });
    const restartGame = confirm("Quieres volver a jugar?");
    if (restartGame) {
      userData();
    } else {
      resetOperations();
      return;
    }
  };

  const resetOperations = () => {
    const reset = confirm("Seguro quieres salir?");
    if (reset === false) {
      mainMenu();
    } else {
      console.log("Bingo Game closed ");
      return;
    }
  };
  userData();
};

bingo();
