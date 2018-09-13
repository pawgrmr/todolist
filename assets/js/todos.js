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