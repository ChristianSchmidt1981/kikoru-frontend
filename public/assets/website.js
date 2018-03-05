$(function() {
    // Current Ajax request.
    var currentAjaxRequest = null;
    // Grabbing all search forms on the page, and adding a .search-results list to each.
    var searchForms = $('form[action="/search"]').css('position','relative').each(function() {
        // Grabbing text input.
        var input = $(this).find('input[name="q"]');
        // Adding a list for showing search results.
        var offSet = input.position().top + input.innerHeight();
        $('<ul class="search-results"></ul>').css( { 'position': 'absolute', 'left': '0px', 'top': offSet } ).appendTo($(this)).hide();
        // Listening to keyup and change on the text field within these search forms.
        input.attr('autocomplete', 'off').bind('keyup change', function() {
            // What's the search term?
            var term = $(this).val();
            // What's the search form?
            var form = $(this).closest('form');
            // What's the search URL?
            var searchURL = '/search?type=product&q=' + term;
            // What's the search results list?
            var resultsList = form.find('.search-results');
            // If that's a new term and it contains at least 3 characters.
            if (term.length > 3 && term != $(this).attr('data-old-term')) {
                // Saving old query.
                $(this).attr('data-old-term', term);
                // Killing any Ajax request that's currently being processed.
                if (currentAjaxRequest != null) currentAjaxRequest.abort();
                // Pulling results.
                currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
                    // Reset results.
                    resultsList.empty();
                    // If we have no results.
                    if(data.results_count == 0) {
                        // resultsList.html('<li><span class="title">No results.</span></li>');
                        // resultsList.fadeIn(200);
                        resultsList.hide();
                    } else {
                        // If we have results.
                        $.each(data.results, function(index, item) {
                            var link = $('<a></a>').attr('href', item.url);
                            link.append('<span class="thumbnail"><img src="' + item.thumbnail + '" /></span>');

                            link.append('<span class="title lang1">' + item.title + '</span>');
                            link.append('<span class="title lang2">' + item.title1 + '</span>');


                            link.wrap('<li></li>');
                            resultsList.append(link.parent());
                        });
                        // The Ajax request will return at the most 10 results.
                        // If there are more than 10, let's link to the search results page.
                        if(data.results_count > 10) {
                            resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>');
                        }
                        resultsList.fadeIn(200);
                    }
                });
            }
        });
    });
    // Clicking outside makes the results disappear.
    $('body').bind('click', function(){
        $('.search-results').hide();
    });
});








window.dropdowncart_type = "hover";







var heightHeader = jQuery('.site-header').outerHeight();
var heightTop = jQuery('.site-header').outerHeight();

jQuery(window).scroll(function () {

    var scrollTop = jQuery(this).scrollTop();
    var w = window.innerWidth;
    if (scrollTop > heightHeader) {
        if (w > 767) {
            jQuery('body').addClass('have-fixed');
            jQuery('.header-bottom').addClass('on');
            jQuery('.nav-search').removeClass('on');
            jQuery('.main-content').css('padding-top',heightHeader);
        }
    }
    else {
        jQuery('.header-bottom').removeClass('on');
        jQuery('.nav-search').addClass('on');
        jQuery('body').removeClass('have-fixed');
        jQuery('.main-content').css('padding-top',0);
    }

});




















var prodVideoId= $('iframe').data('video-id');
$(document).on('ready', function() {
    $('.variable-width').fitVids().slick({
        dots: true,
        slidesToScroll: 1,
        autoplay:true,
        fade: false,
        autoplaySpeed:5000,
        afterChange: function(slick, currentSlide){
            console.log(currentSlide);
        }
    });
})





















var productsToShow = 10;
var totalProducts = 17;
jQuery(" .1497262047204 .infinite-scrolling-homepage a").click(function() {
    if (jQuery('.1497262047204 .products-grid .grid-item:hidden').length > 0) {
        jQuery('.1497262047204 .products-grid .grid-item:hidden:lt('+productsToShow+')').each(function() {
            jQuery(this).show();

            jQuery(this).find('img').css('height','auto');

            if (window.product_image_resize) {
                jQuery(this).find('img').fakecrop({
                    fill: window.images_size.is_crop,
                    widthSelector: ".1497262047204 .products-grid .grid-item:first .product-image",
                    ratioWrapper: window.images_size
                });
            }
        });

        jQuery("window" ).scroll();
        if (jQuery('.1497262047204 .products-grid .grid-item:hidden').length == 0) {
            //no more products
            var noMoreText = "No more product";

            if (translator.isLang2())
                noMoreText = window.lang2.home_page.no_more_product;

            jQuery(".1497262047204 .infinite-scrolling-homepage a").text(noMoreText).addClass('disabled');
        }
    }
});











jQuery(document).ready(function() {
    jQuery(".widget-trending-product .products-grid").owlCarousel({
        navigation : true,
        items : 5,
        itemsTablet: [767,3],
        itemsTabletSmall: [721,2],
        itemsMobile: [360, 2]
    });



    jQuery(".slide_brand").owlCarousel({
        navigation : true,
        itemsTablet: [768,3],
        itemsTabletSmall: [650,2]
    });
});













// header top message
if (jQuery.cookie('headerTopMessage') == 'closed') {
    jQuery('.header-top').remove();
}

jQuery('.header-top a.close').bind('click',function(){
    jQuery('.header-top').remove();
    jQuery.cookie('headerTopMessage', 'closed', {expires:1, path:'/'});
});