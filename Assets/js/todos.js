

//check off specific to-dos by clicking

$("ul").on("click","li", function(){ //this is adding a listener to the ul and showing that if an li in that ul is clicked then the following function should be excecuted
	$(this).toggleClass("completed")
})

//click on X to delete todo 

$("ul").on("click","span", function(event){

	//removes the parent element of the clicked element
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});

	//this funtion prevents an event from bubbling up and triggering other event listeners in parent elements
	event.stopPropagation()

})



$("input[type='text'").keypress(function(event){
	if(event.which===13){



		//grabbing new toDo text from the input and coding it in html
		var todoText="<li><span><i class='fa fa-trash-alt'></i> </span>"+$(this).val()+"</li>"

		//adding it to the list
		$("ul").append(todoText)

		//clear the input
		$(this).val("")
		
	}
})

$(".fa-edit").click(function(){

	$("input[type='text'").fadeToggle(300)

})