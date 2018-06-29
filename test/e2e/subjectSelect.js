var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['subjectSelect'],
  'Choose Subject': (client) => {//function(browser) {
    //const skipStep = "//*[contains(text(), 'SKIP\ THIS\ STEP')]"
    const page = client.page.findButton();//browser
    var subArray = ["CIV"];

    page.navigate()   // Navigate to landing page and check the title of the page.
        .waitForElementVisible('body')
        .assert.title('NDE Core Web');

        //.click('@subSelector');

    client.execute('css selector', '#selSub > option[value]',function (choices){
        choices.value.forEach(function (value) {
            var elementID = value.ELEMENT;
            console.log('Checking Element - ' + elementID);
          });
     });
              // How to save a screenshot:
              //.saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
    for (var i=0;i<subArray.length;i++){
        client.pause(1000);
        page
            .click("[value="+subArray[i]+"]");
        client.expect.element('button[disabled=disabled]').is.not.present;
        page
            .click('@mainButton')
            .waitForElementVisible('body')
            .assert.urlEquals('https://www.nationsreportcard.gov/ndecore/xplore/NDE');
        client.back();
    }
    client.pause(3000);
    

    client.end();
  }
};