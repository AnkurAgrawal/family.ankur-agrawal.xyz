/*
 Multiverse by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

 Added EXIF data and enhanced for Jekyll by Ram Patra
 */

(function ($)
{

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function ()
    {

        var $window = $(window),
            $body = $('body');

        // Hack: Enable IE workarounds.
        if (skel.vars.IEVersion < 12)
            $body.addClass('ie');

        // Touch?
        if (skel.vars.mobile)
            $body.addClass('touch');

        // Transitions supported?
        if (skel.canUse('transition'))
        {

            // Add (and later, on load, remove) "loading" class.
            $body.addClass('loading');

            $window.on('load', function ()
            {
                window.setTimeout(function ()
                {
                    $body.removeClass('loading');
                }, 100);
            });

            // Prevent transitions/animations on resize.
            var resizeTimeout;

            $window.on('resize', function ()
            {

                window.clearTimeout(resizeTimeout);

                $body.addClass('resizing');

                resizeTimeout = window.setTimeout(function ()
                {
                    $body.removeClass('resizing');
                }, 100);

            });

        }

        // Scroll back to top.
        $window.scrollTop(0);

    });

})(jQuery);