// API/TMDBApi.js

const API_TOKEN = '2f00d8e62562562c0883370e57011289';

export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page  // This is an example of TMDB url
  //const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + 2f00d8e62562562c0883370e57011289 +'&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
