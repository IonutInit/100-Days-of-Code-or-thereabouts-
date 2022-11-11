// async function randomRiddle() {
//     const response = await fetch('localhost:3000/api/riddles/r');
//     const data =  await response.json();

//     console.log(data)
// }

const XRapidAPIHost = process.env.XRapidAPIKey
let riddleSolution = 'riddle'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'X-RapidAPI-Keyc',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch(`https://wordsapiv1.p.rapidapi.com/words/${riddleSolution}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));