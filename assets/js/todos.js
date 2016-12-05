$('li').on('click', function() {
	$(this).toggleClass('completed');
});

$('li>span').on('click', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});