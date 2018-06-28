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
                selector: "//*[contains(text(), 'ENTER\ THE\ MAIN\ NAEP\ DATA\ EXPLORER')]",
                locateStrategy: 'xpath'
        },
            subSelect: {
                selector: "//*[contains(text(), 'Select\ a\ Subject')]",
                locateStrategy: 'xpath'
        },
            graSelect: {
                selector: "//*[contains(text(), 'Select\ a\ Grade')]",
                locateStrategy: 'xpath'
        },
            jurSelect: {
                selector: "//*[contains(text(), 'Select\ a\ Juristiction')]",
                locateStrategy: 'xpath'
        }
    }
}