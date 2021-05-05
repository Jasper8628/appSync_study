const aws = require('aws-sdk');

const dynamoDB = new aws.DynamoDB({
  region: process.env.REGION,
  endpoint: process.env.END_POINT
});
exports.graphqlHandler = (event, context, callback) => {

  console.log('Received event {}', JSON.stringify(event, 3));
  console.log('Got an Invoke Request.');

  switch (event.field) {
    case 'getUserInfo': {

      callback(null, 'this is get user info')
      break;
    }
    case 'createUser': {
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
        if (err) {
          console.log(`${err.statusCode}: ${err.message}`);
          callback(err.message, { name: `couldn't create user ${name}` })
        } else {
          callback(null, { name: `new user '${name}' created` })
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
