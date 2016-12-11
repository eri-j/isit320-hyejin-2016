var servers = [
    'http://168.156.47.142:5984',
    'http://127.0.0.1:5984',
    'http://192.168.2.19:5984'
];

var serverIndex = 0;
var serverUrl = servers[serverIndex];
console.log(serverUrl);

module.exports.serverUrl = serverUrl;