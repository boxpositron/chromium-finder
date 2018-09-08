'use strict';
const fs = require('fs');
const findChromium = require('../lib/index');

describe('chromium-finder', function () {

  it('#findChromium()', function () {
    try {
      const chromiumPath = findChromium();
      fs.accessSync(chromiumPath, fs.constants.X_OK);
      console.log(chromiumPath);
    } catch (error) {
      console.error(error)      
    }
  });

});
