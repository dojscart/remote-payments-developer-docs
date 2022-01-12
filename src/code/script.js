const payConfig = {
    paymentDetails: {
        amount: "100",
        currencyCode: "826",
        paymentToken: "Uk9x5Crbo7zPaKAHs5bRYVaTnicMjCaQGu9MsiMwIiC8cYN3qCNhR8OcMMvCBANUZK0pxXkOZkDDWy4JDTkWGTF9xVhbGdG1lGBLP4r83GxGDGKmoOI1YBpZJiK2tkDTEWzq",  //connecteToken
    },
containerId: "demo-payment",
    fontCss: ['https://fonts.googleapis.com/css?family=Do+Hyeon'],
    styles: {
        base: {
        },
    }
}

const connectE = new Connect.ConnectE(payConfig, displayErrors);
const btnTestPay = document.getElementById("testPay");

btnTestPay.onclick = () => {
    btnTestPay.innerText = 'loading';
    btnTestPay.setAttribute("disabled", "true");
    connectE.executePayment()
        .then(function (data) {
            document.getElementById("demo-payment").hidden = true;
            btnTestPay.remove();
            document.getElementById("demo-result").hidden = false;
            document.getElementById("status-code").innerText = data.statusCode;
            document.getElementById("auth-code").innerText = data.authCode;
        }).catch(function (data) {
            console.log('Payment Request failed: ' + data);
            btnTestPay.innerText = 'Pay';
            btnTestPay.removeAttribute("disabled");
            if (typeof data === 'string') {
                document.getElementById("errors").innerText = data;
            }
            if (data && data.message) {
                document.getElementById("errors").innerText = data.message;
            }
        }
        );
};

function paymentComplete(response) {
    document.getElementById('demo-payment-wallet').hidden = true;
    document.getElementById('demo-result').hidden = false;
    document.getElementById('status-code').innerText = response.statusCode;
    document.getElementById('auth-code').innerText = response.authCode;
    document.getElementById('message').innerText = response.message;
}

function displayErrors(errors) {
    const errorsDiv = document.getElementById('errors');
    errorsDiv.innerHTML = '';
    if (errors && errors.length) {
        const list = document.createElement("ul");
        for (const error of errors) {
            const item = document.createElement("li");
            item.innerText = error.message;
            list.appendChild(item);
        }
        errorsDiv.appendChild(list);
    }
}