const validationSpa = (function () {
    const isValidFeaturesRouter = features => !(features.routes && features.routes instanceof Array) && !(typeof features.rootElement === 'string' || typeof features.body === 'string', typeof features.script === 'string');
    const isValidFeaturesRoute = features => !(features.hash || features.html) && !(typeof features.hash === 'string' || typeof features.html === 'string');
    return {
        isValidFeaturesRouter,
        isValidFeaturesRoute
    };
})();