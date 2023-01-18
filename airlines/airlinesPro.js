const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const airlineInterface = () => {
  const userName = prompt(
    "Bienvenid@ a ISDI Coders Airlines!\nPor favor, introduce tu nombre."
  );
  if (userName === "" || userName === " ") {
    alert("Por favor, introduce tu nombre para continuar.");
    airlineInterface();
  } else if (userName === null) {
    alert("Hasta pronto!");
  } else {
    availableFlights();
    const typeOfUser = confirm(
      `Encantados de conocerte, ${
        userName.charAt(0).toUpperCase() + userName.slice(1)
      }!\nPara ADMIN pulsa OK, para USER pulsa CANCEL.`
    );

    typeOfUser ? admin() : user();
  }
};

const availableFlights = () => {
  console.log("\n ***** Los vuelos disponibles son: ");
  let totalFlightsWithStopover = 0;

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
      console.log(
        `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala`
      );
      totalFlightsWithStopover += 1;
    } else {
      console.log(
        `El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala`
      );
    }
  }
  averageCost();
  flightsWithScale(totalFlightsWithStopover);
};

const averageCost = () => {
  let totalPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].cost;
  }
  const averagePrice = totalPrice / flights.length;
  console.log(
    `\n***** El precio medio de los vuelos es de ${averagePrice}€.\n`
  );
};

const flightsWithScale = (totalFlightsWithStopover) => {
  console.log(
    `\n***** Del total de ${flights.length} vuelos, hay ${totalFlightsWithStopover} vuelos que hacen escala.\n`
  );
  lastFlights();
};

const lastFlights = () => {
  console.log(`\n***** Los destinos de los ultimos vuelos de hoy son: `);

  for (let i = flights.length - 5; i < flights.length; i++) {
    console.log(` => ${flights[i].to}`);
  }
};

const admin = () => {
  const adminAnswer = prompt(
    "En calidad de ADMIN puedes añadir o eliminar vuelos.\nIntroduce 1 para añadir un vuelo.\nIntroduce 2 para eliminar un vuelo. "
  );
  if (adminAnswer === "1") {
    addFlights();
    return;
  } else if (adminAnswer === "2") {
    deleteFlights();
    return;
  } else if (adminAnswer === null) {
    resetOperations("admin");
    return;
  } else {
    alert(
      "El valor introducido no es ni 1 ni 2.\nIntroduce 1 para añadir , 2 para eliminar."
    );
    admin();
  }
};
const addFlights = () => {
  const addNewFlight = {
    id: 0,
    to: "",
    from: "",
    cost: "",
    scale: false,
  };

  let lastFlightIndex = flights.length - 1;

  if (flights.length === 15) {
    alert(
      "No se pueden introducir más vuelos.\nPara agregar más vuelos elimine uno creado anteriormente."
    );
    admin();
    return;
  }
  do {
    addNewFlight.to = prompt(
      "* Obligatorio rellenar todos los campos!\nEscribe ORIGEN del vuelo"
    );
  } while (addNewFlight.to === "" || addNewFlight.to === null);
  do {
    addNewFlight.from = prompt("Escribe el DESTINO del vuelo");
  } while (addNewFlight.from === "" || addNewFlight.from === null);
  do {
    addNewFlight.cost = Number(prompt("Escribe PRECIO del vuelo"));
  } while (addNewFlight.cost === 0 || isNaN(addNewFlight.cost));

  addNewFlight.scale = confirm(
    "Pulse OK para vuelo con ESCALA\nPulse CANCEL para vuelo SIN ESCALA"
  );
  addNewFlight.id = flights[lastFlightIndex].id + 1;
  flights.push(addNewFlight);
  console.log(flights);

  resetOperations("admin");
};

const deleteFlights = () => {
  console.log("Listado vuelos\n");

  for (let i = 0; i < flights.length; i++) {
    console.log(
      `Vuelo con id ${flights[i].id}, de ${flights[i].from}, y destino ${flights[i].to} coste ${flights[i].cost}€ `
    );
  }
  const idToDelete = prompt(
    "En consola se muestra lista de vuelos.\n Escribe id para eliminar"
  );

  if (idToDelete === "" || idToDelete === " " || isNaN(Number(idToDelete))) {
    alert("valor incorrecto");
    deleteFlights();
  }

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].id === Number(idToDelete)) {
      console.log(`vuelo con id ${flights[i].id} ha sido eliminado.`);
      flights.splice([i], 1);
    }
  }
  console.log(flights);
  resetOperations("admin");
};

const user = () => {
  let userPrice = 0;

  userPrice = Number(prompt("Introduce precio del vuelo deseado"));
  if (isNaN(userPrice)) {
    alert("El valor debe ser numerico.");
    user();
  } else {
    searchFlightByPrice(userPrice);
  }
};

const searchFlightByPrice = (userPrice) => {
  const filterPrice = flights.filter((flight) => flight.cost <= userPrice);
  if (filterPrice.length === 0) {
    alert("Coje la canoa nen!");
  } else {
    console.log(
      `Los vuelos con un precio igual o inferior a ${userPrice} son:\n`
    );
    for (let i = 0; i < filterPrice.length; i++) {
      console.log(
        `El vuelo con origen: ${filterPrice[i].from}, y destino ${filterPrice[i].to} tiene un coste de ${filterPrice[i].cost}€.`
      );
    }
  }
  resetOperations("user");
};

const resetOperations = (typeOfUser) => {
  const resetValue = confirm("Quiere realizar otra operación?");
  if (resetValue && typeOfUser === "admin") {
    admin();
    return;
  } else if (resetValue && typeOfUser === "user") {
    user();
    return;
  } else {
    alert('"¡Gracias por usar los servicios de ISDI Airlines!"');
    return;
  }
};

airlineInterface();
