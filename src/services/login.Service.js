const LoginService = function (appConstants) {
  Services.apply(this);
  this._appContants = appConstants;
};

LoginService.prototype = Object.create(Services.prototype, {
  isValidEmail: {
    value: function (value) {
      if (this.isValidParameterString(value)) throw new Error('mal');

      const [part0, part1, part2, part3] = this._appContants.CONSTANTSLOGINSERVICES.ISVALIDEMAIL;
      const reg = new RegExp([part0, part1, part2, part3].join(''));

      return reg.exec(value);
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
});

LoginService.prototype.constructor = LoginService;
const loginService = new LoginService(appConstants);

Object.defineProperties(loginService, {
  _appContants: {
    enumerable: false,
    writable: false,
    configurable: false,
  },
});
