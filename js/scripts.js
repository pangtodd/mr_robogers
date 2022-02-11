function mrRoboto(num){
  numberArray=[];
  updatedArray=[];
  for (let i = 0; i <= num; i += 1) {
    numberArray.push(i)
  }
  console.log("initial array: "+numberArray);

  numberArray.forEach(function(j){
    if(j.toString().includes("3")){
      updatedArray.push("Won't you be my neighbor?")
    }else if(j.toString().includes("2")) {
      updatedArray.push("Boop!")
    }else if(j.toString().includes("1")) {
      updatedArray.push("Beep!")      
    }else{
      updatedArray.push(j)
    }
  })
  console.log("updated array: "+updatedArray);
};