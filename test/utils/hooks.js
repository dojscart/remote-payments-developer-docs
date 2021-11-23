const hooks = require('hooks');
const PaymentIntent = require('./payment_intent')

hooks.beforeEach(async (transaction, done) => {
    transaction.skip = false;

    if(transaction.expected.statusCode === "400") {
        transaction.request.body = '';
    }

    if(transaction.expected.statusCode !== '401') {
        transaction.request.headers['Service-Account-Id'] = 'remotepayments-pod-default@firefly-dev-2018.iam.gserviceaccount.com';
    }

    if(process.env.TEST_API === transaction.name || process.env.TEST_API === 'all') {
        const intent = await new PaymentIntent().post();
        console.log("Created test intent: " + intent.id)
        transaction.request.uri = transaction.request.uri.replace('pi_11111111111111111', intent.id);
        transaction.fullPath = transaction.fullPath.replace('pi_11111111111111111', intent.id);
    }

    done();
});

