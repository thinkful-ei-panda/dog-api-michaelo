'use strict';



function getDogImage(searchTerm) {
    searchTerm = $('input').val();
  fetch(`https://dog.ceo/api/breed/${searchTerm}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Please select a correct breed'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img"
    alt="results">`);
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});