function Services() {
  ValidateInterface.apply(this);
  this._isValidParameterString = this.isValidParameterString;
  this._isValidParameterNumber = this.isValidParameterNumber;
}

Services.prototype = Object.create(ValidateInterface.prototype, {
  isValidParameterString: {
    value: value => !value || typeof value !== 'string',
    enumerable: false,
    writeable: false,
    configurable: false,
  },

  isValidParameterNumber: {
    value: value => !value || typeof value !== 'number',
    enumerable: false,
    writeable: false,
    configurable: false,
  },
});

Object.defineProperties(Services, {
  _isValidParameterString: {
    get: function () {
      if (!this.can('isValidParameterString')) throw new Error('this class have not the method implemented isValidParameterString');
      return this._isValidParameterString;
    },
    enumerable: false,
    configurable: false,
  },

  _isValidParameterNumber: {
    get: function () {
      if (!this.can('isValidParameterNumber')) throw new Error('this class have not the method implemented isValidParameterNumber');
      return this._isValidParameterNumber;
    },
    enumerable: false,
    configurable: false,
  },
});
