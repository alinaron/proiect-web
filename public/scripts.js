const API_KEY = "9d4e4d893f92db6be6b49b2e3961e6de";

(function getTrendingSeries() {
   var responseData = [];
   axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=9d4e4d893f92db6be6b49b2e3961e6de")
   .then((response) => {
       responseData = response.data;
       if(responseData.length === 0) {
           createMessageInContainer('No data to display');
       } else {
           createListFromTrendingSeries(response.data);
       }
   }).catch((err) => {
       console.log(err);
   })
})();

(function getTrendingMovies() {
   var responseData = [];
   axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=9d4e4d893f92db6be6b49b2e3961e6de")
   .then((response) => {
       responseData = response.data;
       if(responseData.length === 0) {
           createMessageInContainer('No data to display');
       } else {
           createListFromTrendingMovies(response.data);
       }
   }).catch((err) => {
       console.log(err);
   })
})();


function createMessageInContainer(message) {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = message;
    var container = document.getElementById('container');
    container.insertBefore(paragraph, container.childNodes[0]);
} 

function createListFromTrendingSeries(obj) {
    let list = document.createElement('ul');
    obj.results.forEach(element => {
        let listItem = document.createElement('li');
        let image = document.createElement('img');
        image.setAttribute('src', 'https://image.tmdb.org/t/p/w500/'+element.poster_path);
        image.setAttribute('width', '50px');
        image.setAttribute('height', '75px');
        listItem.innerHTML = element.name;
        listItem.insertBefore(image, listItem.childNodes[0]);
        list.insertBefore(listItem, list.childNodes[1]);
        console.log(element);
    });
    let container = document.getElementById('containerSeries');
    container.insertBefore(list, container.childNodes[1]);
}

function createListFromTrendingMovies(obj) {
    let list = document.createElement('ul');
    obj.results.forEach(element => {
        let listItem = document.createElement('li');
        let image = document.createElement('img');
        image.setAttribute('src', 'https://image.tmdb.org/t/p/w500/'+element.poster_path);
        image.setAttribute('width', '50px');
        image.setAttribute('height', '75px');
        listItem.innerHTML = element.original_title;
        listItem.insertBefore(image, listItem.childNodes[0]);
        list.insertBefore(listItem, list.childNodes[1]);
        console.log(element);
    });
    let container = document.getElementById('containerMovies');
    container.insertBefore(list, container.childNodes[1]);
}