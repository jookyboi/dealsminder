var DealsMinder = DealsMinder || {};

(function() {
    this.UI = function() {
        var toolbar = '<div class="dealsminder">' +
                '<div class="content">' +
                    '<div class="logo"></div>' +
                    '<div class="separator_0"></div>' +
                    '<div class="status activate">' +
                        '<span>99 un-synced vouchers</span>' +
                    '</div>' +
                    '<div class="calendar activate">' +
                        '<span>Sync to Personal</span>' +
                    '</div>' +
                    '<div class="settings activate">' +
                        '<span>Settings</span>' +
                    '</div>' +
                    '<div class="close"></div>' +
                '</div>' +
            '</div>';

        return {
            toolbar: toolbar
        };
    };
}).apply(DealsMinder);