import { APIGatewayProxyHandler, APIGatewayProxyResult, AppSyncResolverHandler } from 'aws-lambda';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { DynamoDB } from 'aws-sdk';
const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const docClient = new DynamoDB.DocumentClient();

export const lambdaFunction = async (event, context, callback) => {
  const id = event.arguments;
  const params = {
    TableName: process.env.DYNAMO_USER_PROFILE_TABLE,
    Item: {
      ID: id,
    },
  };
  return new Promise((resolve) => {
    docClient.put(params, function (error, result) {
      if (error) {
        // Log errors
        console.error(`[${error.name}] ${error.message}`);
        // Return no error messages to keep the internals of the system private
        resolve(callback(null, error));
      } else {
        console.log('logging result: ', result);
        resolve(callback(null, result));
      }
    });
  });
};