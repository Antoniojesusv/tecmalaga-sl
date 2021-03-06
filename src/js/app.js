'use strict';

//Closure o Claúsura - Clojure
(function () {
    function init() {
        //si no incluimos el objeto en una variable el this hace referencia a windows (Preguntar a carlos)
        const router = new Router({
            routes: [
                new Route({
                    hash: 'main',
                    html: 'main.html',
                    defaultPage: true
                }),
                new Route({
                    hash: 'login',
                    html: 'login.html'
                }),
                /*new Route({
                    hash: 'methodOfPayment',
                    html: 'methodOfPayment.html'
                }),
                new Route({
                    hash: 'chooseOfMenu',
                    html: 'chooseOfMenu.html'
                }),
                new Route({
                    hash: 'orderCorrect',
                    html: 'orderCorrect.html'
                })*/
            ],
            rootElement: 'app',
            body: 'body',
            script: 'script'
        });
    }
    init();
}());