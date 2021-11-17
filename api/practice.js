// TMDB

// api key c0d223e63c9747fda47653e647837001
// functioning template: http://api.themoviedb.org/3/search/movie?query='+query+'&api_key=YOURAPIKEY
const firstWord = 
const space = ` `;
const tMdB = `http://api.themoviedb.org/3/search/movie?query=red${space}planet&api_key=c0d223e63c9747fda47653e647837001`

const tMdBposter = `https://image.tmdb.org/t/p/w185`

fetch(tMdB)
  .then(res => res.json())
  .then(data => receiveJSON(data))

  
function receiveJSON(data) {
  console.log(data)
  const imagePath = data.results[0].poster_path;
  const img = document.querySelector("img");
  img.src = `${tMdBposter}${imagePath}`

}
















// 
// url = "https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US".format(movie_id)
// data = requests.get(url)
// data = data.json()
// poster_path = data['poster_path']
// full_path = "https://image.tmdb.org/t/p/w500/" + poster_path


// ********************************************************************************** //

/* OMDB

API key is apikey=582a980c&

const oMDbAPI = `http://www.omdbapi.com/?apikey=582a980c&t=${movieInput}&y=${yearInput}`
console.log(oMDbAPI)

fetch(tMdB)
  .then(res => res.json())
  .then(data => console.log(data))

  */
