// How do you specify parameters in a URL?
// Any word after the question mark (?) in a URL is considered to be a parameter which can hold values. The value for the corresponding parameter is given after the symbol “equals” (=). Multiple parameters can be passed through the URL by separating them with multiple “&”.

// How do I add parameters to a URL query?
// Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content or actions based on the data being passed. To append query params to the end of a URL, a ‘? ‘ Is added followed immediately by a query parameter.

// const oMDbAPI = ('http://www.omdbapi.com/?t=The+Princess+Bride=&apikey=d6908eb0')
// // http://www.omdbapi.com/?apikey=582a980c&t=dune&y=2021


// fetch (oMDbAPI)
//     .then(res => res.json())
//     .then(data => console.log(data))
fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Science%20Fiction&r=json&type=genre&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "071d3d5939mshb7f3383afdf7eafp1074d3jsn2f725e528793"
	}
})
.then((res) => res.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});