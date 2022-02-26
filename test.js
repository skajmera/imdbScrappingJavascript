
///////////////////////////////////////////////////

// / function myDisplayer(some) {
  //     console.log(some);
  //   }
  //   function myFirst() {
  //     myDisplayer("Hello");
  //   }
  //   function mySecond() {
  //     myDisplayer("Goodbye");
  //   }
  //   myFirst();
  //   mySecond();
  ////////////////////////////////////
  
  // const { isTag } = require("domhandler");
  
  
  
  // const promise= new Promise((resolve,result)=>{
  //     var data=true
  //     if(data){
  //         resolve("ok")
  //     }else{
  //         result("not ok")
  //     }
  // })
  
  
  // promise.then((data)=>{
  // console.log(data);
  // }).catch((err)=>{
  //     console.log(err);
  // })
  
  // const a=async ()=>{
  //     try{
  //     const d=await promise
  //     console.log(d)}
  //     catch(err){
  //         console.log(err)
  //     }
  // }
  // a()
  
  /////////////////////////////////////////
  
  // const name ="elon musk"
  //  function sayName(){
  //      console.log(name)
  //  }
  
  //  sayName()
  //////////////////
  
  // let d=3
  // if(true){
  //     d=34
  // }else{
  //     console.log('err')
  // }
  // console.log(d)
  
  ////////////////////////////////  iife function
  
  
  // let name="subhash"
  // const gender=(function(){
  //     return {
  //         changeGenderMale:function() {
  //             name="goutam"
  //             return name
  //         },changeGenderFemale:function(){
  //             name="shivani"
  //             return name
  //         }
  //     }
  // })()
  
  // // console.log(gender.changeGenderMale())
  // // console.log(name)
  ///////////////////////////////////////////////clouser
  // const d=9
  // const name=(params) =>{
  //         const d=3;
  //         function ok(params) {
  //             console.log(d)
              
  //         }
  //         ok()
  // }
  // name()
  
  /////////////////////////
  
  // var array1 = [5,1, 2, 3, 4, 5];
  // var array2 = [3, 4, 5];
  
  // var duplicates = array1.filter(function(val) {
  //   return array2.indexOf(val) != -1;
  // });
  // console.log(duplicates);
  
  
  //////////////////////////
  
  // const http = require('http');
  // const PORT = 3000;
  // const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.end('Hello World');
  // });
  // server.listen(PORT, () => {
  //   console.log(`Server running at PORT:${PORT}/`);
  // });
  
  // const superagent = require("superagent")
  // const forumURL = "https://www.reddit.com/r/programming.json"
  // // callbacks
  // superagent
  // 	.get(forumURL)
  // 	.end((error, response) => {
  // 		console.log(response)
  // 	})
  // promises
  ///////////////////////////////
  
  // superagent
  // 	.get(forumURL)
  // 	.then((response) => {
  // 		console.log(response)
  // 	})
  // 	.catch((error) => {
  // 		console.error(error)
  // 	})
  /////////////////////////////////
  
  // // promises with async/await
  // async function getForum() {
  // 	try {
  // 		const response = await superagent.get(forumURL)
  // 		console.log(response)
  // 	} catch (error) {
  // 		console.error(error)
  // 	}
  // }
  
  
  ////////////
  // const htmlString = '<label>Username: John Doe</label>'
  // const result = htmlString.match(/<label>(.+)<\/label>/)
  
  // console.log(result[1], result[1].split(": ")[1])
  // // Username: John Doe, John Doe
  
  ////////
  // const cheerio = require('cheerio')
  // const $ = cheerio.load('<h2 class="title">Hello world</h2>')
  
  // $('h2.title').text('Hello there!')
  // $('h2').addClass('welcome')
  
  // $.html()
  // console.log($.html())
  // <h2 class="title welcome">Hello there!</h2>
  ////////////////////////
  
  // const axios = require('axios');
  // const cheerio = require('cheerio');
  // const getPostTitles = async () => {
  // 	try {
  // 		const { data } = await axios.get(
  // 			'https://old.reddit.com/r/programming/'
  // 		);
  // 		const $ = cheerio.load(data);
  // 		const postTitles = [];
  // 		$('div > p.title > a').each((_idx, el) => {
  // 			const postTitle = $(el).text()
  // 			postTitles.push(postTitle)
  // 		});
  // 		return postTitles;
  // 	} catch (error) {
  // 		throw error;
  // 	}
  // };
  // getPostTitles()
  // .then((postTitles) => console.log(postTitles));
  // /////////////////////////
  
  // const { JSDOM } = require('jsdom')
  // const { document } = new JSDOM(
  // 	'<h2 class="title">Hello world</h2>'
  // ).window
  // const heading = document.querySelector('.title')
  // heading.textContent = 'Hello there!'
  // heading.classList.add('welcome')
  // heading.innerHTML
  // console.log(heading);
  ////////////////////////////
  // const puppeteer = require('puppeteer')
  
  // async function getVisual() {
  // 	try {
  // 		const URL = 'https://www.reddit.com/r/programming/'
  // 		const browser = await puppeteer.launch()
  // 		const page = await browser.newPage()
  
  // 		await page.goto(URL)
  // 		await page.screenshot({ path: 'screenshot.png' })
  // 		await page.pdf({ path: 'page.pdf' })
  // 		await browser.close()
  // 	} catch (error) {
  // 		console.error(error)
  // 	}
  // }
  
  // getVisual()
  /////////////////////
  
  
  // var request = require("request"),
  //   cheerio = require("cheerio"),
  //   url = "https://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + "02888";
  
  // request(url, function (error, response, body) {
  //   if (!error) {
  //     var $ = cheerio.load(body)
  //       temperature = $("[data-variable='temperature'] .wx-value").html();
  // console.log(temperature);
  // //     console.log("It’s " + temperature + " degrees Fahrenheit.");
  //   } else {
  //     console.log("We’ve encountered an error: " + error);
  //   }	
  // })
  /////////////////////////////////////////
  
  // request(url, function (error, response, body) {
  // 	// console.log(response)
  // 	if (error) {
  // 	  console.log("Couldn’t get page because of error: " + error);
  // 	  return;
  // 	}
  // 	// load the body of the page into Cheerio so we can traverse the DOM
  // 	var $ = cheerio.load(body),
  // 	  links = $(".r a");
  // 	//   console.log(links)
  // 	links.each(function (i, link) {
  // 	  // get the href attribute of each link
  // 	  var url = $(link).attr("href");
  // 	  // strip out unnecessary junk
  // 	  url = url.replace("/url?q=", "").split("&")[0];
  // 	  if (url.charAt(0) === "/") {
  // 		return  3;
  // 	  }
  // 	  // this link counts as a result, so increment results
  // 	  totalResults++;
  // 	  console.log(totalResults);
  // 	})})
  ////////////////////////
  
  
  // Throw away extra white space and non-alphanumeric characters.
  // text = text.replace(/\s+/g, " ")
  //        .replace(/[^a-zA-Z ]/g, "")
  //        .toLowerCase();
  /////////////////////////////////////////
  
  
