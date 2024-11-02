import { EventBridge } from 'aws-sdk';

const eventbridge = new EventBridge();

const sendEventBridge = async (content, token) => {
  await eventbridge
    .putEvents({
      Entries: [
        {
          Source: `hub-payment-notification-webhook-${process.env.AWS_ENV}`,
          EventBusName: 'default',
          DetailType: `${content.type}|${content.action}`,
          Detail: JSON.stringify({
            id: content.data.id,
            token,
          }),
        },
      ],
    })
    .promise();
};

export { sendEventBridge };
