$("#search").click(function () {
  var giphy = $("#giphy-name").val();
  $("#giphys").html("");
  getgiphy(giphy);
});

function getgiphy(giphy) {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UWJ78tsEAy2ys9CkuDRhr6Wwh5XWMynL&q=" + giphy + "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    if (response.Response === "False") {
      alert(response.Error);
    }
    else {
      for (i = 0; i < response.data.length; i++) {
        $("#giphys").append("<img src=" + response.data[i].images.fixed_width.url + "id=img" + i + ">");
      }
    }
  });
}

//working on stopping and starting my giphs
$("#giphys").on("click", function () {
  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

