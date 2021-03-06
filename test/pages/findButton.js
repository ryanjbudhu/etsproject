var myConfig = require('../../poseidonTest.js');

module.exports = {
    url: function () {
        return myConfig.launch_url;
    },
    elements: {
            skipStep: {
                selector: "//a[contains(text(), 'SKIP\ THIS\ STEP')]",
                locateStrategy: 'xpath'
        },
            mainButton: {
                selector: "//button[contains(text(), 'ENTER THE MAIN NAEP DATA EXPLORER')]",
                locateStrategy: 'xpath'
        },
            subSelector:{
                selector: "span[aria-owns='selSub_listbox']"
        },
            subSelect: {
                selector: "#selSub_listbox>li[data-offset-index='%d']"
        },
            graSelector:{
                selector: "span[aria-owns='selGra_listbox']"
        },
            graSelect: {
                selector: "#selGra_listbox>li[data-offset-index='%d']"
        },
            jurSelector:{
                selector: "span[aria-owns='selJur_listbox']"
        }, 
            jurSelect: {
                selector: "#selJur_listbox>li[data-offset-index='%d']"
        },
            yearSelector: {
                selector: "[aria-owns~=selYear_listbox]"
        },
            yearSelect: {
                selector: "#selYear_listbox>li[data-offset-index='%d']"
        },
            scaSelector: {
                selector: "[aria-owns~=selSca_listbox]"
        },
            scaSelect: {
                selector: "#selSca_listbox>li[data-offset-index='%d']"
        },
            accordianSelector: {
                selector: "accordion-panel[panel-type='%s']>div[class='panel']"// JUR|VAR|STAT
        },
            jurisTab: {
                selector: "//li[contains(text(), '%s')]",
                locateStrategy: 'xpath'
        },
            jurisSelect: {
                selector: "#jurisTreeView_%s > ul > li > ul > li > div > span > span > label"
        },
            variableSearch: {
                selector: "[for='comparison%s'] > span.input-checkbox"
        },
            percentiles: {
                selector: "//*[@id='statTreeView']/ul/li[5]/div/span[2]/span/label",
                locateStrategy: 'xpath'
        },
            crosstab: {
                selector: '//*[@id="combineCTabTreeView"]/ul/li[%s]/div/span[1]/label'
       },
            findTable: {
                selector: "#report_0 > div.reportListTabsContainer div[ng-if=\"tabContent.itemValue == 'DATATABLE'\"]  > ndedata-table > div > div.data-table-section > div[ng-hide]"
        },
            checkTableRow: {
                selector: "ndedata-table tbody tr:nth-child(%s) td:nth-child(%s)"
        },
            reportTabs: {
                selector: "[aria-labelledby=tabMsg_0_%s]"
        },
            testJuri: {
                selector: "%s-wizard jurisdiction-wizard .k-top.k-bot label"
        },
            testVariFirst: {
                selector: "%s-wizard variable-wizard .k-top label"
        },
            testVariLast: {
                selector: "%s-wizard variable-wizard .k-treeview-lines > li.k-last > div.k-bot > span label"
        },
            testYear: {
                selector: "%s-wizard year-wizard .k-top label"
        },
            testStat: {
                selector: "statistic-wizard .k-top label"
        },
            genTest: {
                selector: "[aria-labelledby=%s_test_0]"
        }
    },
    commands:   [{
        el: function(elementName,data){
            var util = require('util');
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector,data);
        },
        el2: function(elementName,data1,data2){
            var util = require('util');
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector,data1,data2);
        },
        pagePause: function(browser,length){
            browser.pause(length);
            return this;
        }
    }]
}