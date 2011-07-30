var DealsMinder = DealsMinder || {};

(function() {
    this.Main = function() {
        var dealsUI = DealsMinder.UI();
        var $deals;

        function init() {
            $(dealsUI.toolbar).appendTo("body");

            $deals = $("div.dealsminder");
            showUI();
            wireActivate();
        }

        function showUI() {
            // we should wait till the UI has finished loading
            setTimeout(function() {
                $deals.show();
            }, 3000);
        }

        // events
        /////////////////////
        function wireActivate() {
            $deals.find("div.activate").unbind("click").click(function() {
                var $self = $(this);
                $self.toggleClass("active");

                $deals.find("div.activate.active").each(function() {
                    if ($(this).prop("class") !== $self.prop("class")) {
                        $(this).removeClass("active");
                    }
                });

                return false;
            });
        }

        return {
            init: init
        }
    };
}).apply(DealsMinder);

(function() {
    DealsMinder.Main().init();
})();
