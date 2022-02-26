
const fetch=require('request-promise')
const cheerio = require('cheerio');

const searchUrl = 'https://www.imdb.com/find?s=tt&ttype=ft&ref_=fn_ft&q=';
const movieUrl = 'https://www.imdb.com/title/';

const searchCache = {};
const movieCache = {};

function searchMovies(searchTerm) {
  if(searchCache[searchTerm]) {
    console.log('Serving from cache:', searchTerm);
    return Promise.resolve(searchCache[searchTerm]);
  }

  return fetch(`${searchUrl}${searchTerm}`)
    .then(response => response)
    .then(body => {
      const movies = [];
      const $ = cheerio.load(body);
    //   console.log($)
      $('.findResult').each(function(i, element) {
        const $element = $(element);
        const $image = $element.find('td a img');
        const $title = $element.find('td.result_text a');
        const imdbID = $title.attr('href').match(/title\/(.*)\//)[1];

        const movie = {
          image: $image.attr('src'),
          title: $title.text(),
          imdbID
        };
        movies.push(movie);
      });

      searchCache[searchTerm] = movies;

      return movies;
    });
}

function getMovie(imdbID) {
  if(movieCache[imdbID]) {
    console.log('Serving from cache:', imdbID);
    console.log(movieCache[imdbID])

    return Promise.resolve(movieCache[imdbID]);
  }

  return fetch(`${movieUrl}${imdbID}`)
    .then(response => response)
    .then(body => {
      const $ = cheerio.load(body);
      const $title = $('h1');
        console.log($title)
      const title = $title.first().contents().filter(function() {
        return this.type === 'text';
      }).text().trim();

    //   const rating = $('meta[itemProp="contentRating"]').attr('content');
        let rating=$('span[class="AggregateRatingButton__RatingScore-sc-1ll29m0-1 iTLWoV"]').html()
        // let runTime=$('ul[class="ipc-inline-list ipc-inline-list--show-dividers TitleBlockMetaData__MetaDataList-sc-12ein40-0 dxizHm baseAlt"]').text()

    //   const runTime = $('time[itemProp="duration"]')
        let runTime=$('ul[class="ipc-inline-list ipc-inline-list--show-dividers TitleBlockMetaData__MetaDataList-sc-12ein40-0 dxizHm baseAlt"]').text()
    //     .first().contents().filter(function() {
    //     return this.type === 'text';
    //   }).text().trim();             
    ///////////////////
    const genres = [];
    $('ul[class="ipc-inline-list ipc-inline-list--show-dividers ipc-inline-list--inline ipc-metadata-list-item__list-content base"]').each(function(i, element) {
        const genre = $(element).text();
        genres.push(genre);
      });
    var genress=(genres[3])
    /////////////////////
    //   const genres = [];
    //   $('span[itemProp="genre"]').each(function(i, element) {
    //     const genre = $(element).text();
    //     genres.push(genre);
    //   });

      const datePublished = $('meta[itemProp="datePublished"]').attr('content');
      const imdbRating = $('span[itemProp="ratingValue"]').text();
      const poster = $('div.poster a img').attr('src');
      const summary = $('div.summary_text').text().trim();

      function getItems(itemArray) {
        return function(i, element) {
          const item = $(element).text().trim();
          itemArray.push(item);
        };
      }

    //   const directors = [];
      let directors=$('[class="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link"]').html()
    //   $('span[itemProp="director"]').each(getItems(directors));


      const writers = [];
      $('.credit_summary_item span[itemProp="creator"]').each(getItems(writers));





      const stars = [];
      $('.credit_summary_item span[itemProp="actors"]').each(getItems(stars));

      const storyLine = $('#titleStoryLine div[itemProp="description"] p').text().trim();

      const companies = [];
      $('span[itemType="http://schema.org/Organization"]').each(getItems(companies));

      const trailer = $('a[itemProp="trailer"]').attr('href');

      const movie = {
        imdbID,
        title,
        rating,
        runTime,
        genress,
        datePublished,
        imdbRating,
        poster,
        summary,
        directors,
        writers,
        stars,
        storyLine,
        companies,
        trailer: `https://www.imdb.com${trailer}`
      };

      movieCache[imdbID] = movie;

      return movie;
    });
}

module.exports = {
  searchMovies,
  getMovie
};


/////////////////////////////////////////////////////