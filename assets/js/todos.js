// check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo

$("span").on("click", "span", function(event){
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
		$("ul").append("<li><span><i class='fa fa-minus' aria-hidden='true'></i></span> " + todoText + "</li>")
	}
});


