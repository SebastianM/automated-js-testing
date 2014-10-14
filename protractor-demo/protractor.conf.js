exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  seleniumServerJar: 'selenium-server-standalone-2.43.1.jar',

  baseUrl: 'http://localhost:9999',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['example-spec.js'],

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};