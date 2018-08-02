require('env2')('.env'); // optionally store youre Evironment Variables in .env
const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const SCREENSHOT_PATH = "./screenshots/";

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "src_folders": [
    "test/e2e" // Where you are storing your Nightwatch e2e tests
  ],
  page_objects_path: 'test/pages',
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": {
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "http://poseidon.research.ets.org/ndecoretest",
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 15000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "--window-size=1200,1160",
            // "--headless"
          ]
        }
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true, // turn off to test progressive enhancement,
        "chromeOptions": {
          "args": [
            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
            "--window-size=1200,1160",
            // "--headless"
          ]
        }
      }
    }
  }
}

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name); // this is the test filename so always exists.
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

// setup Jenkins environment
// you can set this locally by using an .env file entry
if (process.env.JENKINS_HOME) {
  // add headless argument

  module.exports.test_settings.default.desiredCapabilities.chromeOptions.args.push("headless");

  module.exports.test_settings.default.launch_url = "http://poseidon.research.ets.org/ndecore";
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
