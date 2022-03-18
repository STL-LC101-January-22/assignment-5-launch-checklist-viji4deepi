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

    let pilot = document.querySelector("input[name=pilotName]");
    let coPilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo = document.querySelector("input[name=cargoMass]");
    form.addEventListener("submit", function(event) {


        formSubmission(window.document, list, pilot.value, coPilot.value, fuel.value, cargo.value);
        event.preventDefault();
    })

});