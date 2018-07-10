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
                selector: "span[aria-owns=selSub_listbox]"
        },
            graSelector:{
                selector: "span[aria-owns=selGra_listbox]"
        },
            jurSelector:{
                selector: "span[aria-owns=selJur_listbox]"
        },
            subSelect: {
                selector: "#selSub_listbox>li[data-offset-index='%d']"
        },
            graSelect: {
                selector: "#selGra>option[value='%s']"
        },
            jurSelect: {
                selector: "#selJur>option[value='%s']"
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