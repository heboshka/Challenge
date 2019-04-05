# Challenge

## Task

Show the top 10 most occurring words in a set of documents retrieved from a list of URLs

## In detail

Build a Node.js script that retrieves the set of documents in parallel. If a retrieval fails, retry again after 5
seconds for a maximum of 10 times (per document).
Convert the plain text documents into a list of words and find the top 10 most occurring words across
the combined documents and output these to the console.
Notes
● You can use any 3rd party module
● Pick code efficiency and cleanliness over speed of development
