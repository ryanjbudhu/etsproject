var config = require('../../nightwatch.conf.js');
var config = require('../../poseidon.conf.js');
var myConfig = require('../../poseidonTest.js');

function clickBoxes(result,page,client,tabIDX){
    var repeat = Math.floor(Math.random()*(result.value.length/2));
    //var current = [];
    var currentTestStrings = myConfig.jurisdictionNames["state"];//myConfig.jurisdictionProperties[tabIDX]];
    for(var i=0;i<4; i++){
        if(tabIDX!='1'){
            var k = Math.floor(Math.random()*(result.value.length-repeat))+repeat;
            client.elementIdAttribute(result.value[k].ELEMENT, 'for', function(result){
                page.click("label[for='"+result.value+"']");
                
            });
        }
        else{
            client.elementIdAttribute(result.value[i].ELEMENT, 'for', function(result){
                page.click("label[for='"+result.value+"']");
                var txt = "label[for='"+result.value+"']";
                /*client.getText("css selector",text, function (x){
                    console.log(x.value);
                    
                });*/
            });
        }

        //if(tabIDX==1){client.expect.element(text).text.to.equal(currentTestStrings[i]);}
            
        
    }
}


function checkRow(row,child,page,client){
    for(var i=0;i<15;i++){
        //console.log(row[i]);
        //var column = client.element("css selector",page.el2("@checkTableRow",1,i+1));
        var text = page.el2("@checkTableRow",child,i+1);
        page.isVisible(text);
        page.assert.containsText(text,row[i]);
    }
}

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['skipThisStep'],
  'Skip This Step': (client) => {
    const page = client.page.findButton();

    page.navigate()   // Navigate to landing page and check the title of the page.
        .waitForElementVisible('body')
        .assert.title('NDE Core Web')
        .waitForElementVisible('@skipStep')
    
              // How to save a screenshot:
              //.saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz.png')

        // Skip entering criteria and go to xplore page with no filters.
        .click('@skipStep')
        .waitForElementVisible('.modal-dialog')
        .assert.urlEquals(myConfig.launch_url+"/xplore/NDE")
        .click('.submit-button') //Click accept terms button
        .waitForElementVisible('@subSelector');
/**/
    page
        .click('@subSelector')
        .pagePause(client,1000)
    
        .click(page.el('@subSelect',myConfig.subjectChoice))
        .pagePause(client,2000)
    
        .click('@graSelector')
        .pagePause(client,1000)
    
        .click(page.el('@graSelect',myConfig.gradeChoice))
    .pagePause(client,2000)
        
        .click('@yearSelector')
        .pagePause(client,1000)
    
        .click(page.el('@yearSelect',myConfig.yearChoice))
    .pagePause(client,2000)
    
        .click('@scaSelector')
    .pagePause(client,1000)
    
        .click(page.el('@scaSelect',myConfig.scaleChoice))
    .pagePause(client,2000)
    
    .assert.title('NDE Core Web')
    //Open Jurisdiction tab
    .click(page.el('@accordianSelector','JUR'))

    .pagePause(client,1000);
    client.useXpath();

    var checkbox = page.el('@jurisSelect','1');

    page.click(page.el('@jurisTab','State'));

    client.pause(1000)
    .useCss();

    client.elements('css selector', checkbox,
        function(result){
            clickBoxes(result,page,client,1);
        })

    .pause(1000)
    .useXpath();

        page.click(page.el('@jurisTab','District'))

    .pagePause(client,1000);
    client.useCss();

    page.assert.title('NDE Core Web');
    checkbox = page.el('@jurisSelect','2');

    client
        .elements('css selector', checkbox,
        function(result){
            clickBoxes(result,page,client,2);
        })

    .pause(1000)
    .useXpath();

        page.click(page.el('@jurisTab','Territory/Other'))

    .pagePause(client,1000);
    client.useCss();

    page.assert.title('NDE Core Web');
    checkbox = page.el('@jurisSelect','3');

    client
        .elements('css selector', checkbox,
        function(result){
            clickBoxes(result,page,client,3);
        })

    .pause(1000)
    .useXpath();

        page.click(page.el('@jurisTab','Region'))

    .pagePause(client,1000);
    client.useCss();
    
    page.assert.title('NDE Core Web');
    checkbox = page.el('@jurisSelect','4');
    client
        .elements('css selector', checkbox,
        function(result){
            clickBoxes(result,page,client,4);
        });
//*/ 

 /**/   //VARIABLE Tab
    page
        .pagePause(client,1000)
            .click(page.el('@accordianSelector','VAR'))
        .pagePause(client,1000)
        .click("label[for='GENDER|Gender']");
    client.setValue('input[aria-labelledby="var_searchInputTxt"]','books');
    page.click('span[aria-labelledby="var_searchBtn"]')
   
    .pagePause(client,3000)
        .click(page.el('@variableSearch','B013801'))
    //Combine Variable Categories
        .click('combine-var-modal')
    .pagePause(client,500)
    
        .click('label[for="cvar2"]')
        .click('label[for="cvar3"]');
    client
        .assert.attributeEquals('button[aria-labelledby="create_btn_var"]','disabled','true','Create button is disabled')
        .setValue('#varCombName','More than 10');
    page
        .click('button[aria-labelledby="create_btn_var"]')
        .click('ul.modal-action-buttons > li > button.submit-button')

    .pagePause(client,1500);
    //Create Crosstab
    page
        .click('create-crosstab-modal');
    client.useXpath().pause(500);
    page
        .click(page.el('@crosstab','1'))
        .click(page.el('@crosstab','2'));

    client.useCss()
        .assert.attributeEquals('button[aria-labelledby="create_btn_ctab"]','disabled','true','Create button is disabled')
        .setValue('#varCrtName','Books in home by gender');
    page
        .click('button[aria-labelledby="create_btn_ctab"]')
        .click('ul.modal-action-buttons > li > button.submit-button')


    .pagePause(client,1000);
    //STATISTIC Tab
    page
        .click(page.el('@accordianSelector','STAT'))
        .waitForElementVisible('@percentiles','Statistic tab is visible')
        .click('@percentiles')

        //Decimal places = 2
        .click('global-format-options')
    .pagePause(client,500);
    page//change
        .click('global-options-window > div > div.modal-window-content > div:nth-child(4) > ul > li:nth-child(3) > label')
        .click('button.submit-button');

    client.expect.element("button[aria-describedby='createReportReadingText']").to.not.have.attribute('disabled');

    page
        .click("div.criteria-button-lower button.submit-button[aria-describedby]")
        .waitForElementVisible('#report_0');

    //Show report data for first report
    page
        .click('#report_0 button.show-report-options')
        .waitForElementVisible('@findTable',900000);
    client
        .resizeWindow(2000,1160)
        .moveToElement('div.dataTableContainer table',0,300)
        .saveScreenshot(config.imgpath(client) + 'finalTable.png');

    checkRow(myConfig.national2017.firstRow,1,page,client);
    checkRow(myConfig.national2017.secondRow,2,page,client);
    checkRow(myConfig.alabama2017.firstRow,4,page,client);
    checkRow(myConfig.alaska2017.secondRow,8,page,client);

    //Check Significance Test
    page
        .click(page.el("@reportTabs","3"))
        .click(page.el("@testJuri","sig"))
        .click(page.el("@testVariFirst","sig"))
        .click(page.el("@testVariLast","sig"))
        .click(page.el("@genTest","sig"))
        .waitForElementVisible('sigwizard-table',500000);
 
    client
        .moveToElement('sigwizard-table table',0,300)
        .saveScreenshot(config.imgpath(client) + 'finalSigTable.png')
        .pause(1500);

    //Check Gap Analysis
    page
        .click(page.el("@reportTabs","4"))
        .pagePause(client,2000)
        .click(page.el("@testJuri","gap"))
        .click(page.el("@testVariFirst","gap"))
        .click(page.el("@testVariLast","gap"))
        .click(page.el("@genTest","gap"))
        .waitForElementVisible('sigwizard-table',100000);

    client
        .moveToElement('sigwizard-table table',0,300)
        .saveScreenshot(config.imgpath(client) + 'finalGapTable.png');

    page.pagePause(client,8000);

    client.end();
  }
};