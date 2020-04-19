const program = ["mov a 5", "inc a", "dec a", "dec a", "jnz a 1", "inc a"];

const instructions = {
  INC: "inc",
  DEC: "dec",
  MOV: "mov",
  JNZ: "jnz",
};

const splitInstructions = (program) => {
  return program.map((instruction) => {
    return {
      name: instruction.split(" ").splice(0, 1).join(""),
      parameter: instruction.split(" ").splice(1, 1).join(""),
      value: instruction.split(" ").splice(2, 1).join("")
        ? parseInt(instruction.split(" ").splice(2, 1).join(""))
        : 0,
    };
  });
};

const simple_assembler = (program) => {
  const instructionsArr = splitInstructions(program);
  let a;

  for (let i = 0; i < instructionsArr.length; i++) {
    if (instructionsArr[i].name === instructions.MOV) {
      a = instructionsArr[i].value;
    } else if (instructionsArr[i].name === instructions.INC) {
      a++;
    } else if (instructionsArr[i].name === instructions.DEC) {
      a--;
    } else if (instructionsArr[i].name === instructions.JNZ) {
      for (let j = a; j > 0; j--) {
        if (instructionsArr[i].value > 0) {
          a--;
        } else {
          a++;
        }
      }
    }
  }
  console.log(a);
  console.log(instructionsArr);
};

simple_assembler(program);
