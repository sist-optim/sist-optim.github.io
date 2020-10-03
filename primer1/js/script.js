$(document).ready(function() {
	$('.calc').each(function(){
		$(this).append('<i class="ico"></i>');
	});
	$('.video').each(function(){
		$(this).append('<i class="ico"></i><i class="lt"></i><i class="rt"></i><i class="rb"></i><i class="lb"></i>');
	});
	
	$('.reasons ul li, .helpTab .ht1 li, .get li').each(function(){
		$(this).append('<i class="ico">'+($(this).index()+1)+'</i>');
	});
	$('.helpTab .ht2 li').each(function(){
		$(this).append('<i class="ico">'+($(this).index()+6)+'</i>');
	});
	
	
	$(".contactform").validationEngine('attach');
	//for forms
	$('.contactform').submit(function() { 
		if ( $(this).validationEngine('validate') ) {
			$(this).ajaxSubmit();
			$(this).clearForm();
			$.arcticmodal('close');
			$('#modal_5').arcticmodal();
			setTimeout("$.arcticmodal('close')", 5000);
		}
		return false;
	}); 
	
	
	

	
	


	
});

