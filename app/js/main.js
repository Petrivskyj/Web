jQuery(document).ready(function($){
	var tabItems = $('.cd-tabs-navigation a'),
		tabContentWrapper = $('.cd-tabs-content');

	tabItems.on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if( !selectedItem.hasClass('selected') ) {
			var selectedTab = selectedItem.data('content'),
				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
				slectedContentHeight = selectedContent.innerHeight();
			
			tabItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected').siblings('li').removeClass('selected');
			//animate tabContentWrapper height when content changes 
			tabContentWrapper.animate({
				'height': slectedContentHeight
			}, 200);
		}
	});

	//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
	checkScrolling($('.cd-tabs nav'));
	$(window).on('resize', function(){
		checkScrolling($('.cd-tabs nav'));
		tabContentWrapper.css('height', 'auto');
	});
	$('.cd-tabs nav').on('scroll', function(){ 
		checkScrolling($(this));
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});

jQuery(document).ready(function() {
	jQuery('#vmap').vectorMap({
		map: 'world_en',
		backgroundColor: '#333333',
		color: '#ffffff',
		hoverOpacity: 0.7,
		selectedColor: '#666666',
		enableZoom: true,
		showTooltip: true,
		values: sample_data,
		scaleColors: ['#C8EEFF', '#006491'],
		normalizeFunction: 'polynomial'
	});
});

window.onload=function(){
    Createcharts();
    $('#daily').click(function(){
        SetPeriod('daily');
    })
    $('#monthly').click(function(){
        SetPeriod('monthly');
    })
    $('#yearly').click(function(){
        SetPeriod('yearly');
    })
	$.get(
         `js/Data.json`,
        function (data) {
            $('#insert1').text(data.insert1);
			$('#insert2').text(data.insert2);
			$('#insert3').text(data.insert3);
        }
    );
}

$(document).ready(function(c) {
	$('.alert-close').on('click', function(c){
		$('.calender-left').fadeOut('slow', function(c){
	  		$('.calender-left').remove();
		});
	});	  
});
$(document).ready(function(c) {
	$('.alert-close1').on('click', function(c){
		$('.calender-right').fadeOut('slow', function(c){
	  		$('.calender-right').remove();
		});
	});	  
});
$(document).ready(function(c) {
	$('.alert-close2').on('click', function(c){
		$('.site-report').fadeOut('slow', function(c){
	  		$('.site-report').remove();
		});
	});	  
});
$(document).ready(function(c) {
	$('.alert-close3').on('click', function(c){
		$('.world-map').fadeOut('slow', function(c){
	  		$('.world-map').remove();
		});
	});	  
});
$(document).ready(function(c) {
	$('.alert-close4').on('click', function(c){
		$('#chart2').fadeOut('slow', function(c){
	  		$('#chart2').remove();
		});
	});	  
});
$(document).ready(function(c) {
	$('.alert-close5').on('click', function(c){
		$('#chart3').fadeOut('slow', function(c){
	  		$('#chart3').remove();
		});
	});	  
});
$(document).ready(function(c) {
	$('.alert-close6').on('click', function(c){
		$('.stats').fadeOut('slow', function(c){
	  		$('.stats').remove();
		});
	});	  
});