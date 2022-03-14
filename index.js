const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" });

function getRecipients() {
    return [
      {userId: 1, email: "nipunjainindia@gmail.com", billingDate: new Date()},
      {userId: 2, email: "nipunmittal1964@gmail.com", billingDate: new Date()}
    ];
}

function getEmailData() {
    const recipients = getRecipients();
    const recipientsEmails = recipients.map((recipient) => recipient.email);
    const subject = "Keep on enjoying our latest content by paying just Rs 199";
    const body = "Hi Nipun, Your payment is due on Mar 14th, 2022. Please make the payment to continue enjoying latest content. Regards, Team Tube";
    const sourceEmail = "nipunjainindia@gmail.com";
    
    return {
      recipients: recipientsEmails,
      subject,
      body,
      sourceEmail
    };
}

exports.handler = async (event) => {
    const {recipients, subject, body, sourceEmail} = getEmailData();
    
    let params = {
    Destination: {
      ToAddresses: recipients,
    },
    Message: {
      Body: {
        Text: { Data: body },
      },

      Subject: { Data: subject },
    },
    Source: sourceEmail,
  };
 
  return ses.sendEmail(params).promise();
};
