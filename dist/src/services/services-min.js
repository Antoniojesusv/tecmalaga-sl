function Services(){ValidateInterface.apply(this),this._isValidParameterString=this.isValidParameterString,this._isValidParameterNumber=this.isValidParameterNumber}Services.prototype=Object.create(ValidateInterface.prototype,{isValidParameterString:{value:e=>!e||"string"!=typeof e,enumerable:!1,writeable:!1,configurable:!1},isValidParameterNumber:{value:e=>!e||"number"!=typeof e,enumerable:!1,writeable:!1,configurable:!1}}),Object.defineProperties(Services,{_isValidParameterString:{get:function(){if(!this.can("isValidParameterString"))throw new Error("this class have not the method implemented isValidParameterString");return this._isValidParameterString},enumerable:!1,configurable:!1},_isValidParameterNumber:{get:function(){if(!this.can("isValidParameterNumber"))throw new Error("this class have not the method implemented isValidParameterNumber");return this._isValidParameterNumber},enumerable:!1,configurable:!1}});