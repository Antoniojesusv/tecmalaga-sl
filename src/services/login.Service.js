const LoginService = function () {

};

LoginService.prototype = Object.create({}, {
  isValidEmail: {
    value: function (value) {
      if (this.isValidParameterString(value)) throw new Error('mal');
      const reg = new RegExp([
        `^[a-zA-Z0-9.!#$%&'`,
        '*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
        '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?',
        '(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      ].join(''));

      return reg.exec(value);
    },
  },

  isValidParameterString: {
    value: value => !value || typeof value !== 'string',
  },
});

const loginService = new LoginService();
