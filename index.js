// `${tMDBPoster}${imagePath}`

const form = document.getElementById("form").addEventListener("submit", handleSubmit);


// const oMDbAPI = ('http://www.omdbapi.com/?t=The+Princess+Bride=&apikey=d6908eb0')
// // http://www.omdbapi.com/?apikey=582a980c&t=dune&y=2021


// fetch (oMDbAPI)
//     .then(res => res.json())
//     .then(data => console.log(data))
// fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Science%20Fiction&r=json&type=genre&page=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
// 		"x-rapidapi-key": "071d3d5939mshb7f3383afdf7eafp1074d3jsn2f725e528793"
// 	}
// })
// .then((res) => res.json())
// .then(data => console.log(data))
// .catch(err => {
// 	console.error(err);
// });
function handleSubmit(e) {
  e.preventDefault();

  const movieInput = e.target.movieName.value;
  const yearInput = e.target.movieYear.value;

  const tMDB = `http://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=c0d223e63c9747fda47653e647837001`;

  fetch(tMDB)
    .then((res) => res.json())
    .then((tMDBdata) => renderPicPlotRelease(tMDBdata));


  const oMDbAPI = `http://www.omdbapi.com/?apikey=582a980c&t=${movieInput}&y=${yearInput}`

  fetch(oMDbAPI)
    .then(resp => resp.json())
    .then(oMDBdata => renderDirectorCast(oMDBdata))
}

// fetch utilization to generate card
// function renderCard(data) {
//     console.log(data)
//     const poster = document.getElementById('moviePoster').src = data.Poster;
//     const synopsis = document.getElementById('synopsis').innerText = `Plot: ${data.Plot}`;
//     const year = document.getElementById('year').innerText = `Year: ${data.Year}`;
//     const cast = document.getElementById('cast').innerText = `Actors: ${data.Actors}`;
//     const director = document.getElementById('director').innerText = `Director: ${data.Director}`;

function renderPicPlotRelease(tMDBdata) {
  console.log(tMDBdata)
  const tMDBPoster = `https://image.tmdb.org/t/p/w185`;
  const imagePath = tMDBdata.results[0].poster_path;
  const poster = document.getElementById('moviePoster').src = `${tMDBPoster}${imagePath}`;

  const synopsis = document.getElementById('plot').innerText = tMDBdata.results[0].overview;
  const year = document.getElementById('releaseDate').innerText = `Release Date: ${tMDBdata.results[0].release_date}`;
}

function renderDirectorCast(oMDBdata) {
  console.log(oMDBdata);

  const cast = document.getElementById('cast').innerText = `Cast: ${oMDBdata.Actors}`
  const director = document.getElementById('director').innerText = `Director(s): ${oMDBdata.Director}`

  if (cast === `Cast: undefined`) {
    const cast = document.getElementById('cast').innerText = ``;
  }

  // ***There isn’t enough life on this ice cube to fill a space cruiser. Please refine your search!***

  if (director === `Director(s): undefined`) {
   const director = document.getElementById('director').innerText = `*** "Err... I'm sorry, Dave. I'm afraid I can't do that." (Please refine your search for more movie info) *** \n
   -Hal`;
  } 
}



// ** Code example to be reffered to while coding to hide movie stats until form submission:

// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//     // hide & seek with the form
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// });
