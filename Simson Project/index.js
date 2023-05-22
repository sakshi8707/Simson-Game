      //  ** code by angela**
      // const buttonColours = ["red", "blue", "green", "yellow"];
      // const gamePattern = [];
// const userClickedPattern = [];

// $(".btn").click(function () {
  //   const userChossenColour = $(this).attr("id");
  //   userChossenColour.push(this.id);
  //   userClickedPattern.push(userChossenColour);
  // });
  // console.log(userClickedPattern);
  
  
  
  // function nextSequence() {
    //   const randomNumber = Math.floor(Math.random() * 3);
//   const randomChossenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChossenColour);

//   $("#" + randomChossenColour).on("click", function () {
  //     $("." + randomChossenColour)
  //       .fadeOut(100)
  //       .fadeIn(100);
  
  //     var audio = new Audio("sounds/" + randomChossenColour + ".mp3");
  //     audio.play();
  //   });
  // };
  // $(".btn").click(nextSequence);
  
  
  
  //  ** code by me**
  
  let buttonColors = ["red", "blue", "green", "yellow"];
  let gamePattern = [];
 
 
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
 
    $("#" + randomChosenColor).on("click", function () {
 
        $("." + randomChosenColor).fadeOut(100).fadeIn(100);
 
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
        audio.play();
        return randomChosenColor;
    });
 
 
  
};
 
$(".btn").click(nextSequence);