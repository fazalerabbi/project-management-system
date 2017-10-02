declare var jQuery: any;

export class JQuerySidebar {

  static init() {
    jQuery('#sidebar-menu li').on('click', function() {
      const link = jQuery('a', this).attr('href');
      if(link) {
        JQuerySidebar.selectActiveSideMenu();
      } else {
        if (jQuery(this).is('.active')) {
          jQuery('div#sidebar-menu li').removeClass('active').removeClass('current-page');
          JQuerySidebar.selectActiveSideMenu();
        } else {
          jQuery('div#sidebar-menu li').removeClass('active');
          jQuery('div#sidebar-menu li ul').slideUp();
          jQuery(this).addClass('active');
          jQuery('ul', this).slideDown();
        }
      }
    });
    jQuery('#menu_toggle').click(function () {
      if (jQuery('body').hasClass('nav-md')) {
        jQuery('body').removeClass('nav-md').addClass('nav-sm');
        jQuery('.left_col').removeClass('scroll-view').removeAttr('style');
        jQuery('.sidebar-footer').hide();

        if (jQuery('#sidebar-menu li').hasClass('active')) {
          jQuery('#sidebar-menu li.active').addClass('active-sm').removeClass('active');
        }
      } else {
        jQuery('body').removeClass('nav-sm').addClass('nav-md');
        jQuery('.sidebar-footer').show();

        if (jQuery('#sidebar-menu li').hasClass('active-sm')) {
          jQuery('#sidebar-menu li.active-sm').addClass('active').removeClass('active-sm');
        }
      }
    });

  }

  static selectActiveSideMenu() {
    const url = window.location;
    jQuery('#sidebar-menu a[href="' + url + '"]').parent('li').addClass('current-page');
    jQuery('div#sidebar-menu a').filter(function () {
      return this.href === url;
    }).parent('li').addClass('current-page').parent('ul').slideDown().parent().addClass('active');
  }
}
