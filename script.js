// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        //     console.log(listedPlanets);
    }).then(function() {
        //  console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlantetSelected = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlantetSelected.name, randomPlantetSelected.diameter, randomPlantetSelected.star, randomPlantetSelected.distance, randomPlantetSelected.moons, randomPlantetSelected.image);
    });

    // form submission and  validation
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        const pilot = document.querySelector("input[name=pilotName]");
        const coPilot = document.querySelector("input[name=copilotName]");
        const fuel = document.querySelector("input[name=fuelLevel]");
        const cargo = document.querySelector("input[name=cargoMass]");

        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.textContent = `Pilot ${pilot.value} is ready for launch`;
        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.textContent = `Co-pilot ${coPilot.value} is ready for launch`;

        //  event.preventDefault();

        formSubmission(document, list, pilot.value, coPilot.value, fuel.value, cargo.value);
        event.preventDefault();
    })

});