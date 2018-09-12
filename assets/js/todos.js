// check off todos by clicking

//select lis
$("li").click(function(){
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: "none" //need to use camel case in js
		});
	}
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through" //need to use camel case in js
		});
	}
});