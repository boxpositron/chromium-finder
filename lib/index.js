'use strict';
const ERROR_PLATFORM_NOT_SUPPORT = new Error('platform not support');
const ERROR_NO_INSTALLATIONS_FOUND = new Error('no chromium installations found');

/**
 * find a executable chromium for all support system
 * @returns {string} executable chromium full path
 * @throws
 * if no executable chromium find, ERROR_NO_INSTALLATIONS_FOUND will be throw
 * if platform is not one if ['win32','darwin','linux'], ERROR_PLATFORM_NOT_SUPPORT will be throw
 */
function findChromium() {
  const { platform } = process;
  let installations = [];
  switch (platform) {
    case 'win32':
      installations = require('./win32')();
      break;
    case 'darwin':
      installations = require('./darwin')();
      break;
    case 'linux':
      installations = require('./linux')();
      break;
    default:
      throw ERROR_PLATFORM_NOT_SUPPORT;
  }
  if (installations.length) {
    return installations[0];
  } else {
    throw ERROR_NO_INSTALLATIONS_FOUND;
  }
}

module.exports = findChromium;
