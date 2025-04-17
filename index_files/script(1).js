/* gino-1744866061.262 */jQuery(".openFilter").click(function () {
    jQuery(".containerVideos .sf-filter").toggle("normal");
});



if(jQuery(".blogCatSlider").outerWidth() > 0){
    var body = jQuery("body").outerWidth();
    console.log(body);
    if(body < 475){
        jQuery(window).scroll(function (event) {
            var scroll = jQuery(window).scrollTop();

            if(scroll > 350){
                if(jQuery(".blogCatSlider").hasClass("fixed")){

                } else {
                    jQuery(".blogCatSlider").addClass("fixed");
                    jQuery(".filterTab").hide();
                }
            } else {
                jQuery(".blogCatSlider").removeClass("fixed");
                jQuery(".filterTab").show();

            }
        });
    } else {
        jQuery(window).scroll(function (event) {
        var scroll = jQuery(window).scrollTop();

        if(scroll > 423){
            if(jQuery(".blogCatSlider").hasClass("fixed")){

            } else {
                jQuery(".blogCatSlider").addClass("fixed");
            }
        } else {
            jQuery(".blogCatSlider").removeClass("fixed");

        }
    });

    }

}
if(jQuery(".containerVideos").outerWidth() > 450){
    setInterval(function () {
        if(jQuery(".containerVideos ul.sf-nav li:first-child span").hasClass("sf-nav-left-arrow")){
            jQuery(".containerVideos ul.sf-nav li:first-child").css("left", "24%");
            jQuery(".containerVideos ul.sf-nav li:first-child").css("top", "15px");
        }
    }, 200);
}

jQuery(".videos-entrenamiento i.openSearch").click(function () {
    if(jQuery(".videos-entrenamiento i.openSearch").hasClass("close")){
        jQuery(".videos-entrenamiento i.openSearch").addClass("open");
        jQuery(".videos-entrenamiento i.openSearch").removeClass("close");
        jQuery(".videos-entrenamiento .blogCatSlider").css("margin-bottom", "60px");
    }else {
        jQuery(".videos-entrenamiento i.openSearch").addClass("close");
        jQuery(".videos-entrenamiento i.openSearch").removeClass("open");
        jQuery(".videos-entrenamiento .blogCatSlider").css("margin-bottom", "30px");
    }
});

if(jQuery(".containerVideos").outerWidth() < 450){
    setInterval(function () {
        if(jQuery(".containerVideos ul.sf-nav li:first-child span").hasClass("sf-nav-left-arrow")){
            jQuery(".containerVideos ul.sf-nav li:first-child").css("left", "0");
            jQuery(".containerVideos ul.sf-nav li:first-child").css("width", "90px");
            jQuery(".containerVideos ul.sf-nav li:last-child").css("width", "90px");
        }
    }, 200);
}

if(jQuery(".containerVideos").outerWidth() < 1050){
    setInterval(function () {
        if(jQuery(".containerVideos ul.sf-nav li:first-child span").hasClass("sf-nav-left-arrow")){
            jQuery(".containerVideos ul.sf-nav li:first-child").css("left", "19%");
            jQuery(".containerVideos ul.sf-nav li:last-child").css("right", "19%");
        }
    }, 200);
}


