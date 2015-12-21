$('#vote_bt').click(function (e) {
	e.preventDefault;
	getVote = $('#votes').text();
	getVote++;
	$('#votes').text(getVote);
})