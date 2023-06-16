# TODO: Parse title of blog

declare -A article

blogname="06102022-abakasam-blog"
fileblog="/home/cabox/workspace/abakasam/blog/"$blogname

while read line
do
	IFS=","; read -ra part <<< "$line"

	article["Date"]=${part[0]}
	article["Title"]=${part[1]}
	article["Description"]=${part[2]}
	
	article["Abstract"]=${part[3]}
	
	article["Author"]=${part[4]}
	article["Email"]=${part[5]}
	
	article["Language"]=${part[6]}
	article["Platform"]=${part[7]}
	article["Technology"]=${part[8]}
	
	article["Topic"]=${part[9]}
	article["Section"]=${part[10]}
	article["SubSection"]=${part[11]}
	
	article["License"]=${part[12]}
			
	break
done < $fileblog

article["Body"]=$(cat $fileblog)

$blogurl=""

feeditem="feed.item({ 
	title: ${article["Title"]},
	description: ${article["Description"]},
	url: $blogurl$blogname,
	author: ${article["Author"]},
	date: ${article["Date"]},
)"

#>> codeproject.blogs

# TODO: Create .rss feed item

filefeed=""
fileitems=""

feed=$(cat $filefeed)
items=$(cat $fileitems)
