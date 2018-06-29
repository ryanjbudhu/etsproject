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
            subSelect: {
                selector: "#selSub > option[value]"
        },
            graSelect: {
                selector: "#selGra > option[value]"
        },
            jurSelect: {
                selector: "#selJur > option[value]"
        }
    }
}