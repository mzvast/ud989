 $(document).ready(function() {
     console.log("document loaded");
	thisCounter = new Counter();
	thisCounter.add();
	$('#votes').html(thisCounter.get());
 });

 // $(window).load(function() {
 //     console.log("window loaded");
 // });
// function updateCounter (id) {
// 	// body...
// }

$('#vote_bt').click(function (e) {
	e.preventDefault;
	thisCounter.add();
	$('#votes').html(thisCounter.get());
})