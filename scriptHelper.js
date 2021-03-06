// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    let listedPlanets = document.getElementById('missionTarget');
    listedPlanets.innerHTML = `
            <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${image}">
            `;
}


function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //    console.log(validateInput(pilot));
    let launchStatus = document.getElementById("launchStatus");


    if ((validateInput(pilot) === "Empty") || (validateInput(copilot) === "Empty") || (validateInput(fuelLevel) === "Empty") || (validateInput(cargoLevel) === "Empty")) {
        alert("All fields are required!");
        //list.style.visibility = "hidden";
        return false;

    } else if ((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number")) {
        alert("Make sure to enter the names for each field!");
        return false;

    } else if ((validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")) {
        alert("Make sure to enter valid information for each field!");
        return false;

    }

    // requirments for update  Shuttle Requirements

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");


    let listVar = document.querySelector("#faultyItems");

    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000 && cargoLevel > 10000) {
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        listVar.style.visibility = "visible";
        fuelStatus.textContent = `Fuel level too low for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
        return false;
    } else if (fuelLevel < 10000) {
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        listVar.style.visibility = "visible";
        fuelStatus.textContent = `Fuel level too low for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;
        return false;
    } else if (cargoLevel > 10000) {
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        listVar.style.visibility = "visible";
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
        return false;
    } else {
        launchStatus.textContent = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        listVar.style.visibility = "visible";
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;
        return true;
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) { return response.json() });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIdx = Math.floor(Math.random() * (planets.length));
    return planets[randomIdx];
    console.log(planets[randomIdx]);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;