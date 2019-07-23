//user clicks on a button
//search giphy for gifs related to that button's animal
//display those gifs to the user


//click function for the buttons
    //retrieve the animal type from the data-animal attribute
    //run gif search
    $(".animals").click(function() {

        //retrieve info from clicked button
        var term = $(this).data("animal")
    
        //creates the url
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        term + "&api_key=UWJ78tsEAy2ys9CkuDRhr6Wwh5XWMynL";
    
        //calls the api
        $.ajax({
            url: queryURL,
            method: "GET"
    
            //runs once response received
        }).then(function(res) {
            console.log(res.data)
            //clears any previous content
            $("#display").empty();
    
            //loop over response.data
            for(var i = 0; i < res.data.length; i ++) {
    
                //creating a wrapper to hold the gif and the rating
                var $div = $("<div>")
                    .addClass("gif-div");
    
                //creating an image tag with a class of gif-image and and src from response
                var $img = $("<img>")
                    .addClass("gif-img")
                    .attr("src", res.data[i].images.fixed_height.url)
                    .attr("alt", "cat gif");
    
                //create a p tag to hold rating (retreived from response)
                var $p = $("<p>")
                    .text(res.data[i].rating)
    
                //appending p and img tags to the wrapper and then the wrapper to the display div
                $("#display").append(
                    $($div).append($img, $p)
                )
    
            }
        })
    })
    