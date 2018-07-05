
module.exports = (function(settings) {
    settings.test_workers = false;
    settings.launch_url = "http://poseidon.research.ets.org/ndecoretest/landing",
    settings.desiredCapabilities = {
      "browserName": "chrome",
      "chromeOptions": {
        "args": ["--headless"]
      },
      "binary": "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      "acceptSslCerts": true,
      "javascriptEnabled": true
    };
    return settings;
  })(require('./nightwatch.json'));

