import jQuery from 'jquery';

const SideBar = () => {
        let CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
            $BODY = jQuery('body'),
            $MENU_TOGGLE = jQuery('#menu_toggle'),
            $SIDEBAR_MENU = jQuery('#sidebar-menu'),
            $SIDEBAR_FOOTER = jQuery('.sidebar-footer'),
            $LEFT_COL = jQuery('.left_col'),
            $RIGHT_COL = jQuery('.right_col'),
            $NAV_MENU = jQuery('.nav_menu'),
            $FOOTER = jQuery('footer');

    (function($,sr){
        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        let debounce = function (func, threshold, execAsap) {
            let timeout;

            return function debounced () {
                let obj = this, args = arguments;
                function delayed () {
                    if (!execAsap)
                        func.apply(obj, args);
                    timeout = null;
                }

                if (timeout)
                    clearTimeout(timeout);
                else if (execAsap)
                    func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        };

        // smartresize
        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');
    // Sidebar
// TODO: This is some kind of easy fix, maybe we can improve this
        let setContentHeight = function () {
            // reset height
            $RIGHT_COL.css('min-height', jQuery(window).height());

            let bodyHeight = $BODY.outerHeight(),
                footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
                leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

            // normalize content
            contentHeight -= $NAV_MENU.height() + footerHeight;

            $RIGHT_COL.css('min-height', contentHeight);
        };

        $SIDEBAR_MENU.find('a').on('click', function(ev) {
            console.log('clicked - sidebar_menu');
            let $li = jQuery(this).parent();

            if ($li.is('.active')) {
                $li.removeClass('active active-sm');
                jQuery('ul:first', $li).slideUp(function() {
                    setContentHeight();
                });
            } else {
                // prevent closing menu if we are on child menu
                if (!$li.parent().is('.child_menu')) {
                    $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                    $SIDEBAR_MENU.find('li ul').slideUp();
                }else
                {
                    if ( $BODY.is( ".nav-sm" ) )
                    {
                        $SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
                        $SIDEBAR_MENU.find( "li ul" ).slideUp();
                    }
                }
                $li.addClass('active');

                jQuery('ul:first', $li).slideDown(function() {
                    setContentHeight();
                });
            }
        });

// toggle small or large menu
        $MENU_TOGGLE.on('click', function() {
            console.log('clicked - menu toggle');

            if ($BODY.hasClass('nav-md')) {
                $SIDEBAR_MENU.find('li.active ul').hide();
                $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
            } else {
                $SIDEBAR_MENU.find('li.active-sm ul').show();
                $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
            }

            $BODY.toggleClass('nav-md nav-sm');

            setContentHeight();

            jQuery('.dataTable').each ( function () { jQuery(this).dataTable().fnDraw(); });
        });

        // check active menu
        $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

        $SIDEBAR_MENU.find('a').filter(function () {
            return this.href === CURRENT_URL;
        }).parent('li').addClass('current-page').parents('ul').slideDown(function() {
            setContentHeight();
        }).parent().addClass('active');

        // recompute content when resizing
        jQuery(window).smartresize(function(){
            setContentHeight();
        });

        setContentHeight();

        // fixed sidebar
        if (jQuery.fn.mCustomScrollbar) {
            jQuery('.menu_fixed').mCustomScrollbar({
                autoHideScrollbar: true,
                theme: 'minimal',
                mouseWheel:{ preventDefault: true }
            });
        }
// /Sidebar
}

export default SideBar;