var savedMovieList = ["Toy Story", "Toy Story 2", "Toy Story 3", "Toy Story 4"];
    var movieList = [];

    function createCard(response) {
      // Create a new boostrap card container
      var article = $("<article>");
      article.addClass("card");

      // Create an image elment, add attributes, and append to figure
      var posterImage = $("<img>");
      posterImage.attr("src", response.Poster);
      posterImage.attr("alt", response.Title + " Poster");

      var moviePoster = $("<figure>");
      moviePoster.append(posterImage);
      article.append(moviePoster);

      // Create a new card body container
      var cardBody = $("<div>");
      cardBody.addClass("card-body");

      // Add movie name
      var movieName = $("<h1>");
      movieName.addClass("card-title");
      movieName.html(response.Title);
      article.append(movieName);

      // Add description
      var movieDescription = $("<p>");
      movieDescription.addClass("card-text");
      movieDescription.html(response.Plot);
      article.append(movieDescription);

      // Append the new card to the HTML body
      $("#gif-section").append(article);

    }

    function getMovie(movie) {

      // queryURL endpoint for OMDB API
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=UWJ78tsEAy2ys9CkuDRhr6Wwh5XWMynL&limit=5";


      // AJAX call to OBMD API with promise and callback handler
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        if (response.Response === "False") {
          alert(response.Error);
        }
        else if (movieList.indexOf(response.Title) >= 0) {
          alert ("Movie already in List!")
        }
        else {
          createCard(response);
          movieList.push(response.Title);
        }
      });

    }

    // Create a bootstrap card for each item in the movieList array

    for (var i = 0; i < movieList.length; i++) {

      var movie = movieList[i];
      getMovie(movie);

    }

    //
    // TO DO: Create button click handler to get the form submission,
    // and call the AJAX function, passing the name of the new movie
    //

    $("#search").click(function() {

      var movie = $("#film-name").val();
      getMovie(movie);
      
    });