var $ = require('jquery');
var os = require('os');

$('button').on('click', function () {
	alert( os.cpus()[0].model )
})