var giphyList = [];

    function createCard(response) {
      var article = $("<article>");
      article.addClass("card");

      var giphyImage = $("<img>");
      giphyImage.attr("src", response.data[17].original_still);

      var giphyImage = $("<figure>");
      giphyImage.append(giphyImage);
      article.append(giphyImage);

      var cardBody = $("<div>");
      cardBody.addClass("card-body");
      
      $("#gif-section").append(article);

    }

    function getGif(giphy) {

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=UWJ78tsEAy2ys9CkuDRhr6Wwh5XWMynL&limit=5";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        if (response.Response === "False") {
          alert(response.Error);
        }
        else if (giphy.indexOf(response.data[17].original_still) >= 0) {
          alert ("Gif already in List!")
        }
        else {
          createCard(response);
          gif.push(response.Title);
        }
      });

    }

    for (var i = 0; i < giphyList.length; i++) {

      var giphy = giphy[i];
      getGif(giphy);

    }

    $("#search").click(function() {

      var giphy = $("#gif-name").val();
      getGif(giphy);
      
    });

    function animateGif(){
        console.log("click")
        var state = $(this).attr("data-state");
        if(state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    
    }