
//
//
// function navbar(element){
//     $(".nav li").removeClass("active");
//     $(element).toggleClass("active");
// };
//
// function tryDocument(){
//   $(".nav li").on("click", function(){
//     $(navbar(this));
//   });
//   $(".portfolio").on("click", function(){
//     $(".nav li").removeClass("active");
//   });
// };
//
//
// $(tryDocument());

function tryDocument(){
  $(".memory-game img").on("click", function(){
    console.log("I am clicked");
    $('#memoryGameModal').modal('show');
  });
  $(".movie-website img").on("click", function(){
    console.log("I am clicked");
    $('#movieWebsiteModal').modal('show');
  });
};

$(tryDocument());
