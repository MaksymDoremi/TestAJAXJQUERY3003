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
		crossDomain: true,
		dataType: "jsonp",
		headers: {
			
			"Access-Control-Allow-Origin": "*",
			
		},

		success: function(data) {


			let result = JSON.parse(data);
			console.log(result);

		},
		error: function(data, status) {

		}


	});
}

function Like(fact){
	Liked[Liked.length] = new LikeFacts(fact);
}

function Dislike(fact){
	Disliked[Disliked.length] = new DislikeFacts(fact);
}