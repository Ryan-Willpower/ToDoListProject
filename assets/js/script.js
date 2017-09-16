// Check off Specific Todos By clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
})

//Click on X to del
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
	})
	event.stopPropagation()
})

$("input[type='text']").keypress(function(event) {
	if (event.which == 13) {
		//grab value
		todoText = $(this).val()
		//append html to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
		$(this).val("")
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle()
})