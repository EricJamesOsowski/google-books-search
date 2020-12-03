import axios from 'axios';

// Export an object with a "search" method that searches for random users for the passed query
const API = {
  searchForBooks: function (searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm +"&key=AIzaSyCrKGD6SXQgG4Xr18pfydRFyF579K0wK08&maxResults=40")
  },

  getSavedBooks: function () {fetch("http://localhost:6969/").then(res => res.json)},

  saveBook: function (book) {fetch("http://localhost:6969/save", {
    method: "POST",
    body: book
  })}
};

export default API;