


function navbar(element){
    $(".nav li").removeClass("active");
    $(element).toggleClass("active");
};

function tryDocument(){
  $(".nav li").on("click", function(){
    $(navbar(this));
  });
  $(".portfolio").on("click", function(){
    $(".nav li").removeClass("active");
  });
};


$(tryDocument());
