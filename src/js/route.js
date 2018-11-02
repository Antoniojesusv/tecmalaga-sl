function Route(features = {}) {
  const {
    hash = 'touchTostart',
    html = 'touchToStart.html',
    defaultPage = undefined,
  } = features;

  if (validationSpa.isValidFeaturesRoute(features))
    throw new appException({
      name: 'RouteFeaturesException',
      msg: 'the characteristics are not valid or are not of the string type',
    });

  this.hash = hash;
  this.html = html;
  this.defaultPage = defaultPage;
}

Route.prototype = {
  isActiveRoute: function(hashedPath) {
    // Con la funcion flecha pierdo el this a window y no al router (Preguntar a carlos)
    return hashedPath.replace('#', '') === this.hash;
  },
};

Route.prototype.constructor = Route;
