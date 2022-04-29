let count = 0;

function cc(card) {
  // Only change code below this line
  console.log(count + "  Hold")

  if (7 > card >1 ) {
    count++;
  }

  else if (10 > card > 6) {

  }
  else {
    switch (card) {
      case 10:
        count--;
        break;
      case "J":
        count--;
        break;
      case "Q":
        count--;
        break;
      case "K":
        count--;
        break;
      case "A":
        count--;
        break;
    }
  }
  if (count > 0 ) {
      console.log(count + " Bet")

    return count + " Bet"
  }
  else {
    console.log(count + "  Hold")
    return count + " Hold"
  }
  console.log(count + "  Hold")

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');