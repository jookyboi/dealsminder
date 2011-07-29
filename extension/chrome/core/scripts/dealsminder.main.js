var DealsMinder = DealsMinder || {};

(function() {
    this.Main = function() {
        var dealsUI = DealsMinder.UI();
        var $deals;

        function init() {
            $(dealsUI.toolbar).appendTo("body");

            $deals = $("div.dealsminder");
            showUI();
        }

        function showUI() {
            // we should wait till the UI has finished loading
            setTimeout(function() {
                $deals.fadeIn();
            }, 3000);
        }

        return {
            init: init
        }
    };
}).apply(DealsMinder);

$(function() {
    DealsMinder.Main().init();
});