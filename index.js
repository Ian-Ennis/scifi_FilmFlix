// API key is apikey=582a980c&
// oMDb url with title and year parameters"http://www.omdbapi.com/?apikey=582a980c&t=dune&y=2021";

// form variables
const form = document
  .getElementById("form")
  .addEventListener("submit", handleSubmit);

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
// submit event for user input, including fetch
function handleSubmit(e) {
  e.preventDefault();
  const movieInput = e.target.movieName.value;
  const yearInput = e.target.movieYear.value;
  const oMDbAPI = `http://www.omdbapi.com/?apikey=582a980c&t=${movieInput}&y=${yearInput}`

  fetch(oMDbAPI)
    .then(res => res.json())
    .then(data => renderCard(data))
}

// fetch utilization to generate card
function renderCard(data) {
    console.log(data)
    const poster = document.getElementById('moviePoster').src = data.Poster;
    const synopsis = document.getElementById('synopsis').innerText = `Plot: ${data.Plot}`;
    const year = document.getElementById('year').innerText = `Year: ${data.Year}`;
    const cast = document.getElementById('cast').innerText = `Actors: ${data.Actors}`;
    const director = document.getElementById('director').innerText = `Director: ${data.Director}`;
}

