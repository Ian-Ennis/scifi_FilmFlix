// API key is apikey=582a980c&
// oMDb url with title and year parameters"http://www.omdbapi.com/?apikey=582a980c&t=dune&y=2021";

// form variables
const form = document
  .getElementById("form")
  .addEventListener("submit", handleSubmit);

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
    const synopsis = document.getElementById('synopsis').innerText = data.Plot;
    const year = document.getElementById('year').innerText = data.Year;
    const cast = document.getElementById('cast').innerText = data.Actors;
    const director = document.getElementById('director').innerText = data.Director;
}

