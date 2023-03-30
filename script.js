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
	$.ajax({
    url: URL,
    type: "GET",
    dataType: "jsonp",
    crossDomain: true,
    success: function(data) {
        console.log(data);
    },
    error: function(xhr, status, error) {
        console.error(status, error);
    }
});
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