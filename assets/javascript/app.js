var buttons = ["Michael Jordan", "Terrell Owens", "Kanye West", "The Rock"];

var addButtons = function() {

    buttons.map(function(e) {

        var button = $("<button>");
        button.html(e);
        button.attr("data-name", e);

        $(".buttonsContainer").append(button);
    });

}

addButtons();

//Making call to server
var runAjax = function(link) {
	$(".images").empty();

    $.ajax({ url: link, method: "GET" })
        .done(function(response) {

            console.log(response);
            //Logging the data
            console.log(response.data[0].images.fixed_height.url);
            console.log(response.data[0].images.fixed_height_still.url);


            for (var i = 0; i < response.data.length; i++) {
                var image = $("<img>");
                image.attr({
                    src: response.data[i].images.fixed_height.url
              		
              });

                $(".images").append(image);

                
            };
        });
};


//var link = "http://api.giphy.com/v1/gifs/search?";   
//var search = "q= funny+cat"
//var key = "&api_key=dc6zaTOxFJmzC";

//Grab user value and add buttons
$("#search").on("click", function() {

    //Deleting the existing arrays in DOM	
    $(".buttonsContainer").empty();
    var userVal = $("#search-value").val();

    //Only add to the button when the input is not empty
    if (userVal !== "") {
        buttons.push(userVal);
    

    var link = "http://api.giphy.com/v1/gifs/search?" + "q=" + userVal + "&api_key=dc6zaTOxFJmzC"


    //Making call to Giphy server
    runAjax(link);
}
    //Reseting the input
    $("#search-value").val('');

    addButtons();
    console.log(buttons);
});

$(".buttonsContainer").on("click", "button", function(){
	
	var buttonVal = $(this).attr("data-name");
  		link = "http://api.giphy.com/v1/gifs/search?" + "q=" + buttonVal + "&api_key=dc6zaTOxFJmzC"

	runAjax(link);

});

$(".images").on('click', "img", function(){
	

});
