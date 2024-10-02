$(function() {
		$("#about").removeClass("debut");
		$("#contact").removeClass("debut");
	  
		$(".blog").click(function(){
		  if (rubOpen == false) {
			$(this).addClass("current");
		  }
		  else {
			if(contactOpen == true) {
			  $("#header a").removeClass("current");
			  $(this).addClass("current");
			  $(".blog").addClass("current");
			}
			else {
			}
		  }
		  return false;
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
	  
		function menuderoule() {
		  $("#about").css("marginTop", -50);
		  $("#contact").css("marginTop", -50);
		  $("#header a").removeClass("current");
		  $("#header").css("top", "500px");
		  setTimeout(function() {
			$("#about").addClass("visible");
			$("#contact").addClass("visible");
		  }, 300);
		  rubOpen = true;
		}
	  
		function menuferme() {
		  $("#about").css("marginTop", "-500px");
		  $("#contact").css("marginTop", "-500px");
		  $("#header a").removeClass("current");
		  $(".work").addClass("current");
		  $("#header").css("top", "0");
		  $("#about").removeClass("visible");
		  $("#contact").removeClass("visible");
		  rubOpen = false;
		}

	  
  }); //function
  
