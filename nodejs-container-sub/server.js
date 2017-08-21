const express = require('express');
const mqtt = require('mqtt')
const client  = mqtt.connect('tcp://localhost:1883')

client.on('connect', function () {
  console.log('client SUB connected')
  client.subscribe("MyCustomTopic1")
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log("message received from pub on topic " + topic + " " + message.toString())
})

// Constants
const PORT = 8181;
const HOST = '0.0.0.0';

// App
const app = express()

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
