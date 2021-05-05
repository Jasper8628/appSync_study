const aws = require('aws-sdk');
exports.graphqlHandler = (event, context, callback) => {
  console.log('Received event {}', JSON.stringify(event, 3));

  // const consumerKey = event.arguments.consumer_key;
  // const consumerSecret = event.arguments.consumer_secret;

  console.log('Got an Invoke Request.');
  switch (event.field) {
    case 'getUserInfo': {
      // getRawTweets(event.arguments.handle, consumerKey, consumerSecret).then((result) => {
      //   callback(null, result);
      // });
      callback(null, 'this is get user info')

      break;
    }
    case 'createUser': {
      const dynamoDB = new aws.DynamoDB({
        region: 'ap-southeast-2',
        endpoint: "http://localhost:8000"
      });
      const { name, location, handle } = event.arguments;
      console.log('logging request: ',name);
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
          friends_count: { N: '0' },
        }
      }
      dynamoDB.putItem(params, (err, data) => {
        console.log('logging put item')
        if (err) {
          console.log(`${err.statusCode}: ${err.message}`);
          callback(err.message, { name: `couldn't create user ${name}` })
        } else {
          console.log('logging data: ',data)

          callback(null, { name: name })
        }
      })
      break;
    }
    case 'meInfo': {
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
      })

      break;
    }
    case 'createTweet': {
      // postTweet(
      //   event.arguments.tweet,
      //   consumerKey,
      //   consumerSecret,
      //   event.arguments.access_token_key,
      //   event.arguments.access_token_secret,
      // ).then((result) => {
      //   callback(null, result);
      // });
      callback(null, 'this is create tweet')

      break;
    }
    case 'deleteTweet': {
      // deleteTweet(
      //   event.arguments.tweet_id,
      //   consumerKey,
      //   consumerSecret,
      //   event.arguments.access_token_key,
      //   event.arguments.access_token_secret,
      // ).then((result) => {
      //   callback(null, result);
      // });
      callback(null, 'this is delete tweet')

      break;
    }
    case 'reTweet': {
      // reTweet(
      //   event.arguments.tweet_id,
      //   consumerKey,
      //   consumerSecret,
      //   event.arguments.access_token_key,
      //   event.arguments.access_token_secret,
      // ).then((result) => {
      //   callback(null, result);
      // });
      callback(null, 'this is retweet')

      break;
    }
    default: {
      callback(`Unknown field, unable to resolve ${event.field}`, null);
      break;
    }
  }
};
