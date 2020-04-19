const price = 2;
const bonus = 1500;

const beeramid = (bonus, price) => {
  const beersNumber = Math.floor(bonus / price);
  let floors = 0;
  let usedBeers = 0;

  for (let i = 1; usedBeers < beersNumber; i++) {
    usedBeers += Math.pow(i, 2);
    if (usedBeers <= beersNumber) {
      floors++;
    }
  }
  console.log(floors)
};

beeramid(10, 2)
