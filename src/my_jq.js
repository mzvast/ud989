 myCounterBook = new CounterBook();
 myCounterBook.add(new Counter());


 $(document).ready(function() {
     // console.log("document loaded");     
     updateCouterText(0);
 });

 // $(window).load(function() {
 //     console.log("window loaded");
 // });
function setCouterText (id,val) {	
	$('#counter'+id+'.counter').html(val);
};

function getCouterById (id) {	
	return myCounterBook.get(id);
};

function getCouterValById (id) {	
	return getCouterById(id).get();
};

function AddOneToCouterById (id) {	
	return getCouterById(id).addOne();
};

function updateCouterText (id) { 	
	setCouterText(id,getCouterValById(id));
};


// function addCouterByOne (id,val) {	
// 	$('#counter'+id).html(val);
// }

$('#counter0_bt').click(function (e) {
	e.preventDefault;
	AddOneToCouterById(0);
	updateCouterText(0);
});