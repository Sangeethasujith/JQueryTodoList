$(document).ready(function(){

	var incompleteTasksHolder = $('#incomplete-tasks');
	var completedTasksHolder = $('#completed-tasks');

	$('input').keypress(function(event){
		if(event.which === 13){
			var todoText = $(this).val();
			$(this).val("");
			$('.todolist').append('<li><input class="checker me-2" type="checkbox">' + todoText + '<span class="trash"><i class="fa fa-trash"></i></span>');
		}
	});
	$('.todolist').on('click', ".trash" , function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		//event.stopPropagation();
	});
	$('.todolist').on('click', '.checker', function(){
		
			$(this).parent().toggleClass('done');
			$('.completed-tasks').append($(this).parent());
			$('.completed-tasks').hide();
		}
	);

	$('.todo-nav .completed-task').click(function() {
        $('.completed-tasks').show();
		$('.todolist').hide();
       
    });

	$('.todo-nav .active-task').click(function() {
        $('.completed-tasks').hide();
		$('.todolist').show();
       
    });

	$('.todo-nav .all-task').click(function() {
        $('.completed-tasks').show();
		$('.todolist').show();
       
    });
	
});

