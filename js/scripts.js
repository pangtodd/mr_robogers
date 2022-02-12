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

  $("form.refresh").submit(function() {
    location.reload(true);
  });

  $("form#reverse").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $("#input").hide();
    const name=$("input#userName").val();
    const userNum= parseInt($("input#userNumber").val());
    mrRoboto(userNum, name);
    const reversedArray=updatedArray.reverse();
    console.log(reversedArray);
    $(".name").append(name);
    $(".results").append(reversedArray.join(",<br>"));
  });

  function mrRoboto(num, name){
    numberArray=[];
    updatedArray=[];
    for (let i = 0; i <= num; i += 1) {
      numberArray.push(i)
    };
    numberArray.forEach(function(j){
      if(j.toString().includes("3")){
        updatedArray.push('"Won\'t you be my neighbor,'+name+'?"');
      }else if(j.toString().includes("2")) {
        updatedArray.push('"Boop!"');
      }else if(j.toString().includes("1")) {
        updatedArray.push('"Beep!"');     
      }else{
        updatedArray.push(j);
      }
    })
  };
});