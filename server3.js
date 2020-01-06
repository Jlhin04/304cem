var http = require('http');

http.createServer(function (req, res) {
	
	
	if(req.url === "/"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + req.url);
	}else if(req.url === "/abc"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('apple');
 
	}
  
}).listen(9000);