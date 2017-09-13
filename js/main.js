

$(document).ready(function(){

	var open = true;

	$(".hamburger").click(function(){
	
	

	if (open == true){

				$(".nav").addClass("open_menu");
				$(".hamburger").addClass("hamburger_move");
				$(".hamburgerlayer-top").addClass("hamburgerlayer-top_shift");
				$(".hamburgerlayer-bottom").addClass("hamburgerlayer-bottom_shift");
				$(".hamburgerlayer").addClass("hamburgerlayer_shift");
				open = false;
				console.log(open);
			
		 

	


	}else{

	

				$(".nav").removeClass("open_menu");
				$(".hamburger").removeClass("hamburger_move");
				$(".hamburgerlayer-top").removeClass("hamburgerlayer-top_shift");
				$(".hamburgerlayer-bottom").removeClass("hamburgerlayer-bottom_shift");
				$(".hamburgerlayer").removeClass("hamburgerlayer_shift");
				open = true;
				console.log("damn");
		
			
	
	}


});

	$(".a").click(function(event){
    event.preventDefault();
});
});