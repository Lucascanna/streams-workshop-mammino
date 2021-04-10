import { createServer } from 'http'

// Write a "uppercasify" web server. A server that takes the incoming text in
// the body of the request and responds with the same text but "uppercasified".
// Don't forget to handle backpressure!

export default function makeServer () {
  return createServer((req, res) => {
    // ... write your code here

    // read the source data with
    // req.on('data', (chunk) => {})

    // write the response with
    // res.write(chunk)
    // remember to uppercasify and to handle backpressure

    req.on('data', chunk => {
      const canContinue = res.write(chunk.toString().toUpperCase())
      if (!canContinue) {
        req.pause()
        res.once('drain', () => req.resume())
      }
    })
    req.on('end', () => {
      res.end()
    })
    // when req is finished we need to end the response
  })
}
