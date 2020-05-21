// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("check-off");
});

// Click on X to delete a particular to-do
$("ul").on("click", "li span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

// Creation of new Todos
$('input[type = "text"]').keypress(function (e) {
  // If we press the Enter keyword
  if (e.which === 13) {
    // Grabbing text from input
    let todoText = $(this).val();
    // Clear input field
    $(this).val("");
    // Create a new LI and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

// Toggle fade animation for input new Todos
$(".fa-plus").on("click", function () {
  $('input[type = "text"]').fadeToggle(1000);
});
