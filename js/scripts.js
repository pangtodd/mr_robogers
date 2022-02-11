function mrRoboto(num){
  numberArray=[];
  updatedArray=[];
  for (let i = 0; i <= num; i += 1) {
    numberArray.push(i)
  }
  console.log(numberArray);

  numberArray.forEach(function(j){
    if(j===1){
      updatedArray.push("Beep")
    }else{
      updatedArray.push(j)      
    }
  })
  console.log(updatedArray);
};