$(document).ready(function(){
	$('input').keypress(function(event){
		if(event.which === 13){
			var todoText = $(this).val();
			$(this).val("");
			$('.todolist').append('<li>' + todoText + '<span><i class="fa fa-trash"></i></span>');
		}
	});
	$('.todolist').on('click', "span" , function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		//event.stopPropagation();
	});
	$('.todolist').on('click', 'li', function(){
		$(this).toggleClass('done');
	});
});

