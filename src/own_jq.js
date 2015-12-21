 $(document).ready(function() {
     console.log("document loaded");  
     importCats();
     renderCatsHTML(myCatBook);   
      console.log(myCatBook);

      $('#btn0').on('click',function  (event) {
				event.preventDefault();
				console.log(event.target);
				upVote(0);
				updateVoteHTML(0);
			});	
      $('#btn1').on('click',function  (event) {
				event.preventDefault();
				console.log(event.target);
				upVote(1);
				updateVoteHTML(1);
			});	
 });

CatCatogory=[
		{
			name:'Cat1',
			url:'img/cat1.jpg'
		},
		{
			name:'Cat2',
			url:'img/cat2.jpg'
		}
];


 myCatBook = new CatBook();

function importCats () {
	for(i=0;i<CatCatogory.length;i++){
		var thisCat = new Cat();
		thisCat.init(CatCatogory[i].name,CatCatogory[i].url);
		console.log(thisCat.getName());
		myCatBook.add(thisCat);
		console.log("There are "+myCatBook.getNumber()+ "cats!");
	}
}

function renderCatsHTML (catBook) {	
	for(var i=0;i<catBook.getNumber();i++){
		var name = catBook.get(i).getName();
		var url = catBook.get(i).getURL();
		var count = catBook.get(i).getCount();
		$('.container').append(
			'<div class="row">	\
			<div>\
				<lable id="counter'+i+'">\
					<h2>'+name+'</h2>\
				<img src="'+url +'" height="150" width="150">\
					<h3 id="counter'+i+'">'+count+'</h3>\
				</lable>\
				<button class="btn btn-default" id="btn'+i+'">Click Me</button>\
			</div>\
		</div>'
			);

	};

}

function upVote (id) {
	var thisCat = myCatBook.get(id);
	thisCat.upVote();
	return getCount(id);
};
function getCount (id) {
	var thisCat = myCatBook.get(id);
	return thisCat.getCount();
};
function updateVoteHTML(id){
	$('#counter'+id).children('h3').html(getCount(id));
};

// function bingButtonListener(){
// 	for (var i = 0; i < myCatBook.getNumber(); i++) {
// 	$('#btn'+i).on('click',function  (event) {
// 				event.preventDefault();
// 				console.log(event.target);
// 				console.log(i);
// 				upVote(i+0);
// 				updateVoteHTML(i+0);
// 			});	
// 	};
	
// };

// $('.container').on('click',function(event) {
// 	event.preventDefault();
// 	var target = $(event.target );
// 	console.log(target);	
// 	// console.log(target.class);	
// 	// if (target.class == "btn") {
// 	// 	var id = target.id.slice(2, -1);
// 	// 	console.log("parse id: "+ id);
// 	// 	upVote(id);
// 	// 	updateVoteHTML(id);
// 	// };
// });




	
	

