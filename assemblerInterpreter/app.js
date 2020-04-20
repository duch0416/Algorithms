const program = ['mov a -10','mov b a','inc a','dec b','jnz a -2'];
const variables = [];
const instructions = {
  INC: "inc",
  DEC: "dec",
  MOV: "mov",
  JNZ: "jnz",
};

const calculate = (variables, instruction, parameter) => {
  variables.forEach((variable) => {
    if (variable.name === parameter) {
      if (instruction === instructions.INC) {
        variable.value = variable.value + 1;
      } else {
        variable.value = variable.value - 1;
      }
    }
  });
};

const simple_assembler = (program) => {
  program.forEach((instruction, index) => {
    const instName = instruction.split(" ").splice(0, 1).join("");
    const instValue = isNaN(
      parseInt(instruction.split(" ").splice(2, 1).join(""))
    )
      ? instruction.split(" ").splice(2, 1).join("")
      : parseInt(instruction.split(" ").splice(2, 1).join(""));
    const parameter = instruction.split(" ").splice(1, 1).join("");



    if (instName === instructions.MOV) {
      if (typeof instValue === "string") {
        const value = variables.find((variable) => variable.name === instValue)
          .value;
        variables.push({ name: parameter, value: value });
      } else {
        variables.push({ name: parameter, value: instValue });
      }
    } else if (instName === instructions.INC || instName === instructions.DEC) {
      calculate(variables, instName, parameter);
    } else if (instName === instructions.JNZ) {
      if (instValue > 0) {
        program.splice(index, instValue)
      } else {
        const value = variables.find((variable) => variable.name === parameter).value
          
        if (value != 0) {
          const coppyProgram = [...program];
          const newProgram = coppyProgram.splice(
            index + instValue,
            Math.abs(instValue) + 1
          );
          return simple_assembler(newProgram, variables);
        }
      }
    }
  });


  let obj = variables.reduce((obj, item) => {
    obj[item.name] = item.value;
    return obj;
  }, {});


  console.log(obj);
  return obj;
};

simple_assembler(program, variables);
