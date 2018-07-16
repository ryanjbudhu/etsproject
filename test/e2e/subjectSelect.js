var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['subjectSelect'],
  'Choose Subject': (client) => {//function(browser) {
    //const skipStep = "//*[contains(text(), 'SKIP\ THIS\ STEP')]"
    const page = client.page.findButton();//browser

    page.navigate()   // Navigate to landing page and check the title of the page.
        .waitForElementVisible('body')
        .assert.title('NDE Core Web');

        //.click('@subSelector');

    /*client.execute('css selector', '#selSub > option[value]',function (choices){
        choices.value.forEach(function (value) {
            var elementID = value.ELEMENT;
            console.log('Checking Element - ' + elementID);
          });
     });*/
              // How to save a screenshot:
              //.saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
    for (var i=1;i<13;i++){//Click on subject and continue, for each subject
        page
            .waitForElementVisible("@mainButton")
            .click("@subSelector");
        client.pause(800);
        page
            .click(page.el('@subSelect',i));
        client.expect.element(page.el('@subSelect',i)).is.present;
        //client.expect.element("button[disabled='disabled']").is.not.present;
        client.pause(1000);
        page
            .click('@mainButton');
        client.pause(3000);
        page
            .waitForElementVisible('body')
            .assert.urlEquals('https://www.nationsreportcard.gov/ndecore/xplore/NDE')
            .click('.submit-button');

        

        client.back();
    }
    client.pause(3000);
    

    client.end();
  }
};