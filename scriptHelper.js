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
    if (testInput === "" || testInput === null || testInput === 0) {
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


    if ((validateInput(pilot.trim()) === "Empty") || (validateInput(copilot.trim()) === "Empty") || (validateInput(fuelLevel.trim()) === "Empty") || (validateInput(cargoLevel.trim()) === "Empty")) {
        alert("All fields are required!");
        //list.style.visibility = "hidden";
        return false;

    } else if ((validateInput(pilot.trim()) === "Is a Number") || (validateInput(copilot.trim()) === "Is a Number")) {
        alert("Make sure to enter the names for each field!");
        return false;

    } else if ((validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")) {
        alert("Make sure to enter valid information for each field!");
        return false;

    }

    // requirments for update  Shuttle Requirements
    if (fuelLevel < 10000) {
        fuelStatus.innerText = `Fuel Level too low to launch`;
        launchStatus.innerText = "Shuttle Not Ready For Launch";
        launchStatus.setAttribute("style", "color:#FF0000");
        list.style.visibility = "visible";

    } else {
        fuelStatus.innerText = `Fuel level high enough for launch`;
    }
    if (cargoLevel > 10000) {
        cargoStatus.innerText = `Cargo mass is too heavy for the shuttle to take off`;
        launchStatus.innerText = "Shuttle Not Ready For Launch";
        launchStatus.setAttribute("style", "color:#FF0000");
        list.style.visibility = "visible";

    } else {
        cargoStatus.innerText = `Cargo mass low enough for launch`;
    }
    if ((fuelLevel >= 10000) && (cargoLevel <= 10000)) {
        list.style.visibility = "visible";
        launchStatus.innerText = 'Shuttle is ready for launch!';
        launchStatus.style.color = "green";
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