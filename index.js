const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

function getRecipients() {
    return [
      {userId: 1, email: "nipunjainindia@gmail.com", billingDate: new Date()},
      {userId: 2, email: "nipunmittal1964@gmail.com", billingDate: new Date()}
    ];
}

exports.handler = async (event) => {
    const recipients = getRecipients();
    const recipientsEmails = recipients.map((recipient) => recipient.email);
    
    let params = {
    Destination: {
      ToAddresses: recipientsEmails,
    },
    Message: {
      Body: {
        Text: { Data: "Hi Nipun, Your payment is due on Mar 14th, 2022. Please make the payment to continue enjoying latest content. Regards, Team Tube" },
      },

      Subject: { Data: "Keep on enjoying our latest content by paying just Rs 199" },
    },
    Source: "nipunjainindia@gmail.com",
  };
 
  return ses.sendEmail(params).promise();
};
