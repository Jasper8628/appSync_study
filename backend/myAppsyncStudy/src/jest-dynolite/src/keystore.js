const { DocumentClient } = require("aws-sdk/clients/dynamodb");
const aws=require('aws-sdk')

// const ddb = new aws.DynamoDB.DocumentClient({
//   convertEmptyValues: true,
//   sslEnabled: false,
//   region: "local",
//   endpoint: "http://localhost:8000"
// });

const ddb = new DocumentClient({
  convertEmptyValues: true,
  sslEnabled: false,
  endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
  region: "local",
});

module.exports = {
  getItem: async (byId) => {
    const { Item } = await ddb
      .get({ TableName: "keys", Key: { id: byId } })
      .promise();

    return Item && Item.value;
  },
  putItem: (id, value) =>
    ddb.put({ TableName: "keys", Item: { id, value } }).promise(),
};