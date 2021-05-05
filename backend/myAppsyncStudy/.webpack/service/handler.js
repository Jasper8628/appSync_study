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


const aws = __webpack_require__(1);
exports.graphqlHandler = (event, context, callback) => {
  console.log('Received event {}', JSON.stringify(event, 3));

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
    case 'createUser':
      {
        const dynamoDB = new aws.DynamoDB({
          region: 'ap-southeast-2',
          endpoint: "http://localhost:8000"
        });
        const { name, location, handle } = event.arguments;
        console.log('logging request: ', name);
        const params = {
          TableName: 'Users',
          Item: {
            name: { S: name },
            handle: { S: handle },
            location: { S: location },
            description: { S: `new user ${name} created` },
            favourites_count: { N: '0' },
            followers: { L: [{ S: 'me' }, { N: '55' }] },
            followers_count: { N: '2' },
            friends_count: { N: '0' }
          }
        };
        dynamoDB.putItem(params, (err, data) => {
          console.log('logging put item');
          if (err) {
            console.log(`${err.statusCode}: ${err.message}`);
            callback(err.message, { name: `couldn't create user ${name}` });
          } else {
            console.log('logging data: ', data);

            callback(null, { name: name });
          }
        });
        break;
      }
    case 'meInfo':
      {
        const { name, location } = event.arguments;
        callback(null, {
          description: `this is ${name} info`,
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ })
/******/ ])));