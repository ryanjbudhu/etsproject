var config = require("../../nightwatch.conf.js");

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['nationReportCard'],
  'Nation Report Card': (client) => {//function(browser) {
    //const skipStep = "//*[contains(text(), 'SKIP\ THIS\ STEP')]"
    const page = client.page.findButton();//browser

    page.navigate()   // Navigate to landing page and check the title of the page.
        .waitForElementVisible('body')
        .assert.title('NDE Core Web')

              // How to save a screenshot:
              //.saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')
    
        // Skip entering criteria and go to xplore page with no filters.
        .click('@skipStep')
        .waitForElementVisible('.modal-dialog')
        .assert.urlEquals("https://www.nationsreportcard.gov/ndecore/xplore/NDE")
        .click('.submit-button'); //Click accept terms button
    client.pause(3000);

    client.end();
  }
};
