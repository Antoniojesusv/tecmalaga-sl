const LoginService = function (appConstants) {
  this._appContants = appConstants;
};

LoginService.prototype = Object.create({}, {
  isValidEmail: {
    value: function (value) {
      if (this.isValidParameterString(value)) throw new Error('mal');

      const [part0, part1, part2, part3] = this._appContants.CONSTANTSLOGINSERVICES.ISVALIDEMAIL;
      const reg = new RegExp([part0, part1, part2, part3].join(''));

      return reg.exec(value);
    },
  },

  isValidParameterString: {
    value: value => !value || typeof value !== 'string',
  },
});

const loginService = new LoginService(appConstants);

Object.defineProperties(loginService, {
  _appContants: {
    enumerable: false,
    writable: false,
    configurable: false,
  },
});
