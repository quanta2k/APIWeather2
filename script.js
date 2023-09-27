/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

 


/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
const cityNameDiv=document.getElementById('city-name')
const weathertypeDiv=document.getElementById('weather-type')
const tempDiv=document.getElementById('temp')
const minTempDiv=document.getElementById('min-temp')
const maxTempDiv=document.getElementById('max-temp')

// API_KEY for maps api

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd5a1e77973msh6f968f8a00eb7d0p16f72ajsn1cdbc8f1f783',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
  return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options)
	.then(response=>response.json())
  .then(data=>data)
  .catch(err=>console.error(err))
  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity =async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data=await getWeatherData(city)
  showWeatherData(data,city)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData,city) => {
  //CODE GOES HERE
  console.log(weatherData)
  document.getElementById('temp').innerText=weatherData.temp
  document.getElementById('min-temp').innerText=weatherData.min_temp
  document.getElementById('max-temp').innerText=weatherData.max_temp
  document.getElementById('city-name').innerText=city
  document.getElementById('weather-type').innerText=`HUMIDITY: ${weatherData.temp}`
}

