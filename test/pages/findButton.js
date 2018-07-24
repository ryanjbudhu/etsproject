module.exports = {
    url: function () {
        return this.api.launch_url;
    },
    elements: {
            skipStep: {
                selector: "//*[contains(text(), 'SKIP\ THIS\ STEP')]",
                locateStrategy: 'xpath'
        },
            mainButton: {
                selector: "//*[contains(text(), 'ENTER THE MAIN NAEP DATA EXPLORER')]",
                locateStrategy: 'xpath'
        },
            subSelector:{
                selector: "span[aria-owns='selSub_listbox']"
        },
            newSubSelector:{
                selector: "#selSub"
        },
            newGraSelector:{
                selector: "#selGra"
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
            nationalTab: {
                selector: "//*[contains(text(), 'National')]",
                locateStrategy: 'xpath'
        },
            nationalSelect: {
                selector: "#%s"
        },
            stateTab: {
                selector: "//*[contains(text(), 'State')]",
                locateStrategy: 'xpath'
        },
            stateSelect: {
                selector: "#%s"
        },
            distTab: {
                selector: "//*[contains(text(), 'District')]",
                locateStrategy: 'xpath'
        },
            jurisSelect: {
                selector: "#jurisTreeView_%d > input"
        },
            terriTab: {
                selector: "//*[contains(text(), 'Territory/Other')]",
                locateStrategy: 'xpath'
        },
            terriSelect: {
                selector: "#%s"
        },
            regionTab: {
                selector: "//*[contains(text(), 'Region')]",
                locateStrategy: 'xpath'
        },
            regionSelect: {
                selector: "#%s"
        }
    },
    commands:   [{
        el: function(elementName,data){
            var util = require('util');
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector,data);
        }
    }]
}