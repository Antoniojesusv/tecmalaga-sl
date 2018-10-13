function LoginController(view) {
    this._view = view;
    this._guy = this.loadDomElements();
    this._guy.inputEmail.addEventListener('keyup', function(e){
        console.log(e.target.value);
    })
};

LoginController.prototype = Object.create({}, {
    loadDomElements: {
        value: function() {
            return {
                inputEmail: this._view.getElementById('inputEmail'),
                inputPassword: this._view.getElementById('inputPassword'),
            }
        },
        enumerable: false,
        writable: false,
        configurable: false,
    }
});

(function(view) {
    const loginController = new LoginController(view);
})(window.document);
