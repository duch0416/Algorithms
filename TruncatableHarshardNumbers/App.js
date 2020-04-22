const checkIsHarshard = (num) => {
  let truncationNums = [num];
  digitsArr = num
    .toString()
    .split("")
    .map((digit) => parseInt(digit));

  digitsSum = digitsArr.reduce((acc, value) => (acc += value), 0);
  
  if (num % digitsSum == 0) {
    if (num / digitsSum > 10) {
      const truncatedNum = parseInt(digitsArr.splice(0, digitsArr.length - 1).join(""));
      console.log(truncatedNum);
      truncationNums = [...truncationNums, checkIsHarshard(truncatedNum)];
      if(truncationNums[truncationNums.length -1]){
        return truncationNums[0];
      }else {
          return false
      }
    } else if (num / digitsSum <= 10 || num / digitsSum === num) {
      return truncationNums[0];
    }
  }else return false
};

const rthnBetween = (a, b) => {
  const numsBetweenAB = [];
  const harshardNums = [];
  if (a <= 10) {
    for (let i = 10; i <= b; i++) {
      numsBetweenAB.push(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      numsBetweenAB.push(i);
    }
  }
  numsBetweenAB.forEach((num) => checkIsHarshard(num) && harshardNums.push(checkIsHarshard(num)));
  console.log(harshardNums)
  return harshardNums;
};

rthnBetween(2200, 2300);
