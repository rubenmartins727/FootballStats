var h = 0;
$(document).ready(function(){
    MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		topMargin: 0,//mandatory property for decktop
		bottomMargin: 0,//mandatory property for decktop
		topMarginMobileDevices: 0,//mandatory property for mobile devices
		bottomMarginMobileDevices: 0,//mandatory property for mobile devices
        delaySubMenuHide: 300,
        bodyMinHeight: 1000,
		menuInit:function (classMenu, classSubMenu){
		},
		buttonOver:function (item){
		},
		buttonOut:function (item){
		},
		subMenuButtonOver:function (item){
		},
		subMenuButtonOut:function (item){
		},
		subMenuShow:function(subMenu){
        	subMenu.stop(true,true).animate({"opacity":"show"}, 400, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"opacity":"hide"}, 500, "easeOutCubic");
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
			$('.gavNavButtons').stop().animate({'left':'-5%'},500,'easeOutCubic')

            page.css({"left":$(window).width()}).stop(true).delay(300).animate({"left":0}, {duration: 1000, ease: "easeOutCubic", step:onResize});
		},
		prevPageAnimate:function (page){
            page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 700, "easeInCubic");
		},
		backToSplash:function (){
			$('.gavNavButtons').delay(500).stop().animate({'left':'50%'},500,'easeOutCubic')
		},
		pageLoadComplete:function (){
			if ($(".slider>div").length) {
			    $('.slider>div').cycle({
			        fx: 'scrollHorz',
			        speed: 700,
					timeout: 0,
			        next: '.next',
					prev: '.prev',             
					easing: 'easeInOutCubic',
					cleartypeNoBg: true ,
			        rev:0,
			        startingSlide: 0,
			        wrap: true,
			        pager: $('.pagination>li>a'),
			            pagerAnchorBuilder: function(ind){return $('.pagination>li:eq('+ind+') a');},
			            onPagerEvent: function(zeroBasedSlideIndex, slideElement){
			                $('.pagination>li').removeClass('active')
			                    .eq($(slideElement).index()).addClass('active')
			            }
				})
			};
        }
	});
})
$(window).load(function(){
    setTimeout(function (){ $(window).trigger('resize') },600)

    function gallInit(autoPlayState) {
	    $("#galleryHolder").gallerySplash({
	        autoPlayState: autoPlayState,
	        paginationDisplay:'false',
	        controlDisplay: 'true',
	        autoPlayTime: 12,
	        alignIMG: 'center'
	    }); 
	}
	gallInit('false');

	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});
});

$(window).resize(onResize);

function onResize(){
	var newH = 0;
	newH = h;
	if (h<windowH()) {newH = windowH();}
    $('.bg').css('height',newH);
	$('#leftPanel, .bg').css('height',windowH())
}