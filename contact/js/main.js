$('.animate').on('click')
,

for (let boxNum = 0; boxNum < 3; boxNum++ ) {
	$('.boxes').append('<div class="box"><p>Hello</p></div>');
}

// .html is replacing the content and .append is adding content

$('.box').on('click', function(){
	if (animated === false) {
	animated = true;
	$(this).animate ({
		width: 450,
		height: '450px',
		opacity: 0.5,
	});
}
	else {
		animated = false;
		$(this).animate ({
		width: 200,
		height: '200px',
		opacity: 1,
	});
	}
});