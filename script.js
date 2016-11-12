function isItManspreading(){
  var counter = 0;
  var threePoints = {};
  //display the first prompt
  $(".text").html("<p>Click on left knee!");
  //listen for clicks
  $(".img-field").click(function(event){
    //left knee
    if(counter === 0){
      //store the x and y values
      threePoints.leftKneeX = event.clientX;
      threePoints.leftKneeY = event.clientY-300;
      //prompt for next point
      $(".text").html("<p>Click on the crotch</p>");
    }
    //crotch
    else if(counter === 1){
      //store x and y values
      threePoints.crotchX = event.clientX;
      threePoints.crotchY = event.clientY-300;
      //prompt for next point
      $(".text").html("<p>Click on right knee</p>");
    }
    //right knee
    else if(counter == 2){
      //store the x and y values
      threePoints.rightKneeX = event.clientX;
      threePoints.rightKneeY = event.clientY-300;
      //initiate the function that calculates the angle
      var angle = calculateAngle(threePoints);
      //trigger response to resulting angle
      response(angle);
    }
    counter += 1;
  }); //closes the click function
}//closes isItManspreading

function calculateAngle(Obj) {
  console.log(Obj);
  //legth between R knee and C
  //take
  var AB = Math.sqrt(Math.pow((Obj.crotchX-Obj.leftKneeX),2)+ Math.pow((Obj.crotchY-Obj.leftKneeY),2));
  var BC = Math.sqrt(Math.pow((Obj.crotchX-Obj.rightKneeX),2)+ Math.pow((Obj.crotchY-Obj.rightKneeY),2));
  var AC = Math.sqrt(Math.pow((Obj.rightKneeX-Obj.leftKneeX),2)+ Math.pow((Obj.rightKneeY-Obj.leftKneeX),2));
  console.log(AB + " " + BC + " " + AC);
  var angleRad = Math.acos(((Math.pow(AB, 2)) + (Math.pow(BC, 2)) - (Math.pow(AC, 2))) / (2 * AB * BC));
  console.log(angleRad);
  return angleRad * 180/Math.PI;
}

function response(degrees) {
  console.log(degrees);
  if(degrees <= 30){
    //shy guy
  }
  else if (degrees <= 60) {
    //considerate man

  }
  else if (degrees <= 90) {
    //b-ball sprawl

  }
  else if (degrees <= 120) {
    //come on, I can see your mooseknuckle

  }
  else if (degrees <= 150) {
    //are you kidding me?!

  }
  else if (degrees <= 180) {
    //would you fuck me? I'd fuck me

  }
  else {
    //what is wrong with you????
  }
}

$(".get-url").submit(function(event) {
  event.preventDefault();
  var imgURL = $("input[name='url']").val();
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  if (!re.test(imgURL)) {
    alert("Invalid url, please try again");
    return false;
  }
  $(".img-field").css("background-image", "url('"+imgURL+"')");
  isItManspreading();
})
