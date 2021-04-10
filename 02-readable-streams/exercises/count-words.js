/*
  Exercise

  Write a function that receives a stream and counts the number of words in the stream.
  Be careful that in a chunk you might receive a word that is currently truncated, so
  try to figure out how to reconcile words spanning 2 chunks.
*/

export default async function countWords (srcStream) {
  // ... implement here the logic to count the number of words in the stream
  // ... return the actual number of words when the stream is finished
  let count = 0
  for await (const chunk of srcStream) {
    count += (chunk.toString('utf-8').split(/\s+/).length - 1)
  }
  return count
}
