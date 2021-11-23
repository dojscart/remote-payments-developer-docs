const hooks = require('hooks');
const PaymentIntent = require('./payment_intent')

hooks.beforeAll((transaction, done) => {
    if(transaction.request !== undefined) {
        transaction.request.headers['Service-Account-Id'] = 'remotepayments-pod-default@firefly-dev-2018.iam.gserviceaccount.com';
    }
    done();
});

hooks.beforeEach(async (transaction, done) => {
    // if ((transaction.request.method === "DELETE" || transaction.request.method === "GET") && transaction.skip === false) {
    if (transaction.skip === false) {
        const intent = await new PaymentIntent().post();
        console.log("Created test intent: " + intent.id)
        transaction.request.uri = transaction.request.uri.replace('pi_11111111111111111', intent.id);
        transaction.fullPath = transaction.fullPath.replace('pi_11111111111111111', intent.id);
    }

    transaction.request.headers['Service-Account-Id'] = 'remotepayments-pod-default@firefly-dev-2018.iam.gserviceaccount.com';
    done();
});