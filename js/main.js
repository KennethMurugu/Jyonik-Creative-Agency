//Opens the page modal with team details when team member is clicked
function teamModal(teamMember){
	//Unhide the links to social media and image
	$(".modal_body_team_social").removeClass('hide');
	$("#modal_body_img").removeClass('hide');
	$(".modal_body_team_text").removeClass('hide');
	//Show modal
	$('#pageModal').modal();
	//Get team member info
	var name = teamMember.parent().find('.row_team_content_name').html();
	var role = teamMember.parent().find('.row_team_content_role').html();
	var img = teamMember.parent().find('.row_team_content_img_container img').attr("src");
	var quote = teamMember.parent().find('.row_team_content_quote').html();
	// console.log("MEMBER NAME: "+ name+"\n IMAGE: "+img);
	//Set team member info on modal elements
	$("#pageModal").find('.modal-title').html(""+name+", "+role);
	$("#pageModal").find('#modal_body_img').attr('src', img);
	$("#pageModal").find('.modal_body_team_text').html(""+quote)

}
function closeModal () {
	$("#pageModal").modal("hide");
}
//Opens modal with info from "read more" card
function readMoreModal (card) {
	//Hide the links to social media, image, team quote
	$(".modal_body_team_social").addClass('hide');
	$("#pageModal").find('#modal_body_img').addClass('hide');
	$(".modal_body_team_text").addClass('hide');
	//Show modal
	$("#pageModal").modal();
	//Get card info
	var title = card.parent().find('.row_our_services_card_title').html();

	//Set card info on modal elements
	$("#pageModal").find('.modal-title').html(""+title);
	$("#pageModal").find('#modal_body_readmore_text').html("lorem");
}
//Checking if element is visible on screen after scrolling
function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var interValID;
var counterStarted = false;
var coffee = 1, lines = 1, happy = 1, awards = 1;
var maxCoffee = 1000, maxLines = 346868, maxHappy = 150, maxAwards = 27;
function increaseCount () {
	// console.log("[increaseCount] increasing...");
	coffee +=1, lines +=2231, happy +=5, awards +=1;
	if(coffee < maxCoffee) $('#progress_counter_coffee').text(""+coffee);
	if(happy < maxHappy) $('#progress_counter_happy').text(""+happy);
	if(awards < maxAwards) $('#progress_counter_awards').text(""+awards);
	if(lines < maxLines) $('#progress_counter_lines').text(""+lines);
	else{
		/*Max lines should be the last to finish, so once it's done, you can safely clear the interval*/
		stopInterval(interValID)
	}
}
var sliderCounter = 1;
var testSliderArray = ["team1.jpg", "team2.jpg", "team3.jpg"];
var wordpressSliderArray = ["wordpress_screen1.jpg", "wordpress_screen2.jpg", "wordpress_screen3.jpg"]
var webDesignSliderArray = ["webdesign_screen1.png", "webdesign_screen2.png", "webdesign_screen3.jpg"]
var webDevSliderArray = ["webdev_screen1.png", "webdev_screen2.png", "webdev_screen3.png"]
var graphicSliderArray = ["graphic_screen1.png", "graphic_screen2.png", "graphic_screen3.png"]
var seoSliderArray = ["seo_screen1.png", "seo_screen2.png", "seo_screen3.png"]
var sliderArray = testSliderArray;
var whichSlider;
var sliderIndex = 0;
function ourWorkContentSliderHide (event) {
	$("#row_our_work_list a.active").removeClass('active');
	$("#row_our_work_link_all").addClass('active');
	event.preventDefault();
	$('#row_our_work_content_slider').fadeOut("100");
	setTimeout(function () {
		$('#row_our_work_content_container').fadeIn("slow");
	}, 450);
	
}
function ourWorkContentSliderShow (event, elem) {
	whichSlider = elem;
	if(whichSlider.attr('class') == "row_our_work_content_wordpress") sliderArray = wordpressSliderArray;
	else if(whichSlider.attr('class') == "row_our_work_content_web_design") sliderArray = webDesignSliderArray;
	else if(whichSlider.attr('class') == "row_our_work_content_graphic") sliderArray = graphicSliderArray;
	else if(whichSlider.attr('class') == "row_our_work_content_seo") sliderArray = seoSliderArray;
	else if(whichSlider.attr('class') == "row_our_work_content_web_dev") sliderArray = webDevSliderArray;
	event.preventDefault();
	// alert(elem.attr('id'));
	$('#row_our_work_content_container').fadeOut('100');
	setTimeout(function () {
		$('#row_our_work_content_slider').fadeIn('slow');
	}, 450);
	
	$("#row_our_work_content_slider_img_fg").attr('src', "img/slider_our_work/"+sliderArray[sliderIndex]);
}

