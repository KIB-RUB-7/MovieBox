// API/TMDBApi.js

const API_TOKEN = '2f00d8e62562562c0883370e57011289';

export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page  // This is an example of TMDB url
  //const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + 2f00d8e62562562c0883370e57011289 +'&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
