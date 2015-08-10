var casper = require('casper').create();

function getLinks() {
    var products = document.querySelectorAll('td div.product');
    var linkText = [];
    document.querySelectorAll("td div.product")[1].parentNode.parentNode.childNodes[2].childNodes[0].childNodes[0].childNodes[0].nextSibling.onclick({clientX: 800});
}

function addToCart() {
    add_mods();
}

casper.start('http://www.oftendining.com/restaurant_info/order.php?store_id=2231&oid=1', function() {
    this.echo(this.getTitle());
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    this.evaluate(getLinks);
});

casper.then(function() {
  this.wait(5000);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    this.evaluate(addToCart);
});

casper.then(function() {
  this.wait(1000);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    this.evaluate(function() {
      check_out();
    });
});

casper.then(function() {
  this.wait(1000);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    this.fill('form[name="login_form"]', { username: 'sid.bala@outlook.com', password: 'DoEpicShit!' }, true);
});

casper.then(function() {
  this.wait(1000);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    this.fill('form[name="delivery_form"]', { pickup_date2: '10'}, true);
});

casper.then(function() {
  this.wait(1000);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    this.fill('form[name="purchase_form"]', {

        cardholder_name: casper.cli.raw.get('cardholder_name'),
        payment_number: casper.cli.raw.get('payment_number'),
        security_code: casper.cli.raw.get('security_code'),
        credit_month: casper.cli.raw.get('credit_month'),
        credit_year: casper.cli.raw.get('credit_year'),
        payment_type: casper.cli.raw.get('payment_type')},

        true);
});

casper.then(function() {
  this.wait(1000);
});

casper.then(function then() {
    this.capture('yoursitelist.png');
});

casper.run();
