module.exports = {
    url: function () {
        return this.api.launch_url;
    },
    elements: {
        skipStep: "//*[contains(text(), 'SKIP\ THIS\ STEP')]",
        mainButton: "//*[contains(text(), 'ENTER\ THE\ MAIN\ NAEP\ DATA\ EXPLORER')]",
        subSelect: "//*[contains(text(), 'Select\ a\ Subject')]",
        graSelect: "//*[contains(text(), 'Select\ a\ Grade')]",
        jurSelect: "//*[contains(text(), 'Select\ a\ Juristiction')]"
    }
}