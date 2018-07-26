module.exports = {
    url: function () {
        return this.api.launch_url;
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
            nationalSelect: {
                selector: "#%s"
        },
            jurisTab: {
                selector: "//li[contains(text(), '%s')]",
                locateStrategy: 'xpath'
        },
            stateSelect: {
                selector: "span < input"
        },
            jurisSelect: {
                selector: "#jurisTreeView_%d"// > input"
        },
            terriSelect: {
                selector: "span < input"
        },
            regionSelect: {
                selector: "span < input"
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