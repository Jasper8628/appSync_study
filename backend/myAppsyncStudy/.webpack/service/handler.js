(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import 'babel-polyfill';
// import { OAuth2 } from 'oauth';

// const Twitter = require('twitter');

// async function getFollowing(handle, consumerKey, consumerSecret) {
//   const url = 'friends/list';

//   const oauth2 = new OAuth2(
//     consumerKey,
//     consumerSecret,
//     'https://api.twitter.com/',
//     null,
//     'oauth2/token',
//     null,
//   );

//   return new Promise((resolve) => {
//     oauth2.getOAuthAccessToken(
//       '',
//       {
//         grant_type: 'client_credentials',
//       },
//       (error, accessToken) => {
//         resolve(accessToken);
//       },
//     );
//   })
//     .then((accessToken) => {
//       const client = new Twitter({
//         consumer_key: consumerKey,
//         consumer_secret: consumerSecret,
//         bearer_token: accessToken,
//       });

//       const params = { screen_name: handle };

//       return client
//         .get(url, params)
//         .then((followers) => {
//           // console.log(followers);
//           const followerArray = [];

//           for (let i = 0; i < followers.users.length; i += 1) {
//             followerArray.push(followers.users[i].screen_name);
//           }

//           // console.log(followerArray);

//           return followerArray;
//         })
//         .catch((error) => {
//           throw error;
//         });
//     })
//     .catch(error => error);
// }

// async function getRawTweets(handle, consumerKey, consumerSecret) {
//   const url = 'statuses/user_timeline';

//   const oauth2 = new OAuth2(
//     consumerKey,
//     consumerSecret,
//     'https://api.twitter.com/',
//     null,
//     'oauth2/token',
//     null,
//   );

//   return new Promise((resolve) => {
//     oauth2.getOAuthAccessToken(
//       '',
//       {
//         grant_type: 'client_credentials',
//       },
//       (error, accessToken) => {
//         resolve(accessToken);
//       },
//     );
//   })
//     .then((accessToken) => {
//       const client = new Twitter({
//         consumer_key: consumerKey,
//         consumer_secret: consumerSecret,
//         bearer_token: accessToken,
//       });

//       const params = { screen_name: handle };

//       return client
//         .get(url, params)
//         .then((tweets) => {
//           const tweetArray = [];
//           let listOfTweets;

//           return getFollowing(handle, consumerKey, consumerSecret).then((data) => {
//             if (tweets.length >= 1) {
//               listOfTweets = {
//                 name: tweets[0].user.name,
//                 handle: tweets[0].user.screen_name,
//                 location: tweets[0].user.location,
//                 description: tweets[0].user.description,
//                 followers_count: tweets[0].user.followers_count,
//                 friends_count: tweets[0].user.friends_count,
//                 favourites_count: tweets[0].user.favourites_count,
//                 following: data,
//               };
//             }

//             for (let i = 0; i < tweets.length; i += 1) {
//               const t = {
//                 tweet: tweets[i].text,
//                 tweet_id: tweets[i].id_str,
//                 favorited: tweets[i].favorited,
//                 retweeted: tweets[i].retweeted,
//                 retweet_count: tweets[i].retweet_count,
//               };

//               tweetArray.push(t);
//             }

//             tweetArray.sort((a, b) => b.retweet_count - a.retweet_count);

//             const [topTweet] = tweetArray;
//             listOfTweets.topTweet = topTweet;
//             listOfTweets.tweets = { items: tweetArray };

//             return listOfTweets;
//           });
//         })
//         .catch((error) => {
//           throw error;
//         });
//     })
//     .catch(error => error);
// }

// async function postTweet(
//   tweet,
//   consumerKey,
//   consumerSecret,
//   accessTokenKey,
//   accessTokenSecret,
// ) {
//   const url = 'statuses/update';

//   const client = new Twitter({
//     consumer_key: consumerKey,
//     consumer_secret: consumerSecret,
//     access_token_key: accessTokenKey,
//     access_token_secret: accessTokenSecret,
//   });

//   const params = { status: tweet };

//   return client
//     .post(url, params)
//     .then((response) => {
//       console.log(response);

//       return {
//         tweet: response.text,
//         tweet_id: response.id_str,
//         retweeted: false,
//         retweet_count: 0,
//         favorited: false,
//       };
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

// async function deleteTweet(
//   tweetId,
//   consumerKey,
//   consumerSecret,
//   accessTokenKey,
//   accessTokenSecret,
// ) {
//   const url = 'statuses/destroy';

//   const client = new Twitter({
//     consumer_key: consumerKey,
//     consumer_secret: consumerSecret,
//     access_token_key: accessTokenKey,
//     access_token_secret: accessTokenSecret,
//   });

//   const params = { id: tweetId };

//   return client
//     .post(url, params)
//     .then((tweet) => {
//       console.log(tweet);

//       return {
//         tweet: tweet.text,
//         tweet_id: tweet.id_str,
//         retweeted: tweet.retweeted,
//         retweet_count: tweet.retweet_count,
//         favorited: tweet.favorited,
//       };
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

// async function reTweet(
//   tweetId,
//   consumerKey,
//   consumerSecret,
//   accessTokenKey,
//   accessTokenSecret,
// ) {
//   const url = 'statuses/retweet';

//   const client = new Twitter({
//     consumer_key: consumerKey,
//     consumer_secret: consumerSecret,
//     access_token_key: accessTokenKey,
//     access_token_secret: accessTokenSecret,
//   });

//   const params = { id: tweetId };

//   return client
//     .post(url, params)
//     .then((tweet) => {
//       console.log(tweet);

//       return {
//         tweet: tweet.text,
//         tweet_id: tweet.id_str,
//         retweeted: tweet.retweeted,
//         retweet_count: tweet.retweet_count,
//         favorited: tweet.favorited,
//       };
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

exports.graphqlHandler = (event, context, callback) => {
  console.log('Received event {}', JSON.stringify(event, 3));
  const { name, location } = event.arguments;

  // const consumerKey = event.arguments.consumer_key;
  // const consumerSecret = event.arguments.consumer_secret;

  console.log('Got an Invoke Request.');
  switch (event.field) {
    case 'getUserInfo':
      {
        // getRawTweets(event.arguments.handle, consumerKey, consumerSecret).then((result) => {
        //   callback(null, result);
        // });
        callback(null, 'this is get user info');

        break;
      }
    case 'meInfo':
      {
        // getRawTweets(event.handle, consumerKey, consumerSecret).then((result) => {
        //   callback(null, result);
        // });
        callback(null, {
          description: 'this is meInfo',
          favourites_count: 5,
          followers: ['me', 'i'],
          followers_count: 2,
          friends_count: 0,
          handle: 'jd',
          name: name,
          location: location
        });

        break;
      }
    case 'createTweet':
      {
        // postTweet(
        //   event.arguments.tweet,
        //   consumerKey,
        //   consumerSecret,
        //   event.arguments.access_token_key,
        //   event.arguments.access_token_secret,
        // ).then((result) => {
        //   callback(null, result);
        // });
        callback(null, 'this is create tweet');

        break;
      }
    case 'deleteTweet':
      {
        // deleteTweet(
        //   event.arguments.tweet_id,
        //   consumerKey,
        //   consumerSecret,
        //   event.arguments.access_token_key,
        //   event.arguments.access_token_secret,
        // ).then((result) => {
        //   callback(null, result);
        // });
        callback(null, 'this is delete tweet');

        break;
      }
    case 'reTweet':
      {
        // reTweet(
        //   event.arguments.tweet_id,
        //   consumerKey,
        //   consumerSecret,
        //   event.arguments.access_token_key,
        //   event.arguments.access_token_secret,
        // ).then((result) => {
        //   callback(null, result);
        // });
        callback(null, 'this is retweet');

        break;
      }
    default:
      {
        callback(`Unknown field, unable to resolve ${event.field}`, null);
        break;
      }
  }
};

/***/ })
/******/ ])));