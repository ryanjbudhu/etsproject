var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['skipThisStep'],
  'Skip This Step': (client) => {//function(browser) {
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
        .click('.submit-button') //Click accept terms button
        .waitForElementVisible('@subSelector');

    page
        .click('@subSelector');
        client.pause(1000);
    page
        .click(page.el('@subSelect',4));//   Mathematics
    client.pause(2000);
    page
        .click('@graSelector');
        client.pause(1000);
    page
        .click(page.el('@graSelect',1));//   Grade 4
    client.pause(2000);
    page    
        .click('@yearSelector');
        client.pause(1000);
    page
        .click(page.el('@yearSelect',3));//  2015
    client.pause(2000);
    page
        .click('@scaSelector');
    client.pause(1000);
    page
        .click(page.el('@scaSelect',4));//   Data analysis...
    client.pause(2000);

    //Open Jurisdiction tab
    page
        .click(page.el('@accordianSelector','JUR'));
    /*    .click('@stateTab')
        .click(page.el('@stateSelect','checkbox_9269d840-de25-40e5-b5cd-8823c8d570ae'))
        .click('@distTab')
        .click(page.el('@distSelect','checkbox_e0c86fc8-7894-46cd-8a62-6d87c821c92d'))
        .click('@terriTab')
        .click(page.el('@terriSelect','checkbox_fa580993-057e-4ab2-81fa-9b10c2b81a3f'))
        .click('@regionTab')
        .click(page.el('regionSelect','checkbox_2d06b36d-d616-4289-8739-05180c8d6a75'))
        .click(page.el('@accordianSelector','VAR'))
        .click('#GENDER|Gender')
        ;*/
    client.pause(2000);
    client.end();
  }
};