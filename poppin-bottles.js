function calculateBottle(dollar) {
  var totalPop = Math.floor(dollar / 2);
  var currentBottles = totalPop;
  var emptyBottles = 0;
  var caps = 0;

  while(true) {
    if (currentBottles > 0) {
      emptyBottles += currentBottles;
      caps += currentBottles;
      currentBottles = 0;
    } else {
      currentBottles = Math.floor(emptyBottles / 2) + Math.floor(caps / 4);
      emptyBottles = Math.floor(emptyBottles % 2);
      caps = Math.floor(caps % 4);
    }

    totalPop += currentBottles;

    if (currentBottles == 0 && (currentBottles + emptyBottles) < 2 && (currentBottles + caps) < 4) break;
  }

  console.log("currentBottles : " + currentBottles);
  console.log("emptyBottles : " + emptyBottles);
  console.log("caps : " + caps);
  console.log("totalPop : " + totalPop);

  return totalPop;
}

console.log(calculateBottle(20));
