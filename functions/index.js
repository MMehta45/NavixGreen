const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();


exports.sendNewsletterEmail = functions.firestore.document('newsletterrequests/{newsletterId}').onCreate((snapshot, context) => {
    //Pull data
    const userdata = snapshot.data();
    const email = userdata.email;
    const request_time = userdata.request_time;

    //Send data
    admin.firestore().collection("email").add({
        to: email,
        template: {
            name: "newsletter",
            data: {
                email: email,
                request_time: request_time
            }
        }
    });
});

exports.sendContactEmail = functions.firestore.document('contactrequests/{contactId}').onCreate((snapshot, context) => {
    //Pull data
    const userdata = snapshot.data();
    const email = userdata.email;
    const name = userdata.name;
    const subject = userdata.subject;
    const message = userdata.message;
    const contact_time = userdata.contact_time;

    //Send data
    admin.firestore().collection("email").add({
        to: email,
        template: {
            name: "contactreply",
            data: {
                email: email,
                name: name,
                subject: subject,
                message: message,
                contact_time: contact_time
            }
        }
    });
});
