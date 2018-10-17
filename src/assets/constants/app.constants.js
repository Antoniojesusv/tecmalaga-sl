'use srict';

const AppConstants = function () {
  this.CONSTANTSLOGINCONTROLLERS = this._LOADCONSTANTSLOGINCONTROLLERS();
};

AppConstants.prototype = Object.create({}, {
  _LOADCONSTANTSLOGINCONTROLLERS: {
    value: () => ({
      INPUTEMAIL: 'inputEmail',
      INPUTPASSWORD: 'inputPassword',
    }),
    enumerable: false,
    writable: false,
    configurable: false,
  },
});

const appConstants = new AppConstants();

Object.defineProperties(appConstants, {
  CONSTANTSLOGINCONTROLLERS: {
    enumerable: false,
    writable: false,
    configurable: false,
  },
});

Object.freeze(appConstants.CONSTANTSLOGINCONTROLLERS);
