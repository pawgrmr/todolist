// check off todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo

$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){//this=li because parent=li,
		$(this).remove(); //removes entire li
	});
	event.stopPropagation(); //stops event from bubbling up
});

$("input[type= 'text']").keypress(function(event){
	if(event.which === 13){
		//grab todo from input by saving text to a var
		var todoText = $(this).val(); //value on input i.e. typed text in textbox
		$(this).val(""); //empty string to clear text box
		//create a new li and to ul
		$("ul").append("<li><span>X</span> " + todoText "</li>");
	}
});