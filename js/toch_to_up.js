
        jQuery(document).ready(function(){            
             jQuery(window).scroll(function () {
                    if (jQuery(this).scrollTop() > 50) {
                        jQuery('#back-to-top').fadeIn();
                    } else {
                        jQuery('#back-to-top').fadeOut();
                    }
                });

                jQuery('#back-to-top').click(function () {
                    jQuery('#back-to-top').tooltip('hide');
                    jQuery('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
                // scroll body to 0px on click                
                if( jQuery('#back-to-top').is(':visible') ) {
                    jQuery('#back-to-top').tooltip('show');
                }                   
        });