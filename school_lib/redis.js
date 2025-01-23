const redis = require('redis')
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})
client.connect()

client.on('error', (err) => {
  console.log('Error ' + err)
})

client.on('connect', () => {
  console.log('Connected to Redis')
})

client.on('ready', () => {
  console.log('Redis is ready')
})

client.on('end', () => {
  console.log('Redis connection closed')
})

client.on('reconnecting', () => {
  console.log('Reconnecting to Redis')
})

// client.set('key', 'value', (err, reply) => {
//   console.log(reply) // OK
// })

module.exports = client