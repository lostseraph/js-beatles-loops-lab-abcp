function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var n = 0;
  while(n < facts.length) {
    facts[n] += "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!");
    i++;
  } while(i < 15);
  return array;
}