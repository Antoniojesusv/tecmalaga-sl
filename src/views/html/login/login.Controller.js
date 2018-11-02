function LoginController(parameters = {}) {
  const { view, appConstants, loginService } = parameters;

  this._view = view;
  this._loginService = loginService;
  this._appConstants = appConstants;
  this._gui = this.loadDomElements();
  this._serviceCommand = this.loadServicesCommand(this);
  this._gui.inputEmail.addEventListener('input', this.validateEmail.bind(this));
  this._gui.inputPassword.addEventListener(
    'input',
    this.validatePassword.bind(this),
  );
}

LoginController.prototype = Object.create(
  {},
  {
    loadServicesCommand: {
      value: context => ({
        inputEmail: context._loginService.isValidEmail,
        inputPassword: context._loginService.isValidPassword,
        execute: function(name, parameters) {
          return (
            this[name] && this[name].call(context._loginService, ...parameters)
          );
        },
      }),
      enumerable: false,
      writable: false,
      configurable: false,
    },

    validateEmail: {
      value: function(e) {
        e.preventDefault();
        const tagIcon = this.getTagIcon(e);

        const { value, id } = e.target;

        try {
          if (!this._serviceCommand.execute(id, [value])) {
            this.changeClassToFalse(tagIcon);
            return;
          }

          this.changeClassToTrue(tagIcon);
        } catch (error) {
          this.changeClassToFalse(tagIcon);
          console.log(error);
        }
      },
      enumerable: false,
      writable: false,
      configurable: false,
    },

    validatePassword: {
      value: function(e) {
        e.preventDefault();
        const tagIcon = this.getTagIcon(e);

        const { value, id } = e.target;

        try {
          if (!this._serviceCommand.execute(id, [value])) {
            this.changeClassToFalse(tagIcon);
            return;
          }

          this.changeClassToTrue(tagIcon);
        } catch (error) {
          this.changeClassToFalse(tagIcon);
          console.log(error);
        }
      },
      enumerable: false,
      writable: false,
      configurable: false,
    },

    getTagIcon: {
      value: e => e.target.nextElementSibling.childNodes[0],
      enumerable: false,
      writable: false,
      configurable: false,
    },

    loadDomElements: {
      value: function() {
        const {
          INPUTEMAIL,
          INPUTPASSWORD,
        } = this._appConstants.CONSTANTSLOGINCONTROLLERS;

        return {
          inputEmail: this._view.getElementById(INPUTEMAIL),
          inputPassword: this._view.getElementById(INPUTPASSWORD),
        };
      },
      enumerable: false,
      writable: false,
      configurable: false,
    },

    changeClassToFalse: {
      value: function(tag) {
        const label = tag;
        label.classList.remove('colorGreen');
        label.classList.add('colorRed');
        label.innerHTML = 'cancel';
      },
      enumerable: false,
      writable: false,
      configurable: false,
    },

    changeClassToTrue: {
      value: function(tag) {
        const label = tag;
        label.classList.remove('colorRed');
        label.classList.add('colorGreen');
        label.innerHTML = 'check_circle';
      },
      enumerable: false,
      writable: false,
      configurable: false,
    },
  },
);

const loginController = new LoginController({
  view,
  appConstants,
  loginService,
});
