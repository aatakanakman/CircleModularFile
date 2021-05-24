const http = require('http');

const circleArea = require('./circleArea');
const circleCircumference = require('./circleCircumference');


const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
	res.write('Merhaba Dünya!');
	res.end();
});

server.listen(3000, () => {
	console.log('Uygulama çalıştırıldı...');
});



let area = circleArea(5);
let circum = circleCircumference(5);
console.log(area,circum.toFixed(2));