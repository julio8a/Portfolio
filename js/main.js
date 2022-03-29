$(function() {

	$.when(
	  $.getJSON('js/data.json', function(data) {
		var servicesTemplate = $('#servicesTemplate').html();
		var servicesResults = Mustache.to_html(servicesTemplate, data);
		$('#services ul').append(servicesResults);
  
		var experienceTemplate = $('#experienceTemplate').html();
		var experienceResults = Mustache.to_html(experienceTemplate, data);
		$('#experience').append(experienceResults);
  
		var blockTemplate = $('#blockTemplate').html();
		var blockResults = Mustache.to_html(blockTemplate, data);
		$('#blocks-container').append(blockResults);
  
		var iconTemplate = $('#iconTemplate').html();
		var iconResults = Mustache.to_html(iconTemplate, data);
		$('#project-menu .center').append(iconResults);
  
		var aboutTemplate = $('#aboutTemplate').html();
		var aboutResults = Mustache.to_html(aboutTemplate, data);
		$('#aboutMe').append(aboutResults);
  
		var navigationTemplate = $('#navigationTemplate').html();
		var navigationResults = Mustache.to_html(navigationTemplate, data);
		$('nav .wrapper ul').append(navigationResults);
  
		var socialTemplate = $('#socialTemplate').html();
		var socialResults = Mustache.to_html(socialTemplate, data);
		$('footer .center').append(socialResults);
	  }) //getJSON
  
	).done(function() {
		$("#about").removeClass("debut");
		$("#contact").removeClass("debut");
	  
		var vTop = 0;
		var mLeft = 0;
		var bgColor = "#FFFFFF";
		var currentProject = 0;
		var fromicon = false;
	  
		var windowScroll = 0;
		$(window).trigger('scroll');
		$(window).scroll(function(event){
		  windowScroll = $(window).scrollTop();
		});
	  
		$(".about").click(function(){
		  if (rubOpen == false) {
			$("#about").css("left", "0");
			$("#contact").css("left", "100%");
			menuderoule();
			aboutOpen = true;
			$(this).addClass("current");
			$('#about').addClass("shadow-heavy")
		  }
		  else {
			if(contactOpen == true) {
			  $("#contact").css("left", "100%");
			  $("#contact").removeClass("shadow-heavy");
			  $("#about").addClass("shadow-heavy");
			  $("#about").css("left", "0");
			  $("#about").css("left", "0");
			  contactOpen = false;
			  aboutOpen = true;
			  $("#header a").removeClass("current");
			  $(this).addClass("current");
			}
			else {
			  menuferme();
			  aboutOpen = false;
			  $('#about').removeClass('shadow-heavy');
			}
		  }
		  return false;
		});
	  
		$(".contact").click(function(){
		  if (rubOpen == false) {
			$('#contact').addClass("shadow-heavy")
			$("#about").css("left", "-100%");
			$("#contact").css("left", "0");
			menuderoule();
			contactOpen = true;
			$("#header a.contact").addClass("current");
		  }
		  else {
			if(aboutOpen == true) {
			  $("#about").css("left", "-100%");
			  $("#contact").css("left", "0");
			  $("#contact").addClass("shadow-heavy");
			  $("#about").removeClass("shadow-heavy");
			  aboutOpen = false;
			  contactOpen = true;
			  $("#header a").removeClass("current");
			  $(".contact").addClass("current");
			}
			else {
			  menuferme();
			  contactOpen = false;
			$('#contact').removeClass("shadow-heavy")
			}
		  }
		  return false;
		});
	  
		$(".work").click(function(){
		  if (rubOpen == true) {
			menuferme();
			$('#contact, #about').removeClass("shadow-heavy")
		  }
		  return false;
		});
	  
		function menuderoule() {
		  $("#about").css("marginTop", 0);
		  $("#contact").css("marginTop", 0);
		  $("#header a").removeClass("current");
		  $("#header").css("top", "550px");
		  setTimeout(function() {
			$("#about").addClass("visible");
			$("#contact").addClass("visible");
		  }, 300);
		  rubOpen = true;
		}
	  
		function menuferme() {
		  $("#about").css("marginTop", "-550px");
		  $("#contact").css("marginTop", "-550px");
		  $("#header a").removeClass("current");
		  $(".work").addClass("current");
		  $("#header").css("top", "0");
		  $("#about").removeClass("visible");
		  $("#contact").removeClass("visible");
		  rubOpen = false;
		}
	  
		$(".block").click(function(){
		  if ($(this).hasClass("block1")) { $("#project").load("projects/zip-tapestry/index.html", function(){ currentProject = 1; openproject() } ); } ;
		  if ($(this).hasClass("block2")) { $("#project").load("projects/urb-ob-site/index.html", function(){ currentProject = 2; openproject() } ); } ;
		  if ($(this).hasClass("block3")) { $("#project").load("projects/urb-ob-ui/index.html", function(){ currentProject = 3; openproject() } ); } ;
		  if ($(this).hasClass("block4")) { $("#project").load("projects/public-health/index.html", function(){ currentProject = 4; openproject() } ); } ;
		  if ($(this).hasClass("block5")) { $("#project").load("projects/inca/index.html", function(){ currentProject = 5;openproject() } ); } ;
		  if ($(this).hasClass("block7")) { $("#project").load("projects/industries/index.html", function(){ currentProject = 7; openproject() } ); } ;
		  if ($(this).hasClass("block8")) { $("#project").load("projects/calcite-design-system/index.html", function(){ currentProject = 8; openproject() } ); } ;
		  if ($(this).hasClass("block9")) { $("#project").load("projects/dashboard/index.html", function(){ currentProject = 9; openproject() } ); } ;
		  if ($(this).hasClass("block11")) { $("#project").load("projects/my-esri/index.html", function(){ currentProject = 11; openproject() } ); } ;
		  if ($(this).hasClass("block13")) { $("#project").load("projects/calcite-ui-icons/index.html", function(){ currentProject = 13; openproject() } ); } ;
		  //if ($(this).hasClass("block15")) { $("#project").load("projects/programs-dashboard/index.html", function(){ currentProject = 15; openproject() } ); } ;
		  if ($(this).hasClass("block14")) { $("#project").load("projects/esri-product-logos/index.html", function(){ currentProject = 14; openproject() } ); } ;
		  if ($(this).hasClass("block16")) { $("#project").load("projects/calcite-components/index.html", function(){ currentProject = 16; openproject() } ); } ;
		});
	  
		$(".icon").click(function(){
		  fromicon = true;
		  bgColor = $(this).find(".fond").css("background-color");
		  $("#project").removeClass("visible");
		  if ($(this).hasClass("icon1")) { $("#project").load("../projects/zip-tapestry/index.html", function(){ currentProject = 1; vTop2 = "400px"; openproject() } ); } ;
		  if ($(this).hasClass("icon2")) { $("#project").load("../projects/urb-ob-site/index.html", function(){ currentProject = 2; vTop2 = "400px"; openproject() } ); } ;
		  if ($(this).hasClass("icon3")) { $("#project").load("../projects/urb-ob-ui/index.html", function(){ currentProject = 3; vTop2 = "400px"; openproject() } ); } ;
		  if ($(this).hasClass("icon4")) { $("#project").load("../projects/public-health/index.html", function(){ currentProject = 4; vTop2 = "830px"; openproject() } ); } ;
		  if ($(this).hasClass("icon5")) { $("#project").load("../projects/inca/index.html", function(){ currentProject = 5; vtop2 = "830px"; openproject() } ); } ;
		  if ($(this).hasClass("icon7")) { $("#project").load("../projects/industries/index.html", function(){ currentProject = 7; vTop2 = "1260px"; openproject() } ); } ;
		  if ($(this).hasClass("icon8")) { $("#project").load("../projects/calcite-design-system/index.html", function(){ currentProject = 8; vTop2 = "1260px"; openproject() } ); } ;
		  if ($(this).hasClass("icon9")) { $("#project").load("../projects/dashboard/index.html", function(){ currentProject = 9; vTop2 = "1260px"; openproject() } ); } ;
		  if ($(this).hasClass("icon11")) { $("#project").load("../projects/my-esri/index.html", function(){ currentProject = 11; vTop2 = "1260px"; openproject() } ); } ;
		  if ($(this).hasClass("icon13")) { $("#project").load("../projects/calcite-ui-icons/index.html", function(){ currentProject = 13; vTop2 = "1260px"; openproject() } ); } ;
		  //if ($(this).hasClass("icon15")) { $("#project").load("../projects/programs-dashboard/index.html", function(){ currentProject = 15; vTop2 = "1260px"; openproject() } ); } ;
		  if ($(this).hasClass("icon14")) { $("#project").load("../projects/esri-product-logos/index.html", function(){ currentProject = 14; vTop2 = "1260px"; openproject() } ); } ;
		  if ($(this).hasClass("icon16")) { $("#project").load("../projects/calcite-components/index.html", function(){ currentProject = 16; vTop2 = "1260px"; openproject() } ); } ;
	  
		});
	  
		function openproject() {
		  $('#blocks-container').css('marginTop', '50px');
		  $(".icon").removeClass("current");
		  $(".icon"+currentProject).addClass("current");
		  if (fromicon == true) {
			$("#project").addClass("visible");
			$('#fond_project.actif').animate({backgroundColor: bgColor},'600')
			$('html,body').delay(0).animate({scrollTop: 0},'10');
		  }
		  if (fromicon == false) {
			$("#fond_project").addClass("actif");
			$("#project").addClass("visible");
			$("#project-menu").addClass("visible");
			$("#fond_project.actif").css("top", 0);
			$("#fond_project.actif").css("left", 0);
			$("#fond_project.actif").css("marginLeft", 0);
			$("#fond_project.actif").css("height", "100%");
			$("#fond_project.actif").css("width", "100%");
			$("#fond_project.actif").css("background-color", bgColor);
			$('html,body').delay(300).animate({scrollTop: 0},'10');
		  }
		  if(rubOpen == true) {
			menuferme();
			contactOpen = false;
			aboutOpen = false;
		  }
		  fromicon = false;
		}
	  
		$(".block").mouseover(function(){
		  vTop = $(this).css("Top");
		  vTop2 = vTop;
		  vTop = parseInt(vTop) - windowScroll;
		  mLeft = $(this).css("marginLeft");
		  bgColor = $(this).find(".fond").css("background-color");
		  $("#fond_project").css("top", vTop+"px");
		  $("#fond_project").css("marginLeft", mLeft);
		  $("#fond_project").css("left", "50%");
		  $("#fond_project").css("height", "380px");
		  $("#fond_project").css("background-color", bgColor);
		});
	  
		function home() {
			$('#blocks-container').css('marginTop', '280px');
			$("#project").removeClass("visible");
			$("#project-menu").removeClass("visible");
			$("#fond_project").removeClass("actif");
			$("#fond_project").css("top", vTop2);
			$("#fond_project").css("left", "50%");
			$("#fond_project").css("marginLeft", mLeft);
			$("#fond_project").css("height", "380px");
			$("#fond_project").css("width", "300px");
			$("#fond_project").css("background-color", bgColor);
			$('html,body').delay(320).animate({scrollTop: parseInt(vTop2)-100},'10');
		}
		
		$(".home").click(home);
		$(document).on('keydown', function (e) {
			if ( e.keyCode === 27 ) { // ESC
				home();
			}
		});
	  
		var windowW = $(window).width();
		var windowW2 = -(windowW / 2);
		gestionResize();
	  
		$(window).resize(function() {
		  windowW = $(window).width();
		  windowW2 = -(windowW / 2);
		  gestionResize();
		});
	  
		function gestionResize(){
		  if( $(window).width() > 1920) {
			$(".banner img").css("width", windowW);
			$(".banner img").css("marginLeft", windowW2);
		  }
		  else {
			$(".banner img").css("width", "1920px");
			$(".banner img").css("marginLeft", "-960px");
		  }
		}
	  
	   $('.icon').hover(
		   function() {
			 var popupText = $(this).children('div').attr('alt');
			 var popupContent = ('<div class="popup-text"><span>'+ popupText + '</span></div>');
			 $(popupContent).prependTo($(this));
		   }, function() {
			 $('.popup-text').remove();
		   });
	  
	  });
  }); //function
  