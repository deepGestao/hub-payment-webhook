import { DynamoDB } from 'aws-sdk';

const dynamodb = new DynamoDB();

const sendDynamoDbRequest = async (content, validate, token) => {
  await dynamodb
    .putItem({
      TableName: `hub-payment-webhooks-${process.env.AWS_ENV}`,
      Item: {
        token: { S: token },
        request: { S: JSON.stringify(content) },
        validateRequest: { S: JSON.stringify(validate) },
        createdAt: { S: new Date().toISOString() },
      },
    })
    .promise();
};

export { sendDynamoDbRequest };
