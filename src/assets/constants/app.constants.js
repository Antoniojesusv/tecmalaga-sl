const AppConstants = function () {
  this.CONSTANTSLOGINCONTROLLERS = this._LOADCONSTANTSLOGINCONTROLLERS();
  this.CONSTANTSLOGINSERVICES = this._LOADCONSTANTSLOGINSERVICES();
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

  _LOADCONSTANTSLOGINSERVICES: {
    value: () => ({
      ISVALIDEMAIL: [
        `^[a-zA-Z0-9.!#$%&'`,
        '*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
        '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?',
        '(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      ],
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
Object.freeze(appConstants.CONSTANTSLOGINSERVICES);
