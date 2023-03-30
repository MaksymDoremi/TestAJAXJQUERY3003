const URL = 'http://dog-api.kinduff.com/api/facts';


class LikeFacts{
	constructor(id, img){

	}
}

class DislikedFacts{
	constructor(id, img){

	}
}

function GenerateNewDogFact(){
	$.ajax({
        url: URL,
        type: "GET", //or POST
        crossDomain: true,
        success: function(data) {


            let result = JSON.parse(data);
            console.log(result);

        },
        error: function(data, status) {

        }
    });
}