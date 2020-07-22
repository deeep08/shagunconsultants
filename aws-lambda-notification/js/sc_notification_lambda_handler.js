// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
});

// Set region
AWS.config.update({region: 'us-east-1'});

// Create publish parameters
let params = {
    Message: 'Hi from aws js sdk', /* required */
    TopicArn: 'arn:aws:sns:us-east-1:198174245046:SCQueryNotification'
};

// Create promise and SNS service object
let publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
    function(data) {
        console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
        console.log("MessageID is " + data.MessageId);
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });
