let AWS = require('aws-sdk');

exports.handler = async (event) => {
    console.log(event.body);

    let body = JSON.parse(event.body) || {};

    // Create publish parameters
    let message = `You received a new query. See below for details:-` +
        `\n\nName: ${body.name}` +
        `\nEmail: ${body.email}` +
        `\nMessage:\n${body.message}` +
        `\n\nThanks,` +
        `\nShagun Consultants Service`;

    let params = {
        Subject: `New Query: ${body.subject}`,
        Message: message, /* required */
        TopicArn: 'arn:aws:sns:us-east-1:198174245046:SCQueryNotification'
    };

    // Create promise and SNS service object
    let publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

    // Handle promise's fulfilled/rejected states
    return publishTextPromise.then(data => {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify('OK')
        };
    }).catch(err => {
        console.error(err, err.stack);
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify('NOTOK')
        };
    });
};
