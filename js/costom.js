$(function () {

    "use strict";


    /* ----------------------------------------------------------- */
    /*  PORTFOLIO GRID ITEM ANIMATION ON HOVER
    /* ----------------------------------------------------------- */


    /* ----------------------------------------------------------- */
    /*  PORTFOLIO GALLERY
    /* ----------------------------------------------------------- */

    if ($('.grid').length) {
        new CBPGridGallery(document.getElementById('grid-gallery'));
    }

    /* ----------------------------------------------------------- */
    /*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
    /* ----------------------------------------------------------- */

    $(".grid figure").on('click', function () {
        $("#navbar-collapse-toggle").addClass('hide-header');
    });

    /* ----------------------------------------------------------- */
    /*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
    /* ----------------------------------------------------------- */

    $(".nav-close").on('click', function () {
        $("#navbar-collapse-toggle").removeClass('hide-header');
    });
    $(".nav-prev").on('click', function () {
        if ($('.slideshow ul li:first-child').hasClass('current')) {
            $("#navbar-collapse-toggle").removeClass('hide-header');
        }
    });
    $(".nav-next").on('click', function () {
        if ($('.slideshow ul li:last-child').hasClass('current')) {
            $("#navbar-collapse-toggle").removeClass('hide-header');
        }
    });

    /* ----------------------------------------------------------- */
    /*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
    /* ----------------------------------------------------------- */

    var item = $(".grid li figure");
    var elementsLength = item.length;
    for (var i = 0; i < elementsLength; i++) {
        $(item[i]).hoverdir();
    }



});