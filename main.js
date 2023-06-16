var RSS = require('rss');

directory = {
	feed: '/home/cabox/workspace/desktop/codeproject-rss'
}

console.log('.rss hosted at ' + directory.feed)

var feed = new RSS({
	title: 'abakasamblog',
	description: 'abakasamblog',
	feed_url: 'https://drifty-abakasam720639.codeanyapp.com/.rss',
	site_url: 'https://drifty-abakasam720639.codeanyapp.com',
	language: 'en',
	ttl: '60'
})

var item = {
	title: 'example',
	description: 'example',
	url: 'https://raw.githubusercontent.com/abakasam/abakasam/main/blog/01042023-abakasam-blog',
	author: 'example',
	date: '06152022'
}

feed.item(item)

var xml = feed.xml()

console.log(xml)