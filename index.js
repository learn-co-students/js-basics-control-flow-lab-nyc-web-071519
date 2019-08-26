function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride > 2500) {
    return "No can do.";
  } else if (ride > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (ride <= 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let rightCity = city == "NYC" ? ("Ok, sounds good.") : ("No go.");
  return rightCity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye."
  }
}