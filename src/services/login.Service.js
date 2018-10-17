const LoginService = function (appConstants) {
  Services.apply(this);
  this._appContants = appConstants;
};

LoginService.prototype = Object.create(Services.prototype, {
  isValidEmail: {
    value: function (value) {
      if (this.isValidParameterString(value)) throw new Error('The parameter is not of type string');

      const [part0, part1, part2, part3] = this._appContants.CONSTANTSLOGINSERVICES.ISVALIDEMAIL;
      const reg = new RegExp([part0, part1, part2, part3].join(''));

      return reg.exec(value);
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },

  isValidPassword: {
    value: function (value) {
      if (this.isValidParameterString(value)) throw new Error('The parameter is not of type string');

      const {
        ISVALIDPASSWORD,
      } = this._appContants.CONSTANTSLOGINSERVICES;

      return ISVALIDPASSWORD.test(value);
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
});

LoginService.prototype.constructor = LoginService;

Object.defineProperties(LoginService, {
  _appContants: {
    enumerable: false,
    writable: false,
    configurable: false,
  },
});
