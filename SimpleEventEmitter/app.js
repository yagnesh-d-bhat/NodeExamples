var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

emtr.on('exit', function () {
	console.log("Bye, come back again!");
});

emtr.on('exit', function () {
	console.log("Bye, dont come back :)");
});

console.log('Hello!');
emtr.emit('greet');
emtr.emit('exit');
