const express = require('express');
const mqtt = require('mqtt')
const client  = mqtt.connect('tcp://localhost:1883')

let counter = 0
client.on('connect', function () {
  console.log('client PUB connected')
  client.subscribe('MyCustomTopic1')
  setInterval(() => {
    client.publish('MyCustomTopic1', counter.toString())
    console.log('Sent message to topic MyCustomTopic1: ' + counter);
    counter++
  }, 300)
})

// Constants
const PORT = 8282;
const HOST = '0.0.0.0';

// App
const app = express();
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
