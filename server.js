var file = {
	stream: require('fs'),
	path: __dirname + '/' + 'message'
}

file.stream.readFile('.rss', function(error, buffer) {
	var reader = new (require('string_decoder')).StringDecoder('UTF8')
	var readings = reader.write(buffer)

  
	file.stream.stat(file.path, function(error, stats) {
		if(error) { return }

		if(stats.isFile()) {
			file.stream.unlinkSync(file.path)
		}
	})
	
	var content = new Uint8Array(Buffer.from(readings))
	
  // TODO: Create write stream (Complete)
  
  //file.stream.unlink('message', function(error) {})	
  
  var execute = require('child_process').exec
  execute('rm message')
  
	// BUG: Silent fail on one run (Complete)
	//file.stream.writeFile('message', content, function(error) {})
  
  execute('touch message')
  file.stream.writer = file.stream.createWriteStream('message')
  file.stream.writer.write('hello')
  file.stream.writer.end()
  
  // TODO: Remove first line from file.stream.writeFile
  // rm message | sed '1d' message >> message
})
