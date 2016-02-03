(function ($) {
    var methods = {
        init: function (options) {
            this.each(function () {
                var $this = jQuery(this);
                var settings = jQuery.extend({
                    width: '',
                    height: '',
                    left: '',
                    top: '',
                    distance: 300,
                    maxHor: 200,
                    maxVert: 100
                }, options);
                $this.data({
                    paralaxBlock: {
                        settings: settings
                    }
                });
                methods._init.call($this);
                methods._actions.call($this);
            });
        },
        _init: function () {
            var $this = this;
            var settings = $this.data().paralaxBlock.settings;
            $this.css({
                width: settings.width + 'px',
                height: settings.height + 'px',
                left: settings.left + 'px',
                top: settings.top + 'px',
                overflow: 'hidden',
                background: settings.background ? 'url(' + settings.background.src + ')' : ''
            });

        },
        actions: function () {
            this.each(function () {
                var $this = jQuery(this);
                methods._action.call($this);
            });
        },
        _actions: function () {
            var $this = this;
            var settings = $this.data().paralaxBlock.settings;
            jQuery(document).mousemove(function (e) {
                var mx = e.clientX;
                var my = e.clientY;
                var docWidth = jQuery(window).width();
                var docHeight = jQuery(window).height();

                var deltaLeft = mx < (docWidth / 2) ? parseInt((docWidth / 2) - mx) * -1 : parseInt(mx - (docWidth / 2));
                var deltaTop = my < (docHeight / 2) ? parseInt((docHeight / 2) - my) * -1 : parseInt(my - (docHeight / 2));

                $this.children('img').each(function (i) {
                    i++;
                    jQuery(this).css('margin-left', deltaLeft / settings.distance * (i * 30));
                    jQuery(this).css('margin-top', deltaTop / settings.distance * (i * 30));
                });

            });
        }
    };
    jQuery.fn.paralaxBlock = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
    };
})(jQuery);
