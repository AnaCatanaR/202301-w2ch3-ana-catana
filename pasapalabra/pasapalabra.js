const questions = [
  [
  { letter: "a", answer: "array", status: false, question: "CON LA A. Una colección o agrupación de elementos en una misma variable, también conocida como vector",},
  { letter: "b", answer: "boolean", status: false, question: "CON LA B. Un dato lógico que solo puede tener los valores true o false",},
  { letter: "c", answer: "concatenar", status: false, question: "CON LA C. Elegante palabra de la programación que significa: 'unir'",},
  { letter: "d", answer: "default", status: false, question: "CON LA D. Palabra clave (caso) utilizado en la sentencia switch.",},
  { letter: "e", answer: "error", status: false, question: "CON LA E. Sinonimo de equivocación o inexactitud.",},
  { letter: "f", answer: "function", status: false, question: "CON LA F. Se ejecuta cuando 'algo' la invoca (lo llama)",},
  { letter: "g", answer: "global", status: false, question: "CON LA G. Se dice que una variable está en el este tipo de scope cuando está declarada fuera de una función o de un bloque.",},
  { letter: "h", answer: "hoisting", status: false, question: "CON LA H. Manera general de referirse a cómo funcionan los contextos de ejecución en JS."},
  { letter: "i", answer: "iteracion", status: false, question: "CON LA I. Cada repetición de un bucle ",},
  { letter: "j", answer: "JavaScript", status: false, question: "CON LA J. Lenguaje de programación inventado por Brendan Eich en 1995",},
  { letter: "k", answer: "kamikaze",status: false, question: "CON LA K. Persona que se juega la vida realizando los viernes el merge ",},
  { letter: "l", answer: "let",status: false, question: "CON LA L. Variable local de ambito de bloque que deja cambiar su valor durante el programa",},
  { letter: "m", answer: "map",status: false, question: "CON LA M. Método de arrays, para iterar a través de los elementos dentro de una colección de arreglos",},
  { letter: "n", answer: "null",status: false, question: "CON LA N. Tipo de dato que devuelve el 'Cancel' del prompt()",},
  { letter: "o", answer: "objecto",status: false, question: "CON LA O. Entidad independiente con propiedades y tipos",},
  { letter: "p", answer: "prompt",status: false, question: "CON LA P. Método que permite al usuario introducir datos con los que el código puede interactuar",},
  { letter: "q", answer: "qwerty",status: false, question: "CON LA Q. Distribución de teclado más común",},
  { letter: "r", answer: "return", status: false, question: "CON LA R. Una instrucción que termina la ejecución de una función." },
  { letter: "s", answer: "string",status: false, question: "CON LA S. Dato que devuelve prompt aunque le introduzcas un número",},
  { letter: "t", answer: "typeof",status: false, question: "CON LA T. Operador con el cual podemos conocer qué tipo de dato es el de una variable",},
  { letter: "u", answer: "undefined",status: false, question: "CON LA U. If you want to create a property now and assign it a value later,  you can create it with a value of undefined",},
  { letter: "v", answer: "valores",status: false, question: "CON LA V. Los objetos tienen proriedades y ... .",},
  { letter: "w", answer: "while",status: false, question: "CON LA W. Bucle utilizado para repetir un bloque de código específico hasta que se cumpla una condición",},
  { letter: "x", answer: "botox",status: false, question: "CONTIENE LA X. ",},
  { letter: "y", answer: "symbol", status: false, question: "Contiene Y. Tipo de dato primitivo.",},
  { letter: "z", answer: "zero",status: false, question: "CON LA Z. Primer índice del array."},
  ],
  [
  { letter: "a", answer: "ahorrar", status: false, question: "CON LA A. Guardar dinero como previsión para necesidades futuras",},
  { letter: "b", answer: "beca", status: false, question: "CON LA B. Subvención para realizar estudios o investigaciones",},
  { letter: "c", answer: "culpar", status: false, question: "CON LA C. Atribuir o echar la culpa a alguien",},
  { letter: "d", answer: "deportar", status: false, question: "CON LA D. Desterrar a alguien de algún lugar, por lo regular extranjero, y confinarlo allí",},
  { letter: "e", answer: "error", status: false, question:  "CON LA E. Equivocación",},
  { letter: "f", answer: "frenar", status: false, question:  "CON LA F. Moderar o parar el movimiento de algo",},
  { letter: "g", answer: "global", status: false, question: "!!!!!CON LA G. Todos los scripts y funciones de una página web pueden acceder a ella. Se puede acceder a las variables globales desde cualquier lugar en un programa de JavaScrip",},
  { letter: "h", answer: "hoisting", status: false, question:  "CON LA H. ",},
  { letter: "i", answer: "iteracion", status: false, question:  "CON LA I. Cada repetición de un bucle ",},
  { letter: "j", answer: "JavaScript", status: false, question: "CON LA J. Lenguaje de programación inventado por Brendan Eich en 1995",},
  { letter: "k", answer: "kamikaze",status: false, question: "CON LA K. Persona que se juega la vida realizando los viernes el merge ",},
  { letter: "l", answer: "let",status: false, question:  "CON LA L. Variable local de ambito de bloque que deja cambiar su valor durante el programa",},
  { letter: "m", answer: "map",status: false, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",},
  { letter: "n", answer: "null",status: false, question:  "CON LA N. Demostración de poca inteligencia",},
  { letter: "o", answer: "object",status: false, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",},
  { letter: "p", answer: "prompt",status: false, question: "CON LA P. Método que permite al usuario introducir datos con los que el código puede interactuar",},
  { letter: "q", answer: "queso",status: false, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",},
  { letter: "r", answer: "raton", status: false, question:  "CON LA R. Roedor" },
  { letter: "s", answer: "string",status: false, question:  "CON LA S. Dato que devuelve prompt aunque le introduzcas un número",},
  { letter: "t", answer: "typeof",status: false, question: "CON LA T. Operador con el cual podemos conocer qué tipo de dato es el de una variable",},
  { letter: "u", answer: "undefined",status: false, question: "CON LA U. If you want to create a property now and assign it a value later,  you can create it with a value of undefined",},
  { letter: "v", answer: "valor",status: false, question:  "valor de los objetos",},
  { letter: "w", answer: "while",status: false, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",},
  { letter: "x", answer: "proxy",status: false, question:  "CONTIENE LA X. Objeto que se crea con los parámetros targer y handler",},
  { letter: "y", answer: "peyote",status: false, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",},
  { letter: "z", answer: "zen",status: false, question: "CON LA Z. ",},
  ],
  [
  { letter: "a", answer: "agenda", status: false, question: "Con la A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer."},
  { letter: "b", answer: "bonanza", status: false, question: "Con la B. Prosperidad."},
  { letter: "c", answer: "caracol", status: false, question: "Con la C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse."},
  { letter: "d", answer: "dormir", status: false, question: "Con la D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios."},
  { letter: "e", answer: "entrecot", status: false, question: "Con la E. Trozo de carne sacado de entre costilla y costilla de la res."},
  { letter: "f", answer: "farhadi", status: false, question: "Con la F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2false17."},
  { letter: "g", answer: "gorgorito", status: false, question: "Con la G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar."},
  { letter: "h", answer: "hidroavion", status: false, question: "Con la H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua."},
  { letter: "i", answer: "inapetencia", status: false, question: "Con la I. Falta de gana de comer."},
  { letter: "j", answer: "jardineria", status: false, question: "Con la J. Arte y oficio del jardinero."},
  { letter: "k", answer: "kilogramo", status: false, question: "Con la K. Unidad de masa del Sistema Internacional."},
  { letter: "l", answer: "lobera", status: false, question: "Con la L. Guarida de lobos."},
  { letter: "m", answer: "mentira", status: false, question: "Con la M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída."},
  { letter: "n", answer: "nativo", status: false, question: "Con la N. Se aplica al que ha nacido en el lugar de que se trata."},
  { letter: "o", answer: "organo", status: false, question: "Con la O. De las partes del pulpo, animal o vegetal que ejercen una función."},
  { letter: "p", answer: "plotino", status: false, question: "Con la P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría."},
  { letter: "q", answer: "queja", status: false, question: "Con la Q. Resentimiento o disgusto que se tiene por la actuación o el comportamiento de alguien."},
  { letter: "r", answer: "rafaga", status: false, question: "Con la R. Viento fuerte, resentido y de corta duración."},
  { letter: "s", answer: "simple", status: false, question: "Con la S. Se aplica a lo que no tiene complicación."},
  { letter: "t", answer: "trece", status: false, question: "Con la T. Número cardinal equivalente a 1false + 3."},
  { letter: "u", answer: "uderzo", status: false, question: "Con la U. Apellido del dibujante y guionista francés autor de la serie Asterix."},
  { letter: "v", answer: "verde", status: false, question: "Con la V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda."},
  { letter: "w", answer: "waterpolo", status: false, question: "Con la W. Deporte parecido al futbol, practicado en una piscina."},
  { letter: "x", answer: "xilofono", status: false, question: "Con la X. Instrumento musical de percusión formado por diversas láminas específicamente afinadas."},
  { letter: "y", answer: "yunque", status: false, question: "Con la Y. Bloque de hierro sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo."},
  { letter: "z", answer: "zoodiacal", status: false, question: "Con la Z. Perteneciente o relativo al zoodíaco."},
  ]
];

let questionsBlock = 0;
let letterBlock = 0;
let pointsCounter = 0;
let player = '';
let finalTime;

const rankingList = [
  {playerName: "Ioan", points: 14},
  {playerName: "Razvan", points: 1},
  {playerName: "Bianca", points: 0},
  {playerName: "Mircea", points: 3},
];
      
const userData = () => {
  player = prompt("Por favor introduce nombre");
  if (player === "" || player === " " ) {
    alert("Por favor, introduce tu nombre para continuar.");
    userData();
  } else if (player === null) {
    player = 'Desconocid@';
    restartGame();
  } else {
    gameInstructions();
  };
};

const gameInstructions = () => {
  console.clear();
  alert(` Welcome a Pasapalabra ${player} !
  <<<< REGLAS >>>>\n
  El juego consiste en acertar las 26 palabras, cada una de las cuales se corresponde con una letra del alfabeto. 
  Tienes 130 segundos para responder a todas. El que acerte el máximo de letras es el ganador.`)
  const userChoice = confirm(` <<<< KEYWORDS >>>>\n
    -> [pasa] -> escribela para saltar a la siguente letra; quedará pendiente de reponder\n
    -> [end]  -> abandonar juego`);
  if (userChoice) {
    bloquePreguntas = 0;
    letraBloque = 0;
    game();
  } else {
    restartGame();
  };
};

const timer = () => {
  finalTime = new Date;
  finalTime.setSeconds(finalTime.getSeconds() + 130);
  return finalTime 
};

const game = () => {
  timer();
  for(let i = questionsBlock; i < questions.length; i++){
    for(let j = letterBlock; j < questions[i].length; j++) {   
      if( questions[i][j].status === false){
        if(Date.now() < finalTime){
          let playerAnswer = prompt(questions[i][j].question);
          if(playerAnswer === null){
            restartGame();
            return
          };
          playerAnswer = playerAnswer.toLowerCase().trim();
          switch(playerAnswer) {
            case 'end':
              console.log(`${player}, has conseguido acertar ${pointsCounter} letras.`);
              restartGame();
              return
            case 'pasa':
              console.log(`pasapalabra de la letra "${questions[i][j].letter.toLocaleUpperCase() }".`);
              break;
            case questions[i][j].answer:
              pointsCounter += 1;
              console.log(`<< Correcto! Tienes ${pointsCounter} puntos >>`);
              questions.map(eachBlock => eachBlock[j].status = true);
              break;
            default:
              console.log('<< :( Nai nai tu-ru-ru! >>') 
              questions.map(eachBlock => eachBlock[j].status = true);
          };
        } else{
          alert('ohhh! TIME OUT :(');
          newPlayer(player,pointsCounter);
          return
        };
      };
    }; 
  };
  newPlayer(player,pointsCounter);
};

const newPlayer = (player, pointsCounter) => {
  const user = {
    playerName : player, 
    points : pointsCounter
  };
  ranking(user);
};

const ranking = (user) => {
  rankingList.push(user);
  rankingList.sort((a, b) => b.points - a.points);
  console.log(
    "\n\n+++++++++++++++++++++++   RANKING   ++++++++++++++++++++++++++");
  rankingList.map(eachPlayer => {
    console.log(`\n 
      ${eachPlayer.playerName} ------------ ${eachPlayer.points} puntos\n
  ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾`);
  });
  restartGame();
  return
};

const restartGame = () => {
  restart = confirm("Quieres volver a jugar?");
  if(restart) {
    console.clear()
    questionsBlock = 0;
    letterBlock = 0;
    for(let w = 0; w < questions.length; w++){
      for(let y = 0; y < questions[w].length; y++) {
          questions[w][y].status = false;
          pointsCounter = 0;
      };
    };
    userData();
    return
  } else {
    console.log(`Gracias ${player}, nos vemos pronto ;) !`);
    return;
  };
};
userData(); 