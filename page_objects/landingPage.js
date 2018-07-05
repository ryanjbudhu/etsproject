

var pageCommands = {
    create: function(content) {
        return this.navigate();
    }
}

module.exports = {
    url : function() {
        return this.api.launchUrl;
    },
    commands: [ pageCommands ],
    sections: {
        body: {
            selector: "body",
            elements: {
                skipToMainContent: {
                    selector: "#skip-to-main-content"
                }
            }
        },
        lpMainContent: {
            selector: "lp-content",
            elements: {
                searchInput: {
                    selector: "#search-input"
                },
                labels: {
                    selector: ".dropdown-sections  span.k-input"
                }

            }
        }
    }

}