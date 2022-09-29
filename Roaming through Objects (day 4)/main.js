//trying to make a nested object containing arrays and access it 

map = {
    Europe: {name: "Europe", countries: [
        {name: "France",
        capital: "Paris",
        otherCities: ["Lyon", "Marseille"]},
        {name: "UK",
        capital: "London",
        otherCities: ["Manchester", "Birmingham"]},
        {name: "Germany",
        capital: "Berlin",
        otherCities: ["Munich", "Frankfurt"]}
    ]},
    Asia: {name: "Asia", countries: [
        {name: "Japan",
        capital: "Tokyo",
        otherCities: ["Osaka", "Kyoto"]},
        "China",
        "India"
    ]},
    // "Asia",
    // "Africa",
    // "Americas"
}

//go to Manchester
console.log(map.Europe.countries[1].otherCities[0]);

//go to Japan
console.log(map.Asia.countries[0]);

//make Manchester cool 
let ukCities = map.Europe.countries[1].otherCities
for (let i = 0; i < ukCities.length; i++) {
    if (ukCities[i] == "Manchester") {
        ukCities[i] = ukCities[i] + " is cool"
    } else {
        ukCities[i] = ukCities[i] + " is meh"
    }
}


//making it look pretty 
for (let i = 0; i < ukCities.length; i++) {
    if (ukCities.indexOf(ukCities[i]) !== 0) {
        ukCities[i] = " " + ukCities[i]
    }
}

console.log(ukCities + ". Just joking!")