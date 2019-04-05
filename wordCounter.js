//3rd party module
const Occurrences = require('occurences');

// words or characters should be ignored
const ignored =
  'the and you that for this any not with i you he she it they' +
  'your him his why them a an what if how who to of in  off was were where' +
  'is am are be been their this that those may such other from';

function wordCounter(data) {
  // received data as object and convert it to string
  let dataToString = data.toString();
  // delete line breaks and white spaces
  let correctData = dataToString.replace(/(\r\n|\n|\r)/gm, ' ').trim();
  // use the module
  let myResult = new Occurrences(correctData, { ignored: ignored });
  //sort data by default desc
  let count = myResult.getSorted();
  //take the first 10 items
  let items = count.slice(0, 10);
  return items;
}

module.exports = wordCounter;
