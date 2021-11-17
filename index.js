// `${tMDBPoster}${imagePath}`

const form = document.getElementById("form").addEventListener("submit", handleSubmit);


function handleSubmit(e) {
  e.preventDefault();

  const movieInput = e.target.movieName.value;
  const yearInput = e.target.movieYear.value;

  const tMDB = `http://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=c0d223e63c9747fda47653e647837001`;

  fetch(tMDB)
    .then((res) => res.json())
    .then((tMDBdata) => renderPlotRelease(tMDBdata));


  const oMDbAPI = `http://www.omdbapi.com/?apikey=582a980c&t=${movieInput}&y=${yearInput}`

  fetch(oMDbAPI)
    .then(resp => resp.json())
    .then(oMDBdata => renderDirectorCast(oMDBdata))
}


function renderPlotRelease(tMDBdata) {
  console.log(tMDBdata)
  // const tMDBPoster = `https://image.tmdb.org/t/p/w185`;
  // const imagePath = tMDBdata.results[0].poster_path;
  // const poster = document.getElementById('moviePoster').src = `${tMDBPoster}${imagePath}`;

  const synopsis = document.getElementById('plot').innerText = tMDBdata.results[0].overview;
  const year = document.getElementById('releaseDate').innerText = `Release Date: ${tMDBdata.results[0].release_date}`;
}

function renderDirectorCast(oMDBdata) {
  console.log(oMDBdata);

  const cast = document.getElementById('cast').innerText = `Cast: ${oMDBdata.Actors}`
  const director = document.getElementById('director').innerText = `Director(s): ${oMDBdata.Director}`
}

