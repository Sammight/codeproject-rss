# CodeProject RSS

![Logo](https://raw.githubusercontent.com/abakasam/codeproject-rss/main/logo.png)

## Description

Creating .rss to contribute to programming community by CodeProject.

## Architecture

### Modules

	node		10.24.1
	mime-db		1.25.0
	mime-types	2.1.13
	rss			1.2.2
	xml			1.0.1

### Process

1. Create blogs in folder
2. Create feed items
3. Create .rss (example: https://www.reddit.com/.rss)
4. Host xml .rss file
5. Import blog on codeproject

1. blog/mmddyyyy-<username>-blog
2. [CentOS 7] ./codeproject.sh
3. [CentOS 7] node-10.24.1/bin/node main.js >> .rss
4. [CentOS 7] node-10.24.1/bin/node server.js, https://localhost/abakasam-codeproject/.rss
5. https://www.codeproject.com/script/Articles/BlogFeed.aspx

### Runtime

hardware? > system > application > user > network

#### System
linux > node

#### Application
xml > rss > http

#### User

##### Folder Format

(path)/username/blog/mmddyyyy-username-blog

username/
username/blog
username/blog/(filename)
abakasam/
abakasam/blog
abkaasam/blog/06162023-abakasam-blog

##### Title Format

Date, Title, Description, Abstract, Author, Email, Language, Platform, Technology, Topic, Section, SubSection, License

codeproject_template.htm: STEP 1

#### Example Article

codeproject_article.mhtml

- Title: Chess Program in C#
- Description: SrcChess is a chess program built in C#
- Abstract: SrcChess is a chess program that supports a reasonable number of functions and is built using C#
- Author: Jacques Fournier
- Email: <username>@<domain>
- Language: C#
- Platform: Windows
- Technology: WPF
- Topic: C# chess game
- Section: Game Development
- SubSection
- License: GPL3

### Team

	codeproject-rss/	
		server.js		node development server for user
		codeproject.sh	uses CodeProject template to create article
		.rss			RSS blog
		main.js			creates xml for RSS blog