const URL = 'http://dog-api.kinduff.com/api/facts';


class LikeFacts{
	constructor(fact){
		this.fact = fact;
	}
}

class DislikedFacts{
	constructor(fact){
		this.fact = fact;
	}
}
let Liked = [];
let Disliked = [];

function GenerateNewDogFact(){
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log('success');

			let result = JSON.parse(this.response);


		} else {
			console.log('error');
		}
	}
	req.open("GET", URL, true);
	req.send();
}

function Like(){
	Liked[Liked.length] = new LikeFacts(
		$('.factText').val()
		);
}

function Dislike(){
	Disliked[Liked.length] = new DislikeFacts(
		$('.factText').val()
		);
}
/*
<div class="card">
					
					<div class="card-body">
						
						<p class="factText">Facts</p>
						<a href="#" class="btn btn-primary" onclick="Like()">Like</a>
						<a href="#" class="btn btn-primary" onclick="Dislike()">Dislike</a>
						
					</div>
				</div>



*/
function ShowLiked(){
	$('#placeForCards').html('');

	Liked.forEach(child => {
		let card = $('<div></div>');
		card.addClass('card');

		let cardBody = $('<div></div>');
		cardBody.addClass('card-body');

		let p = $('<p></p>');
		p.addClass(factText);
		p.html(child.fact);

		cardBody.append(p);
		card.append(cardBody);

		$('#placeForCards').append(card);

	});

}

function ShowDisliked(){
	$('#placeForCards').html('');

	Disliked.forEach(child => {
		let card = $('<div></div>');
		card.addClass('card');

		let cardBody = $('<div></div>');
		cardBody.addClass('card-body');

		let p = $('<p></p>');
		p.addClass(factText);
		p.html(child.fact);

		cardBody.append(p);
		card.append(cardBody);

		$('#placeForCards').append(card);

	});
}