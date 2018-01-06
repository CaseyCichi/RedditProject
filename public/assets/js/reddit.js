// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  // $(".change-sleep").on("click", function (event) {
  //   var id = $(this).data("id");
  //   var currentSleepState = $(this).data("currentSleepState");

  //   var newSleepState = {
  //     sleepy: !currentSleepState
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "PUT",
  //     data: newSleepState
  //   }).then(
  //     function () {
  //       console.log("changed sleep to", currentSleepState);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //     );
  // });

  // $(".create-form").on("submit", function (event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newCat = {
  //     name: $("#ca").val().trim(),
  //     sleepy: $("[name=sleepy]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/cats", {
  //     type: "POST",
  //     data: newCat
  //   }).then(
  //     function () {
  //       console.log("created new cat");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //     );
  // });

  // $(".delete-cat").on("click", function (event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE",
  //   }).then(
  //     function () {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //     );
  // });
  $('.upvote').on("click", function(event) {
    var id = "#" + $(this).data('id');
    var score = $(id).data('value');

    if($(this).data('clicked') == false) {
      $(id).data('value', ++score); 
      $(id).text(score);
      $(this).data('clicked', true);
    }
    else {
      $(id).data('value', --score); 
      $(id).text(score);
      $(this).data('clicked', false);
    }
  });

  $('.downvote').on("click", function(event) {

    var id = "#" + $(this).data('id');
    var score = $(id).data('value');
   
    if($(this).data('clicked') == false) {
      console.log("FALSE");
      if(score == 0) return;
      $(id).data('value', --score); 
      $(id).text(score);
      $(this).data('clicked', true);
    }
    else {
      $(id).data('value', ++score); 
      $(id).text(score);
      $(this).data('clicked', false);
    }

  });


  $('.modal').modal();
});
