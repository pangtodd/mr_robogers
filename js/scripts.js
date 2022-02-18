$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $("#input").hide();
    const name=$("input#userName").val();
    const userNum= parseInt($("input#userNumber").val());
    mrRoboto(userNum, name);
    $(".name").append(name);
    $(".results").append(updatedArray.join(",<br>"));
  });

  $("form#reverse").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $("#input").hide();
    const name=$("input#userName").val();
    const userNum= parseInt($("input#userNumber").val());
    mrRoboto(userNum, name);
    const reversedArray=updatedArray.reverse();
    $(".name").append(name);
    $(".results").append(reversedArray.join(",<br>"));
  });

  $("button.refresh").click(function() {
    location.reload(true);
  });

// Business logic below

  function mrRoboto(num, name){
    let numberArray=[];
    let updatedArray=[];
    for (let i = 0; i <= num; i += 1) {
      numberArray.push(i)
    };
    numberArray.forEach(function(j){
      let indexString = j.toString();
      if(indexString.includes("3")){
        updatedArray.push('"Won\'t you be my neighbor,'+name+'?"');
      }else if(indexString.includes("2")) {
        updatedArray.push('"Boop!"');
      }else if(indexString.includes("1")) {
        updatedArray.push('"Beep!"');     
      }else{
        updatedArray.push(j);
      }
    })
  };
});