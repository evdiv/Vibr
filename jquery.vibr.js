/*!
 typedText 1.0.0 - 2014-06-04
 jQuery vibration plugin
 (c) 2014, http://fdata.org
 license: http://www.opensource.org/licenses/mit-license.php
 */

(function($, windiow, document, undifined) {
    var Vibr = {
        init: function(options, elem) {
            this.elem = elem;
            this.$elem = $(elem);

            this.options = $.extend({}, $.fn.imageVibr.defaults, options);
            this.wrapper();
            this.timeframe();
            this.mouseover();
        },

        wrapper: function() {
            var $elem = this.$elem,
                width = $elem.width() + (this.options.h_spread *2);
                height = $elem.height() + (this.options.h_spread *2);

            $elem.wrap('<div style=\'width: ' + width + 'px; height: ' + height + 'px;\'></div>');
        },

        timeframe: function() {
            var self = this,
                $elem = self.$elem;

            setInterval(function() {
                if($elem.hasClass('delay')) {
                    self.movement();
                    $elem.removeClass('delay');

                } else {
                    $elem.addClass('delay');
                    clearInterval(self.interval);
                }
            }, self.options.delay);
        },

        movement: function() {
            var self = this,
                $elem = self.$elem,
                speed = self.options.speed;

            var h_spread = self.options.h_spread,
                v_spread = self.options.v_spread;

            self.interval = setInterval(function() {
                h_spread = h_spread * (-1);
                v_spread = v_spread * (-1);

                $elem.animate({
                    'margin-top': v_spread + 'px',
                    'margin-left': h_spread + 'px'
                }, speed);

            }, speed);
        },

        mouseover: function() {
            var self = this,
                $elem = self.$elem;

            $elem.mouseover(function() {
                $elem.addClass('delay');
                clearInterval(self.interval);
            });
        }
    };

    $.fn.imageVibr = function(options) {
        return this.each(function() {
            var vibr = Object.create(Vibr);
            vibr.init(options, this);
        })
    };

    $.fn.imageVibr.defaults = {
        h_spread: 3,
        v_spread: 1,
        speed: 50,
        delay: 2000
    };

})(jQuery, window, document);