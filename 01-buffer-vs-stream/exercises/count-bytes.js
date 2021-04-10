/*
  Exercise

  Write a function that receives a stream and counts the number of bytes in the stream.
*/

export default async function countBytes (srcStream) {
  return new Promise((resolve, reject) => {
    let size = 0
    srcStream.on('data', (chunk) => { size += chunk.length })
    srcStream.on('end', () => resolve(size))
    srcStream.on('error', (error) => reject(error))
    // ... implement here the logic to count the number of bytes in the stream
    // ... invoke resolve passing the actual number of bytes when the stream is finished
    // ... invoke reject in case of error to propagate the error
  })
}
