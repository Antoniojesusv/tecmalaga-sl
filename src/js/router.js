function Router(features = {}) {

    const {
        routes,
        rootElement = 1,
        body = 'body',
        script = 'script'
    } = features;

    if (validationSpa.isValidFeaturesRouter(features)) throw new appException({name: 'RouterFeaturesException', msg: 'the characteristics are not valid or are not of the string type'});

    this.routes = routes;
    this.guy = this.loadTags(features);
    this.init();
}

Router.prototype = {

    init: function () {
        const r = this.routes;
        (function (scope, r) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },

    loadTags: (features) => ({
        rootElement: document.getElementById(features.rootElement),
        body: document.getElementById(features.body),
        script: document.getElementById(features.script)
    }),

    hasChanged: function (scope, r) {
        if (!window.location.hash) this.showPageDefault(scope, r);
        r.forEach(route => {
            if (route.isActiveRoute(window.location.hash.substr(1))) scope.goToRoute(route.html);
        });
    },

    showPageDefault: function (scope, r) {
        const defaultRoute = r.filter(route => route.defaultPage);
        scope.goToRoute(defaultRoute[0].html);
    },

    goToRoute: function (htmlName) {

        (function (scope) {
            const ascertain = () => htmlName !== "touchToStart.html";
            const HtmlAndJs = scope.contentToDownload(htmlName).map(element => scope.dynamicCalls({ scope,htmlName, element }));
            Promise.all(HtmlAndJs)
                    .then(([html, js]) => {
                        scope.putHtml(html);
                        scope.putScript(js);
            });

        })(this);
    },

    contentToDownload: function (htmlName) {
        const hash = htmlName.split('.');
        const urlHtml = `views/html/${hash[0]}/${htmlName}`;
        const urlControllers = `views/html/${hash[0]}/${hash[0]}.controller.js`;
        return [urlHtml, urlControllers];
    },

    dynamicCalls: function (parameters) {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                    return;
                }
            };

            xhttp.open('GET', parameters.element, true);
            xhttp.send();
        });
    },


    //preguntar a carlos por que el this.guy es a null 
    putScript: function (response) {
        this.guy.script.innerHTML = response;
    },

    putHtml: function (response) {
        this.guy.rootElement.innerHTML = response;
    }
};