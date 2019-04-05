// require retry-axios it should be require npm package but i copied it locally
// because i made  editing in package( it took retryDelay for first iteration)
// and it used Formula: (2^currentAttempt - 1 / 2) * 1000 for delay between retries so i edit it to 5000

const rax = require('./retry-axios');
const axios = require('axios');

const interceptorId = rax.attach();

//retrying configuration
const raxConfig = {
  retry: 10,
  noResponseRetries: 10, // like connection errors
  retryDelay: 5000, // it is work only for first iteration
  httpMethodsToRetry: ['GET'],
  statusCodesToRetry: [[100, 199], [400, 445], [500, 599]],
  onRetryAttempt: err => {
    const cfg = rax.getConfig(err);
    console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
  },
};

async function getData(urls) {
  let data = urls.map(async url => {
    console.log('Requesting Text From: ' + url);
    //fetch url parallel
    //store the result in variable
    const plainText = await axios({
      url: url,
      raxConfig,
    })
      .then(res => {
        if (typeof res.data === 'string') {
          return res.data;
        }
      })
      .catch(function(err) {
        //detection of errors
        console.log(`${url} ` + err.message);
      });
    return plainText;
  });

  // return the results for all valid urls
  return Promise.all(data);
}

module.exports = getData;