function ourWorkContentSliderLinkShow (event, elem) {
	$("#row_our_work_list a.active").removeClass('active');
	elem.addClass('active');
	event.preventDefault();
	// alert("link id: "+ elem.attr('id'));
	//Which link is it?
	if(elem.attr('id') == "row_our_work_link_web_dev") ourWorkContentSliderShow(event, $(".row_our_work_content_web_dev"));
	else if(elem.attr('id') == "row_our_work_link_web_design") ourWorkContentSliderShow(event, $(".row_our_work_content_web_design"));
	else if(elem.attr('id') == "row_our_work_link_seo") ourWorkContentSliderShow(event, $(".row_our_work_content_seo"));
	else if(elem.attr('id') == "row_our_work_link_graphic") ourWorkContentSliderShow(event, $(".row_our_work_content_graphic"));
	else if(elem.attr('id') == "row_our_work_link_wordpress") ourWorkContentSliderShow(event, $(".row_our_work_content_wordpress"));
}

function nextImage () {
	// console.log("NEXT IMAGE")

	//Need to determine which sliderArray to use
	// alert("whichSlider: "+whichSlider.attr('id'));

	sliderIndex ++;
	if(sliderIndex >= sliderArray.length) sliderIndex = 0;
	$("#row_our_work_content_slider_img_fg").attr('src', "img/slider_our_work/"+sliderArray[sliderIndex]);
	
}

function prevImage () {
	//Need to determine which sliderArray to use

	sliderIndex --;
	if(sliderIndex < 0) sliderIndex = sliderArray.length - 1;
	$("#row_our_work_content_slider_img_fg").attr('src', "img/slider_our_work/"+sliderArray[sliderIndex]);
}

function resetSlider(){
	$(".slider_right").removeClass('slider_right');
	$(".slider_center").removeClass('slider_center');
	$(".slider_left").removeClass('slider_left');
}
//Helper function to get a random number
function getRandomInteger(min, max) {
	return min + Math.floor(Math.random() * (max - min) );
}
//
function stopInterval(id){
	clearInterval(id);
}

$(window).load(function () {
	$('.service_row a').each(function () {
		$(this).click(function(event) {
			event.preventDefault();
			console.log("READ MORE");
		});
	});
	//Displaying Our WOrk slider
	$('.row_our_work_content img').each(function () {
		$(this).click(function(event) {
			ourWorkContentSliderShow(event, $(this));
		});
	});
});

//Handler for window scroll events
$(window).scroll(function(event) {
	if ($(window).scrollTop() > $(".nav_wrapper").height()) {
		$(".nav_wrapper").css({
			"padding-bottom": "10px",
			"background-color": "#484848"
		});
	}
	else{
		$(".nav_wrapper").css({
			"padding-bottom": "20px",
			"background-color": "#48484899"
		});
	}
	$('.progress-bar').each(function () {
		var inView = false;
		//For each progress bar, check if is visible
		if(isScrolledIntoView($(this)) && $(this).css("width") == "10px"){
			var val = getRandomInteger(90, 99);	
			var elemWidth = ""+val+"%";				
			$(this).css({
				width: elemWidth});
			$(this).find('span').html(""+val);
			inView = true;
			console.log("Progress Bar Visible!");
		};
	});


	if(isScrolledIntoView($('#row_progress_container')) && counterStarted == false){
		console.log("Counter Container Visible")
		counterStarted = true;
		interValID = setInterval(function () {
			increaseCount();
		}, 10);
	}
});