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
            console.log(result.value[0]);
            for(var i=0;i<result.length/2; i+=2){
                this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                    page.click("label[for='"+result+"']");
                    console.log(result);
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

    client
        .elements('css selector', checkbox,
        function(result){
            for(var i=0;i<result.length/2; i+=2){
                this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                    page.click("label[for='"+result+"']");
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

    client
        .elements('css selector', checkbox,
            function(result){
                for(var i=0;i<result.length/2; i+=2){
                    this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                        page.click("label[for='"+result+"']");
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
    client
        .elements('css selector', checkbox,
        function(result){
            for(var i=0;i<result.length/2; i+=2){
                this.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                    page.click("label[for='"+result+"']");
                    //client.pause(10);
                });
            }
        });

/*
    //VARIABLE Tab
    client.pause(1000);
        page.click(page.el('@accordianSelector','VAR'));
    client.pause(1000);
    page.click("label[for='GENDER|Gender']");
    client.setValue('input[aria-labelledby="var_searchInputTxt"]','books');
    page.click('span[aria-labelledby="var_searchBtn"]');
   
    client.pause(3000);
    page
        .click(page.el('@variableSearch','B013801'))
    //Combine Variable Categories
        .click('combine-var-modal')
        .click('label[for="cvar2"')
        .click('label[for="cvar3"');
    client
        .assert.attributeEquals('button[aria-labelledby="create_btn_var"','disabled','true','Create button is disabled')
        .setValue('#varCombName','More than 10');
    page
        .click('button[aria-labelledby="create_btn_var"')
        .click('ul.modal-action-buttons > li > button.submit-button');

    client.pause(1500);
    //Create Crosstab
    page
        .click('create-crosstab-modal');
    client.useXpath().pause(600);
    page
        .click(page.el('@crosstab','1'))
        .click(page.el('@crosstab','2'));

    client.useCss()
        .assert.attributeEquals('button[aria-labelledby="create_btn_ctab"','disabled','true','Create button is disabled')
        .setValue('#varCrtName','Books in home by gender');
    page
        .click('button[aria-labelledby="create_btn_ctab"')
        .click('ul.modal-action-buttons > li > button.submit-button');


    client.pause(1000);
    //STATISTIC Tab
    page
        .click(page.el('@accordianSelector','STAT'))
        .waitForElementVisible('@percentiles','Statistic tab is visible')
        .click('@percentiles')

        //Decimal places = 2
        .click('global-format-options')
        .click('global-options-window > div > div.modal-window-content > div:nth-child(4) > ul > li:nth-child(3) > label')
        .click('button.submit-button');

    client.expect.element("button[aria-describedby='createReportReadingText'").to.not.have.attribute('disabled');

    page.click("button[aria-describedby='createReportReadingText'");

    //Show report data for first report
    page
        .click('#report_0 > div.report-header > div > div.text-right > button.show-report-options')
        .waitForElementVisible('@findTable',200000);
    
*/
    client.pause(8000);

    client.end();
  }
};