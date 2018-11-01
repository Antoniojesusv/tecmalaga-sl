function ValidateInterface() {

}

ValidateInterface.prototype = Object.create({}, {
  can: {
    value: function (methodName) {
      return ((typeof this[methodName]) === 'function');
    },
    enumerable: false,
    configurable: false,
    writable: false,
  },
});
