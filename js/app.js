function tryDocument() {
  $(".memory-game .featured-image").on("click", function(){
    $('#memoryGameModal').modal('show');
  });
  $(".movie-website .featured-image").on("click", function(){
    $('#movieWebsiteModal').modal('show');
  });
  $(".portfolio-website .featured-image").on("click", function(){
    $('#portfolioWebsiteModal').modal('show');
  });
};

$(tryDocument());
