// const oMDbAPI = `http://www.omdbapi.com/?apikey=582a980c&t=${movieInput}&y=${yearInput}`
// const posterOne = document.getElementById('moviePoster_1')

// fetch(oMDbAPI)
// .then(res => res.json())
// .then(data => console.log(data))


for (let i = 0; i < firstFour.length; i++) {
    firstFour[i].addEventListener('click', (e) => {
        e.preventDefault();
    console.log('click')
    })
}




