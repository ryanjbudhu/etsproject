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
/*
    page
        .click('@subSelector');
        client.pause(1000);
    page
        .click(page.el('@subSelect','4'));//   Mathematics
    client.pause(2000);
    page
        .click('@graSelector');
        client.pause(1000);
    page
        .click(page.el('@graSelect','1'));//   Grade 4
    client.pause(2000);
    page    
        .click('@yearSelector');
        client.pause(1000);
    page
        .click(page.el('@yearSelect','3'));//  2015
    client.pause(2000);
    page
        .click('@scaSelector');
    client.pause(1000);
    page
        .click(page.el('@scaSelect','4'));//   Data analysis...
    client.pause(2000);
    */

    //Open Jurisdiction tab
    var checkbox = page.el('@jurisSelect','1');
    page
        .click(page.el('@accordianSelector','JUR'));

    client.pause(1000)
    .useXpath();

    page.click(page.el('@jurisTab','State'));

    client.pause(1000)
    .useCss();

    client.elements('css selector', checkbox,
        function(result){
            for(var i in result.value){
                this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                    page.click("label[for='"+result.value+"']");
                    //client.pause(10);
                });
            }
        });

    client.pause(1000)
    .useXpath();

        page.click(page.el('@jurisTab','District'));

    client.pause(1000)
    .useCss();

    page.assert.title('NDE Core Web');
    checkbox = page.el('@jurisSelect','2');
    console.log(checkbox);

    client
        .elements('css selector', checkbox,
        function(result){
            for(var i in result.value){
                this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                    page.click("label[for='"+result.value+"']");
                    //client.pause(100);
                });
            }
        });

    client.pause(1000)
    .useXpath();

        page.click(page.el('@jurisTab','Territory/Other'));

    client.pause(1000)
    .useCss();

    page.assert.title('NDE Core Web');
    checkbox = page.el('@jurisSelect','3');
    console.log(checkbox);

    client
        .elements('css selector', checkbox,
            function(result){
                for(var i in result.value){
                    this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                        page.click("label[for='"+result.value+"']");
                        //client.pause(10);
                    });
                }
            });

    client.pause(1000)
    .useXpath();

        page.click(page.el('@jurisTab','Region'));

    client.pause(1000)
    .useCss();
    
    page.assert.title('NDE Core Web');
    checkbox = page.el('@jurisSelect','4');
    console.log(checkbox);
    client
        .elements('css selector', checkbox,
        function(result){
            for(var i in result.value){
                this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                    page.click("label[for='"+result.value+"']");
                    //client.pause(10);
                });
            }
        });


    //VARIABLE Tab
    client.pause(1000);
        page.click(page.el('@accordianSelector','VAR'));
    client.pause(1000);
        page.click("label[for='GENDER|Gender']");
    client.pause(6000)
    .end();
  }
};