/////////////////////////////////

// const express = require('express')
// const request = require("request-promise")
// const cheerio = require("cheerio")
// const fs = require('fs')
// var url;
// var title, release, rating
// var json = { title: "", release: "", rating: "" }
// const app = express()
// // app.get('/hello', (req, res) => {
//     url = "https://www.imdb.com/title/tt0107290"
//     request(url, function (error, response, html) {
//         // if (!error) {
//             var $ = cheerio.load(html)
//             // console.log($);
//             $(".TitleHeader__TitleText-sc-1wu6n3d-0 dxSWFG").filter(function(){
//                 var data=$(this) 
//                 console.log($)
//                 // title=data.children().first().text()
//                 // console.log(title)
//             })
//         // }
//     // })

// })
//     app.listen(3000, () => {
// console.log("server is listening on port 3000")
//     })
//////////////////////////

///////////////////////////////////////////
// const puppeteer = require('puppeteer');
// const IMDB_URL = (movie_id) => `https://www.imdb.com/title/${movie_id}/`;
// const MOVIE_ID = `tt6763664`;
// console.log(IMDB_URL());
// (async () => {
// const browser = puppeteer.launch();
//     const page = browser.newPage();
//   await page.goto(IMDB_URL(MOVIE_ID), { waitUntil: 'networkidle0' });
//   let data = await page.evaluate(() => {
//     let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
//     let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
//     let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
//     return {
//       title,
//       rating,
//       ratingCount
//     }
//   });
//   console.log(data);
//   await browser.close();
// })();

///////////////////////////////////////////////
// const fetch=require('isopj');
// require('isomorphic-fetch');
// fetch('https://www.npmjs.com/package/isomorphic-fetch')
//     .then(function(response) {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response.text()
//     })
//     .then(function(stories) {
//         console.log(stories);
//     });
//////////////////////////////



// const express = require('express')
// const request = require("request-promise")
// const cheerio = require("cheerio")
// // const fs = require('fs');
// // const { html } = require("cheerio/lib/api/manipulation");
// // const json2csv = require('json2csv').Parser
// const movie = "https://www.imdb.com/title/tt0242519/?ref_=tt_sims_tt"
//     async function g() {
//         let imdbData = []
//         const response =  await request({
//             uri: movie,
//             headers: {
//                 "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//                 "accept-encoding": "gzip, deflate, br",
//                 "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//             },
//             gzip: true,
//         });
//         let $ = cheerio.load(response)
//         // let title= await $('h1').html()

        // let title= await $('h1')
        // let rating=$('span[class="AggregateRatingButton__RatingScore-sc-1ll29m0-1 iTLWoV"]').html()
        // let runTime=$('[class="ipc-metadata-list__item"]').text()
        // let runTime=$('div[class="ipc-metadata-list-item__content-container"]').text()
        // let runTime=$('ul[class="ipc-inline-list ipc-inline-list--show-dividers TitleBlockMetaData__MetaDataList-sc-12ein40-0 dxizHm baseAlt"]').text()
        // let director=$('[class="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link"]').html()
        // let genres=[];
        // $('ul[class="ipc-inline-list ipc-inline-list--show-dividers ipc-inline-list--inline ipc-metadata-list-item__list-content base"]').html()
      
    //     $('ul[class="ipc-inline-list ipc-inline-list--show-dividers ipc-inline-list--inline ipc-metadata-list-item__list-content base"]').each(function(i, element) {
    //         const genre = $(element).text();
    //         genres.push(genre);
    //       });
    //     var gen=(genres[3])
      
    // }
    
    // g()