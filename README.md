? Logo

## Description
## Architecture
## Examples

## required format

TYPE BLOG ACCORDING TO FORMAT codeproject_tempate.htm

## running

1 create blogs in folder (blog/)
2 create feed items (./codeproject.sh)
3 create .rss (node main.js)
4 host xml .rss file (https://localhost/abakasam-codeproject/.rss)

### example

1 node-v10.24.1/bin/node main.js >> .rss
2 node-v10.24.1/bin/node server.js

3 https://drifty-abakasam720639.codeanyapp.com/.rss
4 https://www.codeproject.com/script/Articles/BlogFeed.aspx
5 ?

## software

	node		10.24.1
	mime-db		1.25.0
	mime-types	2.1.13
	rss			1.2.2
	xml			1.0.1

## article

### rss example

https://www.reddit.com/.rss (example.rss)

### filename

mmddyyyy-username-blog

#### foldername example

(path)=/home/cabox/workspace

(path)/username/blog/(filename)

##### foldername recommendation

username/blog/(filename)

### fitletitle

Title:       Enter Article Title Here
Description: Enter a one-liner that describes your article
Abstract:    Enter a single paragraph (or less) that summarise what this article is about

Author:      Enter your Code Project User Name (or suggest one if you're not a member)
Email:       Enter your Code Project E-mail Login (or the email you wish to use if not a member)

Language:    Enter the Languages that Apply to Your Article (TypeScript, C# 3.0, etc.)
Platform:    Enter the Platforms that Apply to Your Article (Linux, Android, Windows etc.)
Technology:  Enter the Technologies that Apply to Your Article (.NET Core, node.js, etc.)
Topic:       What is the article about (Graphimg, AI, data processing etc)

Section      Enter the Code Project Section you Wish the Article to Appear
SubSection   Enter the Code Project SubSection you Wish the Article to Appear

License:     Enter the license (<a href="http://www.codeproject.com/info/licenses.aspx">CPOL, CPL, MIT, etc</a>)

#### title template

Date, Title, Description, Abstract, Author, Email, Language, Platform, Technology, Topic, Section, SubSection, License

### topics

codeproject-topics.mhtml

### format

codproject-template.htm