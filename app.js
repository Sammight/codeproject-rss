	var fs = require('fs')
	const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})