const getData = require('./dataRequest');
const wordCounter = require('./wordCounter');

const urls = [
  'http://www.astro.up.pt/~sousasag/ares/readme.txt',
  'http://math.hws.edu/javanotes/README-running-the-examples.txt',
  'https://courses.cs.washington.edu/courses/cse326/02wi/homework/hw5/README-1.txt',
  'https://courses.cs.washington.edu/courses/cse326/02wi/homework/hw5/README-2.txt',
  'https://courses.cs.washington.edu/courses/cse326/02wi/homework/hw5/README-3.txt',
];

async function dataProcessing(urls) {
  try {
    // passing urls to function for processing
    let string = await getData(urls);
    // take the Occurring words
    let item = wordCounter(string);
    console.log('Most Occurring words:');
    console.log(item);
  } catch (error) {
    //detection of errors
    console.log(error.message);
  }
}

dataProcessing(urls);
